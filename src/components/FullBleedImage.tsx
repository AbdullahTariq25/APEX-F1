"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FullBleedImage() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ y: -50 }}
                whileInView={{ y: 50 }}
                transition={{ duration: 1.5, ease: "linear" }}
                viewport={{ once: false }}
            >
                <Image
                    src="/frames/frame0060.jpg"
                    alt="Engineering without compromise"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-background z-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-bebas text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] text-white"
                >
                    ENGINEERED WITHOUT <br />
                    <span className="text-primary-accent">COMPROMISE</span>
                </motion.h2>
            </div>
        </section>
    );
}
