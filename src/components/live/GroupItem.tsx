"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import LiveItem from "./LiveItem";

interface StreamData {
    id: string;
    thumbnail: string;
    username: string;
    isMobile?: boolean;
    isHD?: boolean;
    rank?: number;
    badge?: string;
    flag?: string;
}

interface GroupItemProps {
    title: string;
    flag?: string;
    streams: StreamData[];
    seeAllLink?: string;
}

export default function GroupItem({
    title,
    flag,
    streams,
    seeAllLink = "#"
}: GroupItemProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        if (!scrollRef.current) return;

        const observer = new ResizeObserver(() => {
            checkScroll();
        });

        observer.observe(scrollRef.current);

        checkScroll();
        const timer = setTimeout(checkScroll, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [streams]);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 500);
        }
    }

    return (
        <section className="py-6 flex flex-col group/section">
            <div className="flex items-center justify-between mb-4 px-1 md:px-0">
                <div className="flex items-center gap-3">
                    {flag && <span className="text-xl md:text-2xl leading-none">{flag}</span>}
                    <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">{title}</h2>
                </div>
                <Link
                    href={seeAllLink}
                    className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group/seeall"
                >
                    See All
                    <ChevronRight size={16} className="transition-transform group-hover/seeall:translate-x-1" />
                </Link>
            </div>

            <div className="relative">
                {canScrollLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-zinc-800 text-white opacity-0 group-hover/section:opacity-100 hover:bg-[#f23b75] hover:border-transparent transition-all -ml-5 shadow-xl ring-4 ring-black/10"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                    style={{ gridAutoColumns: 'min-content' }}
                >
                    {streams.map((stream) => (
                        <div key={stream.id} className="w-[calc(44vw-1rem)] md:w-[calc(28vw-1.5rem)] lg:w-[calc(16.666vw-1.5rem)] min-w-[220px] flex-shrink-0 snap-start">
                            <LiveItem
                                thumbnail={stream.thumbnail}
                                username={stream.username}
                                isMobile={stream.isMobile}
                                isHD={stream.isHD}
                                rank={stream.rank}
                                badge={stream.badge}
                                flag={stream.flag}
                            />
                        </div>
                    ))}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-zinc-800 text-white opacity-0 group-hover/section:opacity-100 hover:bg-[#f23b75] hover:border-transparent transition-all -mr-5 shadow-xl ring-4 ring-black/10"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </section>
    );
}
