"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 340, unit: "km/h", label: "Top Speed" },
    { value: 1.6, unit: "sec", label: "0-100 km/h", decimal: true },
    { value: 1000, unit: "HP", label: "Hybrid Power" },
    { value: 798, unit: "kg", label: "Dry Weight" }
];

export default function StatsBar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        countersRef.current.forEach((counter, i) => {
            if (!counter) return;
            const target = stats[i].value;
            const isDecimal = stats[i].decimal;

            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                snap: { innerHTML: isDecimal ? 0.1 : 1 },
                onUpdate: function () {
                    if (isDecimal) {
                        counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                    } else {
                        counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
                    }
                }
            });
        });
    }, []);

    return (
        <section ref={containerRef} className="w-full bg-surface border-t border-primary-accent py-16" id="performance">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span
                                ref={(el) => { if (el) countersRef.current[i] = el; }}
                                className="font-bebas text-5xl md:text-7xl text-white"
                            >
                                0
                            </span>
                            <span className="font-bebas text-2xl md:text-3xl text-primary-accent">
                                {stat.unit}
                            </span>
                        </div>
                        <div className="text-text-muted uppercase tracking-widest text-sm font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
