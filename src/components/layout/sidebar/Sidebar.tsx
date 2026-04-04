"use client";

import Link from "next/link";
import {
    Home,
    ListVideo,
    ThumbsUp,
    Heart,
    MessageCircleHeart,
    Bookmark,
    History,
    Zap,
    Ticket,
    LayoutGrid
} from "lucide-react";
import { ScrollShadow } from "@heroui/react";
import { toggleSidebar } from "../../../redux/slices/sidebar.slice";
import { store } from "../../../redux/store";
import { useSelector } from "react-redux";
import { sidebarSelectorMode } from "@/redux/selector";

export default function Sidebar() {
    const useSidebar = useSelector(sidebarSelectorMode);

    return (
        <>
            {/* Mobile Backdrop */}
            {useSidebar && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden mt-[112px]"
                    onClick={() => store.dispatch(toggleSidebar())}
                />
            )}

            <aside className={`fixed lg:sticky top-[112px] left-0 z-50 h-[calc(100vh-112px)] bg-[#18181b] border-r border-zinc-800 flex flex-col flex-shrink-0 transition-all duration-300 ${useSidebar
                ? "translate-x-0 w-[240px] opacity-100"
                : "-translate-x-full w-[240px] lg:w-0 lg:opacity-0 lg:border-none overflow-hidden"
                }`}>
                <ScrollShadow className="flex-1 w-full py-4 custom-scrollbar">
                    {/* Main Navigation */}
                    <nav className="flex flex-col px-2 gap-1 mb-8">
                        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-900 group">
                            <Home size={20} className="text-[#f23b75]" />
                            <span className="text-sm font-semibold text-[#f23b75]">Home</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <ListVideo size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Feed</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <ThumbsUp size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Recommended</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <Heart size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">My Favorites</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <MessageCircleHeart size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Best for Privates</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <Bookmark size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">My Collection</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                            <History size={20} className="text-zinc-400 group-hover:text-zinc-300" />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Watch History</span>
                        </Link>
                    </nav>

                    {/* Specials Section */}
                    <div className="flex flex-col px-2">
                        <h3 className="px-3 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Specials</h3>
                        <nav className="flex flex-col gap-1">
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🐰</span>
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Easter Celebration</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">125</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🇨🇳</span>
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Chinese</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">295</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🇺🇦</span>
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Ukrainian</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">145</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Zap size={18} className="text-zinc-400 group-hover:text-yellow-400" />
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">New Models</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">1170</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-500 text-[10px] font-bold text-white">VR</span>
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">VR Cams</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">141</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">⛓️</span>
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">BDSM</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">62</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900/50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Ticket size={18} className="text-zinc-400 group-hover:text-zinc-300" />
                                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Ticket Shows</span>
                                </div>
                                <span className="text-xs font-semibold text-zinc-500">155</span>
                            </Link>
                        </nav>

                        <div className="mt-4 px-3">
                            <button className="w-full flex items-center justify-center gap-2 py-2 border border-zinc-700 hover:border-zinc-500 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-xs font-bold text-zinc-300 transition-colors">
                                <LayoutGrid size={14} />
                                ALL CATEGORIES
                            </button>
                        </div>
                    </div>
                </ScrollShadow>
            </aside>
        </>
    );
}
