import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-primary-accent/30 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bebas text-4xl text-primary-accent tracking-wider mb-4">
                            APEX F1
                        </h3>
                        <p className="text-text-muted font-light text-sm pr-4">
                            Pushing the boundaries of automotive engineering. Designed for the track, built for the driver.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bebas text-xl tracking-widest mb-6">EXPLORE</h4>
                        <ul className="space-y-4">
                            {["Models", "Racing", "Heritage", "Aerodynamics"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-text-muted hover:text-primary-accent transition-colors text-sm uppercase tracking-wider flex items-center gap-1 group">
                                        {link}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bebas text-xl tracking-widest mb-6">SUPPORT</h4>
                        <ul className="space-y-4">
                            {["Contact Us", "Dealerships", "Media Center", "Careers"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-text-muted hover:text-white transition-colors text-sm uppercase tracking-wider">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bebas text-xl tracking-widest mb-6">SOCIAL</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-surface border border-white/5 hover:border-primary-accent hover:text-primary-accent transition-all rounded-full flex items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="p-3 bg-surface border border-white/5 hover:border-primary-accent hover:text-primary-accent transition-all rounded-full flex items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="#" className="p-3 bg-surface border border-white/5 hover:border-primary-accent hover:text-primary-accent transition-all rounded-full flex items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-xs uppercase tracking-widest">
                        © 2025 APEX Formula Racing. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-text-muted hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-text-muted hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
