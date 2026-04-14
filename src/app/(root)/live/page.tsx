"use client";

import { useState, useCallback } from "react";
import {
    Users,
    Star,
    Zap,
    ChevronDown,
    Lock,
} from "lucide-react";


import { Chat, Video as VideoPlayer, ControlBar, Goal } from "@/features/live";


export default function BroadcastPage() {
    const [streamMode, setStreamMode] = useState("Public");
    const [isModeOpen, setIsModeOpen] = useState(false);

    const [viewerCount] = useState(12432);

    const sendMessage = useCallback(() => {
        console.log("send message");
    }, []);

    const muteCam = useCallback(() => {
        console.log("mute cam");
    }, []);

    const muteMic = useCallback(() => {
        console.log("mute mic");
    }, []);

    const shareScreen = useCallback(() => {
        console.log("share screen");
    }, []);

    const endCall = useCallback(() => {
        window.history.back();
    }, []);


    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-sans">
            {/* Main Stream Area */}
            <div className="flex-1 relative flex flex-col min-w-0">
                {/* Video Player Placeholder */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <VideoPlayer />
                </div>

                {/* Top Overlay Controls */}
                <div className="relative z-10 p-6 flex justify-between items-start pointer-events-none">
                    <div className="flex gap-3 pointer-events-auto">
                        <div className="bg-[#f23b75] px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-[#f23b75]/20">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Live</span>
                        </div>
                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 flex items-center gap-2">
                            <Users size={12} className="text-zinc-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
                                {viewerCount.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 pointer-events-auto max-w-[300px] w-full">
                        {/* Mode Selector */}
                        <div className="relative w-full">
                            <button
                                onClick={() => setIsModeOpen(!isModeOpen)}
                                className="w-full bg-black/60 backdrop-blur-xl border border-white/10 h-12 rounded-xl px-4 flex items-center justify-between text-zinc-200 font-bold text-xs hover:border-[#f23b75] transition-all"
                            >
                                <div className="flex items-center gap-2">
                                    {streamMode === "Public" ? <Zap size={14} className="text-yellow-500" /> : <Lock size={14} className="text-[#f23b75]" />}
                                    <span className="uppercase tracking-widest">{streamMode} Mode</span>
                                </div>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${isModeOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isModeOpen && (
                                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
                                    {[
                                        { id: "Public", label: "Public Mode", icon: <Zap size={14} /> },
                                        { id: "Ticket-show", label: "Ticket-show", icon: <Star size={14} /> },
                                        { id: "Private room", label: "Private room", icon: <Lock size={14} /> }
                                    ].map((mode) => (
                                        <button
                                            key={mode.id}
                                            onClick={() => {
                                                setStreamMode(mode.id);
                                                setIsModeOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-[#f23b75]/20 flex items-center gap-2 transition-colors"
                                        >
                                            <span className="text-[#f23b75]">{mode.icon}</span>
                                            {mode.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                            <Goal />
                        </div>
                    </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-max pointer-events-none">
                    <ControlBar muteCam={muteCam} muteMic={muteMic} shareScreen={shareScreen} endCall={endCall} />
                </div>

                {/* Sub Stream PIP */}
                <div
                    className="absolute bottom-8 left-8 z-10 w-40 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black transition-transform duration-500 ease-in-out"
                >
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            </div>

            {/* Chat Sidebar */}
            <div className="w-[420px] bg-[#0c0c0e] border-l border-white/5 flex flex-col shadow-2xl">
                <Chat sendMessage={sendMessage} />
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
}
