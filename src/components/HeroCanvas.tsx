"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const totalFrames = 120;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        let isCancelled = false;

        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(totalFrames);
            let firstFrameDrawn = false;

            const loadImage = (index: number) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = `/frames/frame${String(index + 1).padStart(4, "0")}.jpg`;
                    img.onload = () => {
                        if (isCancelled) return;
                        loadedImages[index] = img;
                        if (!firstFrameDrawn && index === 0) {
                            firstFrameDrawn = true;
                            drawFrame(img);
                        }
                        resolve();
                    };
                    img.onerror = () => resolve();
                });
            };

            const firstBatch = [];
            for (let i = 0; i < Math.min(10, totalFrames); i++) {
                firstBatch.push(loadImage(i));
            }
            await Promise.all(firstBatch);

            for (let i = 10; i < totalFrames; i++) {
                if (isCancelled) break;
                await loadImage(i);
            }

            if (!isCancelled) {
                imagesRef.current = loadedImages;
            }
        };

        loadImages();

        return () => {
            isCancelled = true;
        };
    }, []);

    const drawFrame = (img: HTMLImageElement) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        const gradient = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, canvas.height / 4,
            canvas.width / 2, canvas.height / 2, canvas.height
        );
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, 'rgba(5,5,5,0.8)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const scrollTop = window.scrollY;
            const maxScroll = container.scrollHeight - window.innerHeight;
            const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(scrollFraction * totalFrames)
            );

            const img = imagesRef.current[frameIndex];
            if (img) {
                rafId = requestAnimationFrame(() => drawFrame(img));
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        const handleResize = () => {
            handleScroll();
        };
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-[500vh]" id="hero">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex items-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-2xl pointer-events-auto"
                    >
                        <div className="text-primary-accent font-bebas tracking-widest mb-4">
                            RACE SPECIFICATION — 2025
                        </div>
                        <h1 className="font-bebas text-7xl md:text-9xl leading-[0.8] mb-6 drop-shadow-lg">
                            BUILT FOR <span className="text-primary-accent">SPEED</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-text-muted mb-10 max-w-lg">
                            Every angle engineered. Every surface optimized.
                        </p>
                        <button className="px-8 py-4 border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-black transition-all duration-300 font-bebas text-xl tracking-widest relative overflow-hidden group">
                            <span className="relative z-10 transition-colors duration-300">EXPLORE THE MACHINE</span>
                            <div className="absolute inset-0 bg-primary-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                        </button>
                    </motion.div>
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/10 hidden md:block z-10">
                    <motion.div
                        className="w-full bg-primary-accent origin-top"
                        style={{ height: "100%", scaleY: scrollYProgress }}
                    />
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 pointer-events-none z-10"
                >
                    <span className="text-xs uppercase tracking-widest font-bebas">Scroll</span>
                    <ChevronDown size={20} />
                </motion.div>
            </div>
        </div>
    );
}
