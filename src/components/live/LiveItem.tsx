"use client";

import Link from "next/link";
import { Video, Smartphone, Trophy } from "lucide-react";
import Image from "next/image";

interface LiveItemProps {
    thumbnail: string;
    username: string;
    isMobile?: boolean;
    isHD?: boolean;
    rank?: number;
    badge?: string
    flag?: string;
}

export default function LiveItem({
    thumbnail,
    username,
    isMobile = false,
    isHD = true,
    rank,
    badge,
    flag
}: LiveItemProps) {
    return (
        <Link href={`/${username}`} className="block group relative aspect-[16/10] overflow-hidden rounded-md bg-zinc-900 cursor-pointer shadow-lg transition-transform duration-300 hover:z-10">
            {/* Thumbnail */}
            <Image
                src={thumbnail}
                alt={username}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Top Row: Icons and Badges */}
            <div className="absolute left-2 top-2 flex items-center gap-1.5 overflow-hidden">
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded text-white border border-white/10">
                    {isMobile && <Smartphone size={14} className="text-zinc-300" />}
                    {isHD && <Video size={14} className="text-[#f23b75]" />}
                </div>
            </div>

            {/* Top Right: Rank or Badge */}
            <div className="absolute right-2 top-2 flex items-center gap-1.5">
                {rank && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f23b75] text-[10px] font-bold text-white shadow-[0_0_10px_rgba(242,59,117,0.5)]">
                        <Trophy size={10} className="mr-0.5 hidden" />
                        {rank}
                    </div>
                )}
                {badge && (
                    <div className="bg-[#f23b75] text-[10px] font-bold text-white px-1.5 py-0.5 rounded shadow-[0_0_10px_rgba(242,59,117,0.5)] uppercase">
                        {badge}
                    </div>
                )}
            </div>

            {/* Bottom Row: Username and Flag */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <div className="flex items-center gap-1 max-w-[80%]">
                    <span className="text-sm font-bold text-white truncate drop-shadow-md">{username}</span>
                </div>
                {flag && <span className="text-lg drop-shadow-md leading-none">{flag}</span>}
            </div>

            {/* Hover Play Button (optional) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="bg-[#f23b75]/90 h-10 w-10 flex items-center justify-center rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Video size={18} fill="currentColor" />
                </div>
            </div>
        </Link>
    );
}
