"use client";

import { memo, useState } from "react";
import { Send } from "lucide-react";
import { StreamChatProps } from "../types";

function StreamChat({ streamId, isOverlay = false }: StreamChatProps) {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (!message.trim()) return;
        console.log(`Sending message to stream ${streamId}:`, message);
        setMessage("");
    };

    return (
        <div className={`flex flex-col ${isOverlay ? "h-full w-[350px] bg-black/20 border border-white/10" : "h-full bg-black/20 border border-zinc-800/50 rounded-xl"} overflow-hidden flex-shrink-0 transition-all duration-300`}>
            <div className={`p-4 border-b ${isOverlay ? "border-white/10 bg-white/5" : "border-zinc-800 bg-zinc-900/40"} flex items-center justify-between`}>
                <span className={`text-xs font-black uppercase tracking-[0.2em] ${isOverlay ? "text-white/70" : "text-zinc-400"}`}>Stream Chat</span>
                <div className={`text-[10px] font-bold ${isOverlay ? "text-white/40 bg-white/10" : "text-zinc-500 bg-zinc-800/50"} px-2 py-0.5 rounded uppercase`}>Connected</div>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <span className={`text-xs font-bold ${isOverlay ? "text-[#f23b75]" : "text-zinc-500"} mr-2`}>User_{i}:</span>
                        <span className={`text-sm ${isOverlay ? "text-white" : "text-zinc-300"} leading-relaxed`}>
                            {i % 2 === 0 ? "You look amazing today! 😍" : "Hello from NYC! 🗽 Can you do that again?"}
                        </span>
                    </div>
                ))}

                <div className={`pt-2 border-t ${isOverlay ? "border-white/10" : "border-zinc-800/50"}`}>
                    <div className={`flex items-center gap-2 p-2 ${isOverlay ? "bg-[#f23b75]/20" : "bg-[#f23b75]/10"} rounded border border-[#f23b75]/20`}>
                        <div className="w-8 h-8 rounded-full bg-[#f23b75] flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                            TIP
                        </div>
                        <div className="text-xs font-bold text-[#f23b75]">BigSpender_99 tipped 50 tokens!</div>
                    </div>
                </div>
            </div>

            <div className={`p-4 ${isOverlay ? "bg-white/5 border-t border-white/10" : "bg-zinc-900/80 border-t border-zinc-800"}`}>
                <div className="relative group">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type a message..."
                        className={`w-full ${isOverlay ? "bg-white/10 border-white/20 text-white placeholder:text-white/30" : "bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500"} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f23b75] transition-all`}
                    />
                    <button
                        onClick={handleSendMessage}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 ${message ? "text-[#f23b75]" : "text-zinc-400"} hover:text-[#f23b75] transition-colors`}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(StreamChat);