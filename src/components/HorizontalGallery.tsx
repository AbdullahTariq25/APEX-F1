"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const frames = [15, 30, 45, 60, 75, 90, 105, 120];

export default function HorizontalGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const section = sectionRef.current;
        const track = trackRef.current;

        const wrapWidth = track.scrollWidth;
        const scrollAmount = wrapWidth - window.innerWidth;

        let ctx = gsap.context(() => {
            gsap.to(track, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollAmount}`,
                    scrub: 1,
                    pin: true,
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen bg-background overflow-hidden flex flex-col justify-center" id="gallery">
            <div className="max-w-7xl mx-auto px-6 w-full mb-10 pt-20">
                <h2 className="font-bebas text-5xl md:text-6xl uppercase">
                    360° <span className="text-primary-accent text-stroke">VIEW</span>
                </h2>
            </div>

            <div className="w-full overflow-hidden">
                <div ref={trackRef} className="flex gap-8 px-6 w-max items-center h-[500px]">
                    {frames.map((frameNum, i) => (
                        <div
                            key={i}
                            className="relative w-[500px] md:w-[600px] h-[350px] md:h-[400px] rounded-xl overflow-hidden group shrink-0 shadow-2xl"
                        >
                            <div className="absolute inset-0 border-2 border-primary-accent/0 group-hover:border-primary-accent z-20 rounded-xl transition-all duration-300 pointer-events-none"></div>

                            <Image
                                src={`/frames/frame${String(frameNum).padStart(4, "0")}.jpg`}
                                alt={`Angle ${frameNum}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                            />

                            {/* Frame Label */}
                            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 border border-primary-accent/30 text-primary-accent font-bebas tracking-widest text-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                ANGLE // {String(frameNum).padStart(3, "0")}°
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
