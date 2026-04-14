"use client";

import { useState } from "react";
import { Heart, Smartphone } from "lucide-react";
import Image from "next/image";
import { Button, useOverlayState } from "@heroui/react";
import { StreamChat, Tip, StreamVideo, Goal } from "@/features/models/stream";

export default function StreamPage() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showChatOverlay, setShowChatOverlay] = useState(true);
    const tipState = useOverlayState();


    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleSendTip = (amount: string) => {
        console.log("Send tip", amount);
    };

    return (
        <div className={`flex flex-col lg:flex-row gap-6 ${isFullScreen ? "fixed inset-0 z-[9999] bg-black gap-0" : ""}`}>
            <div className={`flex-grow flex flex-col gap-4 flex-[2] ${isFullScreen ? "h-full w-full gap-0 rounded-none overflow-hidden" : ""}`}>
                <StreamVideo
                    isFullScreen={isFullScreen}
                    toggleFullScreen={toggleFullScreen}
                    setShowChatOverlay={setShowChatOverlay}
                    showChatOverlay={showChatOverlay}
                />

                {!isFullScreen && (
                    <div className="flex flex-col gap-6 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 backdrop-blur-md">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-full border-2 border-[#f23b75] p-0.5 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src="https://picsum.photos/seed/avatar/200/200"
                                        alt="Avatar"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-2xl font-black text-white tracking-tight">Model_Username</h1>
                                        <Smartphone size={18} className="text-[#f23b75]" />
                                        <Button isIconOnly variant="ghost" className="text-zinc-400 hover:text-[#f23b75] transition-colors">
                                            <Heart fill="currentColor" size={22} />
                                        </Button>
                                    </div>
                                    <p className="text-sm text-zinc-400 font-medium italic opacity-80">"Playing with some items! Come and join me ❤️"</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button
                                    className="bg-[#f23b75] text-white font-black uppercase text-xs tracking-[0.2em] px-10 h-14 shadow-[0_8px_30px_rgba(242,59,117,0.3)] hover:translate-y-[-2px] transition-all"
                                >
                                    Private show
                                </Button>

                                <Tip tipState={tipState} handleSendTip={handleSendTip} />
                            </div>
                        </div>

                        <div className="w-full border-t border-zinc-800/50 pt-6 mt-2">
                            <Goal />
                        </div>
                    </div>
                )}
            </div>

            {!isFullScreen && (
                <div className="w-full lg:flex-[1] h-[600px] flex-shrink-0">
                    <StreamChat streamId="current-stream" />
                </div>
            )}
        </div>
    );
}
