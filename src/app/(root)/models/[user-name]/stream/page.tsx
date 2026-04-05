"use client";

import React, { useState } from "react";
import { Heart, Coins, Share2, MoreVertical, Smartphone, Maximize, Minimize, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";
import StreamChat from "@/components/live/StreamChat";

export default function StreamPage() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showChatOverlay, setShowChatOverlay] = useState(true);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={`flex flex-col lg:flex-row gap-6 ${isFullScreen ? "fixed inset-0 z-[9999] bg-black gap-0" : ""}`}>
            <div className={`flex-grow flex flex-col gap-4 ${isFullScreen ? "h-full w-full gap-0 rounded-none overflow-hidden" : ""}`}>
                <div className={`relative aspect-video bg-black ${isFullScreen ? "h-full w-full aspect-auto rounded-none border-none" : "rounded-xl overflow-hidden group shadow-2xl border border-zinc-800/50"}`}>
                    <div className="absolute inset-0 bg-zinc-900">
                        <Image
                            src="https://picsum.photos/seed/stream-main/1920/1080"
                            alt="Stream Thumbnail"
                            fill
                            className={`object-cover ${isFullScreen ? "opacity-100" : "opacity-60"}`}
                        />
                    </div>

                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#f23b75] rounded text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(242,59,117,0.4)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Live
                        </div>
                        <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-bold text-zinc-300 border border-white/5 uppercase">
                            10,230 Viewers
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                        <Button
                            isIconOnly
                            variant="outline"
                            className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10"
                            onClick={toggleFullScreen}
                        >
                            {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
                        </Button>

                        {isFullScreen && (
                            <Button
                                isIconOnly
                                variant="outline"
                                className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10"
                                onClick={() => setShowChatOverlay(!showChatOverlay)}
                            >
                                {showChatOverlay ? <EyeOff size={20} /> : <Eye size={20} />}
                            </Button>
                        )}
                    </div>

                    {!isFullScreen && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-white">
                                    <Button isIconOnly variant="ghost" className="text-white hover:text-[#f23b75]">
                                        <Heart fill="currentColor" size={24} />
                                    </Button>
                                    <div className="text-sm font-bold">Model_Username is LIVE!</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {isFullScreen && showChatOverlay && (
                        <div className="absolute bottom-6 left-6 z-30 transition-all animate-in fade-in slide-in-from-left-4 duration-500">
                            <StreamChat streamId="current-stream" isOverlay={true} />
                        </div>
                    )}
                </div>

                {!isFullScreen && (
                    <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-zinc-900/50 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full border-2 border-[#f23b75] p-0.5 overflow-hidden shadow-lg">
                                <Image
                                    src="https://picsum.photos/seed/avatar/200/200"
                                    alt="Avatar"
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-black text-white tracking-tight">Model_Username</h1>
                                    <Smartphone size={16} className="text-[#f23b75]" />
                                </div>
                                <p className="text-sm text-zinc-400 font-medium">Playing with some items! Come and join me ❤️</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Button
                                className="bg-[#f23b75] text-white font-black uppercase text-xs tracking-widest px-8 h-12 shadow-[0_4px_20px_rgba(242,59,117,0.3)] hover:scale-[1.02] transition-transform"
                            >
                                Follow
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase text-xs tracking-widest px-8 h-12"
                            >
                                <Coins size={14} className="mr-2 text-yellow-500" />
                                Tip
                            </Button>
                            <Button isIconOnly variant="outline" className="bg-zinc-800 hover:bg-zinc-700 h-12 w-12 text-zinc-400">
                                <Share2 size={18} />
                            </Button>
                            <Button isIconOnly variant="outline" className="bg-zinc-800 hover:bg-zinc-700 h-12 w-12 text-zinc-400">
                                <MoreVertical size={18} />
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {!isFullScreen && (
                <div className="w-full lg:w-[400px] h-[800px] flex-shrink-0">
                    <StreamChat streamId="current-stream" />
                </div>
            )}
        </div>
    );
}
