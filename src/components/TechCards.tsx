"use client";

import { motion } from "framer-motion";

const cards = [
    {
        title: "1.6L V6 Turbo Hybrid",
        description: "Thermal efficiency over 50%. The most advanced power unit ever created, delivering seamless energy recovery.",
        icon: (
            <svg className="w-12 h-12 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "900+ Aero Components",
        description: "Every millimeter of the surface is sculpted to direct airflow, generating 2.5 tonnes of peak downforce.",
        icon: (
            <svg className="w-12 h-12 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143z" />
            </svg>
        )
    },
    {
        title: "Carbon Fiber Chassis",
        description: "Ultra-lightweight composite weave. Withstands massive impact forces while providing extraordinary torsional rigidity.",
        icon: (
            <svg className="w-12 h-12 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
        )
    }
];

export default function TechCards() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative" id="technology-cards">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bebas text-5xl md:text-6xl mb-16 text-center"
                >
                    RACE <span className="text-primary-accent">TECHNOLOGY</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i, duration: 0.6 }}
                            className="bg-surface p-8 border border-white/5 hover:border-primary-accent rounded-xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,229,196,0.1)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="mb-6">{card.icon}</div>
                            <h3 className="font-bebas text-2xl tracking-wide mb-4 group-hover:text-primary-accent transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-text-muted font-light leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
