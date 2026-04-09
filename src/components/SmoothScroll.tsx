"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            wheelMultiplier: 1.2,
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        const updateGSAP = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateGSAP);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateGSAP);
        };
    }, []);

    return <>{children}</>;
}
