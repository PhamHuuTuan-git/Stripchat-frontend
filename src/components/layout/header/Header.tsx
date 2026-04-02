"use client";

import { Button, Badge } from "@heroui/react";
import { Menu, Search, MessageSquare, Bell, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from "../../../redux/slices/sidebar.slice";
import { userSelector } from "@/redux/selector";

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    return (
        <header className="sticky top-0 z-50 w-full bg-[#18181b] border-b border-zinc-800">
            <div className="flex h-16 items-center px-4 justify-between gap-4">
                <div className="flex items-center gap-6">
                    <button onClick={() => dispatch(toggleSidebar())} className="text-zinc-400 hover:text-white transition-colors">
                        <Menu size={24} />
                    </button>

                    <Link href="/" className="flex items-center gap-1">
                        <div className="text-2xl font-black tracking-tight text-white flex items-center">
                            Clim<span className="text-[#f23b75]">ara</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-6 ml-4">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f23b75] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f23b75]"></span>
                            </span>
                            <span className="text-sm font-bold text-white group-hover:text-[#f23b75] transition-colors">8916 LIVE</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <Trophy size={18} />
                            <span className="text-sm font-semibold">Top Models</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 max-w-2xl px-4">
                    <div className="flex-1 max-w-2xl px-4 relative flex items-center h-10 bg-zinc-900 border border-zinc-800 rounded-full focus-within:border-[#f23b75] focus-within:bg-zinc-900 transition-colors">
                        <Search className="text-zinc-500 ml-4 mr-2" size={18} />
                        <input
                            placeholder="Find anything you want..."
                            type="search"
                            className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-zinc-500"
                        />
                        <div className="flex items-center gap-2 mr-1">
                            <button className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f23b75]/10 border border-[#f23b75]/30 text-[#f23b75] hover:bg-[#f23b75]/20 hover:scale-105 transition-all text-xs font-bold whitespace-nowrap">
                                <Sparkles size={14} />
                                Magic Search 3
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-6 sm:gap-8 shrink-0">
                    <button className="text-zinc-400 hover:text-white transition-colors hidden sm:flex items-center justify-center">
                        <MessageSquare size={22} />
                    </button>
                    <button className="text-zinc-400 hover:text-white transition-colors hidden sm:flex items-center justify-center relative">
                        <Badge content="3" color="danger" size="sm" placement="top-right">
                            <Bell size={22} />
                        </Badge>
                    </button>

                    <Button
                        className="bg-[#c8e23e] text-black font-bold h-9 px-4 rounded-full text-sm hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(200,226,62,0.3)]"
                    >
                        Add Tokens
                    </Button>

                    {
                        !user ? (
                            <Link href='/login'>Login</Link>
                        ) : (
                            <button className="flex items-center justify-center h-8 w-8 rounded-full border border-zinc-700 hover:border-[#f23b75] bg-zinc-900 transition-colors">
                                <span className="text-xs font-semibold text-white">A</span>
                            </button>
                        )
                    }
                </div>
            </div>

            <div className="flex bg-[#121214] h-12 items-center px-4 md:px-14 gap-8 overflow-x-auto no-scrollbar border-b border-zinc-800">
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-white hover:text-[#f23b75] transition-colors border-b-2 border-transparent hover:border-[#f23b75] py-3">Girls</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Couples</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Guys</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Trans</Link>
            </div>
        </header>
    );
}
