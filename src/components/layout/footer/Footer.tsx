"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Shield, FileText } from "lucide-react";

const TwitterIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const InstagramIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0c] border-t border-zinc-800 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* Brand / Left Section */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <Link href="/" className="flex items-center gap-1">
                        <div className="text-2xl font-black tracking-tight text-white flex items-center">
                            Clim<span className="text-[#f23b75]">ara</span>
                        </div>
                    </Link>
                    <p className="text-sm text-zinc-400">
                        The premium live streaming platform. Connect with top creators, enjoy immersive experiences, and be part of an exclusive community.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#f23b75] hover:text-white transition-all">
                            <TwitterIcon size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#f23b75] hover:text-white transition-all">
                            <InstagramIcon size={18} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex gap-16 flex-wrap">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">About Us</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Careers</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Press</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support</h4>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors flex items-center gap-2">
                            <HelpCircle size={14} /> Help Center
                        </Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Billing</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors flex items-center gap-2">
                            <Shield size={14} /> Trust & Safety
                        </Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors flex items-center gap-2">
                            <FileText size={14} /> Guidelines
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h4>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">Cookie Policy</Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-[#f23b75] transition-colors">2257 Record Keeping</Link>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-500">
                    &copy; {new Date().getFullYear()} Climara. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-medium">18+ Only.</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                    <span className="text-xs text-zinc-500 font-medium">Please play responsibly.</span>
                </div>
            </div>
        </footer>
    );
}
