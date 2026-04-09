"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
    return (
        <section className="py-32 bg-background overflow-hidden" id="technology">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-bebas text-5xl md:text-7xl mb-6">
                            AERODYNAMIC <br /> <span className="text-primary-accent text-stroke">PERFECTION</span>
                        </h2>
                        <p className="text-xl text-text-muted font-light mb-10 max-w-lg">
                            Sculpted by the wind. Engineered for absolute downforce and minimal drag. Master the apex with F1 precision.
                        </p>

                        <ul className="space-y-6">
                            {["Carbon Fiber Monocoque", "DRS Rear Wing System", "Ground Effect Floor"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 text-lg"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary-accent shadow-[0_0_10px_#00E5C4]"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full rounded-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-primary-accent/0 group-hover:bg-primary-accent/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                        <Image
                            src="/frames/frame0030.jpg"
                            alt="Aerodynamic Detail"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-accent z-20 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-accent z-20 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
