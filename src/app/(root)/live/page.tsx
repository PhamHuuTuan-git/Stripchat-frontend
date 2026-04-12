"use client";

import { useState, useEffect, useRef } from "react";
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    Share2,
    PhoneOff,
    Users,
    Star,
    Send,
    Smile,
    Settings,
    Maximize2,
    Shield,
    MessageSquare,
    Zap,
    ChevronDown,
    Lock,
    RotateCw,
    Menu
} from "lucide-react";
import {
    Button,
    Input,
    ScrollShadow
} from "@heroui/react";

interface ChatMessage {
    id: string;
    user: string;
    message: string;
    type: "normal" | "tip" | "system";
    tokens?: number;
    badge?: "vip" | "mod" | "fan";
    color?: string;
}

export default function BroadcastPage() {
    const [isMuted, setIsMuted] = useState(false);
    const [isCamOff, setIsCamOff] = useState(false);
    const [streamMode, setStreamMode] = useState("Public");
    const [isModeOpen, setIsModeOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [pipRotation, setPipRotation] = useState(0);
    const [goalCurrent, setGoalCurrent] = useState(18450);
    const [goalTarget] = useState(25000);
    const [viewerCount] = useState(12432);
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "1",
            user: "ViperX",
            message: "tipped 500 Tokens",
            type: "tip",
            tokens: 500,
            badge: "vip"
        },
        {
            id: "2",
            user: "Cyber_Vixen",
            message: "Absolutely loving the setup tonight! The lighting is incredible. ❤️",
            type: "normal",
            badge: "vip",
            color: "#f23b75"
        },
        {
            id: "3",
            user: "MarkStudio",
            message: "How long are you staying live today?",
            type: "normal"
        },
        {
            id: "4",
            user: "NeonGhost",
            message: "tipped 50 tokens",
            type: "tip",
            tokens: 50
        },
        {
            id: "5",
            user: "DigitalDreamer",
            message: "The goal is almost there! Let's go everyone! 🔥",
            type: "normal"
        },
        {
            id: "6",
            user: "NightWatcher",
            message: "Be respectful in the chat or get banned. Check the rules.",
            type: "normal",
            badge: "mod",
            color: "#a855f7"
        },
        {
            id: "7",
            user: "PixelPioneer",
            message: "Ready for that private show!",
            type: "normal"
        }
    ]);

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = () => {
        if (!chatInput.trim()) return;
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            user: "Model_Creator",
            message: chatInput,
            type: "normal",
            color: "#ffffff"
        };
        setMessages([...messages, newMessage]);
        setChatInput("");
    };

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-sans">
            {/* Main Stream Area */}
            <div className="flex-1 relative flex flex-col min-w-0">
                {/* Video Player Placeholder */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
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
                            <div className="flex justify-between items-end mb-3">
                                <div className="space-y-1">
                                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Private Show Goal</h3>
                                    <div className="text-sm font-black tracking-tight">
                                        <span className="text-white">{goalCurrent.toLocaleString()}</span>
                                        <span className="text-zinc-600 mx-1">/</span>
                                        <span className="text-zinc-500">{goalTarget.toLocaleString()}</span>
                                    </div>
                                </div>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 px-4 text-[9px] font-black uppercase tracking-widest border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white"
                                >
                                    Edit Goal
                                </Button>
                            </div>
                            <div className="relative h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-[#f23b75] to-pink-400 transition-all duration-1000"
                                    style={{ width: `${(goalCurrent / goalTarget) * 100}%` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-max pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-3xl border border-white/10 p-3 rounded-[2rem] flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
                        <div className="flex items-center gap-1 group" title={isMuted ? "Unmute Mic" : "Mute Mic"}>
                            <div className="flex flex-col items-center gap-1">
                                <Button
                                    isIconOnly
                                    onPress={() => setIsMuted(!isMuted)}
                                    className={`h-14 w-14 rounded-2xl transition-all ${isMuted ? "bg-zinc-800 text-zinc-400" : "bg-white/5 text-white hover:bg-white/10"}`}
                                >
                                    {isMuted ? <MicOff size={22} /> : <Mic size={22} />}
                                </Button>
                                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">Mute</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 group" title={isCamOff ? "Turn On Camera" : "Turn Off Camera"}>
                            <div className="flex flex-col items-center gap-1">
                                <Button
                                    isIconOnly
                                    onPress={() => setIsCamOff(!isCamOff)}
                                    className={`h-14 w-14 rounded-2xl transition-all ${isCamOff ? "bg-zinc-800 text-zinc-400" : "bg-white/5 text-white hover:bg-white/10"}`}
                                >
                                    {isCamOff ? <VideoOff size={22} /> : <Video size={22} />}
                                </Button>
                                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">Cam</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 group" title="Share Screen">
                            <div className="flex flex-col items-center gap-1">
                                <Button
                                    isIconOnly
                                    className="h-14 w-14 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all font-bold"
                                >
                                    <Share2 size={22} />
                                </Button>
                                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
                            </div>
                        </div>

                        <div className="w-[1px] h-10 bg-white/10 mx-2" />

                        <div className="flex flex-col items-center gap-1 group">
                            <Button
                                className="h-14 px-8 rounded-2xl bg-[#f23b75] hover:bg-red-600 text-white font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-[#f23b75]/20 flex flex-col h-[70px] justify-center"
                                onPress={() => window.history.back()}
                            >
                                <PhoneOff size={22} className="mb-0.5" />
                                <span className="text-[8px] mt-1">End Stream</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sub Stream PIP */}
                <div
                    className="absolute bottom-8 left-8 z-10 w-40 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black transition-transform duration-500 ease-in-out"
                    style={{ transform: `rotate(${pipRotation}deg)` }}
                >
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            </div>

            {/* Chat Sidebar */}
            <div className="w-[420px] bg-[#0c0c0e] border-l border-white/5 flex flex-col shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <MessageSquare size={18} className="text-[#f23b75]" />
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-200">Gallery Chat</h2>
                    </div>
                    <div className="flex gap-2 relative">
                        <div className="relative">
                            <Button
                                isIconOnly
                                variant="ghost"
                                size="sm"
                                className={`h-8 w-8 transition-colors ${isSettingsOpen ? "text-[#f23b75] bg-white/5" : "text-zinc-500 hover:text-white bg-transparent"}`}
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                            >
                                <Settings size={16} />
                            </Button>

                            {isSettingsOpen && (
                                <div className="absolute top-[calc(100%+8px)] right-0 w-48 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {[
                                        { id: "rotate", label: "Rotate game", icon: <RotateCw size={14} />, action: () => setPipRotation((prev) => (prev + 90) % 360) },
                                        { id: "menu", label: "Menu", icon: <Menu size={14} />, action: () => console.log("Menu clicked") }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                item.action();
                                                setIsSettingsOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-[#f23b75]/20 flex items-center gap-3 transition-colors"
                                        >
                                            <span className="text-[#f23b75]">{item.icon}</span>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Button isIconOnly variant="ghost" size="sm" className="h-8 w-8 text-zinc-500 hover:text-white bg-transparent">
                            <Maximize2 size={16} />
                        </Button>
                    </div>
                </div>

                <ScrollShadow className="flex-1 p-6 space-y-4">
                    {messages.map((msg) => {
                        if (msg.type === "tip") {
                            return (
                                <div key={msg.id} className="bg-gradient-to-br from-purple-900/40 to-[#f23b75]/10 border border-[#f23b75]/20 p-4 rounded-2xl flex items-center gap-4 animate-in slide-in-from-right-4 duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                                        <Zap className="text-purple-400" size={24} fill="currentColor" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-[#f23b75] mb-1 flex items-center gap-2">
                                            Mega Tip!
                                        </div>
                                        <p className="text-sm font-bold text-zinc-200">
                                            <span className="text-white">{msg.user}</span> tipped <span className="text-purple-400">{msg.tokens} Tokens</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={msg.id} className="group flex flex-col gap-1 transition-all hover:translate-x-1">
                                <div className="flex items-center gap-2">
                                    {msg.badge && (
                                        <span className={`text-[8px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded ${msg.badge === 'vip' ? 'bg-[#f23b75]/20 text-[#f23b75]' : 'bg-purple-500/20 text-purple-400'}`}>
                                            {msg.badge}
                                        </span>
                                    )}
                                    <span
                                        className="text-[13px] font-black uppercase tracking-tight"
                                        style={{ color: msg.color || '#a1a1aa' }}
                                    >
                                        {msg.user}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                                    {msg.message}
                                </p>
                            </div>
                        );
                    })}
                    <div ref={chatEndRef} />
                </ScrollShadow>

                <div className="p-6 bg-[#0c0c0e] border-t border-white/5 space-y-4">
                    <div className="relative group">
                        <Input
                            placeholder="Broadcast to chat..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl h-14 pl-5 pr-24 font-bold text-sm text-white focus-within:border-[#f23b75] transition-all"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <Button isIconOnly variant="ghost" size="sm" className="h-10 w-10 text-zinc-500 hover:text-white bg-zinc-800/50 rounded-xl">
                                <Smile size={20} />
                            </Button>
                            <Button
                                isIconOnly
                                onPress={handleSendMessage}
                                className="h-10 w-10 bg-[#f23b75] hover:bg-[#ff4d85] text-white rounded-xl shadow-lg shadow-[#f23b75]/20"
                            >
                                <Send size={18} fill="currentColor" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="ghost"
                            className="h-11 border-white/5 bg-zinc-900/30 hover:bg-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white rounded-xl"
                        >
                            <Shield size={14} className="mr-2" />
                            Banned Words
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-11 border-white/5 bg-zinc-900/30 hover:bg-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white rounded-xl"
                        >
                            <Star size={14} className="mr-2" />
                            Chat Mode
                        </Button>
                    </div>
                </div>
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
