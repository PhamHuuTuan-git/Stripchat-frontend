import { memo } from "react"
import { StreamVideoProps } from "../types";
import { Button } from "@heroui/react";
import { Maximize, Minimize, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import StreamChat from "./StreamChat";

function StreamVideo({ isFullScreen, toggleFullScreen, setShowChatOverlay, showChatOverlay }: StreamVideoProps) {
    return (
        <div className={`relative aspect-video bg-black ${isFullScreen ? "h-full w-full aspect-auto rounded-none border-none" : "rounded-xl overflow-hidden group shadow-2xl border border-zinc-800/50"}`}>
            <div className="absolute inset-0 bg-zinc-900">
                <Image
                    src="https://picsum.photos/seed/stream-main/1920/1080"
                    alt="Stream Thumbnail"
                    fill
                    className={`object-cover ${isFullScreen ? "opacity-100" : "opacity-60"}`}
                />
            </div>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
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

            {isFullScreen && showChatOverlay && (
                <div className="absolute bottom-0 top-0 left-0 z-30 transition-all animate-in fade-in slide-in-from-left-4 duration-500">
                    <StreamChat streamId="current-stream" isOverlay={true} />
                </div>
            )}
        </div>
    )
}

export default memo(StreamVideo);