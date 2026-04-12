"use client";

import { useState, useEffect, useRef, memo } from "react";

import {
    Star,
    Send,
    Smile,
    Settings,
    Maximize2,
    Shield,
    MessageSquare,
    Zap,
    RotateCw,
    Menu
} from "lucide-react";

import {
    Button,
    Input,
    ScrollShadow
} from "@heroui/react";

import type { ChatMessage, ChatProps } from "../../types";

function Chat({ sendMessage }: ChatProps) {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
    const [chatInput, setChatInput] = useState("");

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
        sendMessage();
    };

    return (
        <>
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
                                    { id: "rotate", label: "Rotate game", icon: <RotateCw size={14} /> },
                                    { id: "menu", label: "Menu", icon: <Menu size={14} /> }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
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
        </>
    );
}

export default memo(Chat);