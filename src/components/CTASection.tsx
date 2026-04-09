"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden" id="contact">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-primary-accent rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-white rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bebas text-6xl md:text-8xl mb-6"
                >
                    EXPERIENCE THE <span className="text-primary-accent">APEX</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-text-muted font-light mb-12"
                >
                    Book a private viewing session or configure your bespoke machine.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button className="px-10 py-5 bg-primary-accent text-background font-bebas text-xl tracking-widest hover:bg-white transition-colors duration-300 transform hover:-translate-y-1">
                        BOOK NOW
                    </button>
                    <button className="px-10 py-5 border border-white/20 text-white font-bebas text-xl tracking-widest hover:border-primary-accent hover:text-primary-accent transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                        <span className="relative z-10">LEARN MORE</span>
                        <div className="absolute inset-0 bg-primary-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
