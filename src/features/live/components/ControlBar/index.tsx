"use client";

import { memo, useState } from "react";

import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    Share2,
    PhoneOff
} from "lucide-react";
import {
    Button,
} from "@heroui/react";

import type { ControlBarProps } from "../../types";

function ControlBar({ muteCam, muteMic, shareScreen, endCall }: ControlBarProps) {
    const [isMuted, setIsMuted] = useState(false);
    const [isCamOff, setIsCamOff] = useState(false);

    const handleMuteMic = () => {
        setIsMuted(!isMuted);
        muteMic();
    };

    const handleMuteCam = () => {
        setIsCamOff(!isCamOff);
        muteCam();
    };

    const handleShareScreen = () => {
        shareScreen();
    };

    const handleEndCall = () => {
        endCall();
    };

    return (
        <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-3 rounded-[2rem] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
            <div className="flex items-center gap-1 group" title={isMuted ? "Unmute Mic" : "Mute Mic"}>
                <div className="flex flex-col items-center gap-1">
                    <Button
                        isIconOnly
                        onPress={handleMuteMic}
                        className={`w-14 rounded-2xl transition-all ${isMuted ? "bg-zinc-800 text-zinc-400" : "bg-white/5 text-white hover:bg-white/10"}`}
                    >
                        {isMuted ? <MicOff size={22} /> : <Mic size={22} />}
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-1 group" title={isCamOff ? "Turn On Camera" : "Turn Off Camera"}>
                <div className="flex flex-col items-center gap-1">
                    <Button
                        isIconOnly
                        onPress={handleMuteCam}
                        className={` w-14 rounded-2xl transition-all ${isCamOff ? "bg-zinc-800 text-zinc-400" : "bg-white/5 text-white hover:bg-white/10"}`}
                    >
                        {isCamOff ? <VideoOff size={22} /> : <Video size={22} />}
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-1 group" title="Share Screen">
                <div className="flex flex-col items-center gap-1">
                    <Button
                        isIconOnly
                        onPress={handleShareScreen}
                        className="w-14 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all font-bold"
                    >
                        <Share2 size={22} />
                    </Button>
                </div>
            </div>

            <div className="w-[1px] h-10 bg-white/10 mx-2" />

            <div className="flex flex-col items-center gap-1 group">
                <Button
                    className="px-8 rounded-2xl bg-[#f23b75] hover:bg-red-600 text-white font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-[#f23b75]/20 flex flex-col justify-center"
                    onPress={handleEndCall}
                >
                    <PhoneOff size={22} className="mb-0.5" />
                </Button>
            </div>
        </div>
    )
}

export default memo(ControlBar);