"use client";

import { useCallback, useState } from "react";
import {
    VideoOff,
    ChevronDown,
    Star
} from "lucide-react";
import {
    Input,
    Card,
    useOverlayState
} from "@heroui/react";
import { Obs, WebRtc, StreamModal, Goal } from "@/features/stream-setup";

export default function StreamSetupPage() {
    const [title, setTitle] = useState("Late Night Lounge ✨");
    const [category, setCategory] = useState("cinematic");
    const [tags, setTags] = useState("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    // Modals
    const startStreamModal = useOverlayState();
    const obsModal = useOverlayState();
    const webrtcModal = useOverlayState();
    const editGoalModal = useOverlayState();

    // Goal States
    const [goalTokens, setGoalTokens] = useState(10000);
    const [goalTitle, setGoalTitle] = useState("Special Performance Unlock");
    const [goalDescription, setGoalDescription] = useState("");

    const categories = [
        { id: "cinematic", label: "Cinematic Performance" },
        { id: "gaming", label: "Gaming & Chill" },
        { id: "talk", label: "Just Chatting" },
        { id: "asmr", label: "ASMR Experience" }
    ];

    const currentCategoryLabel = categories.find(c => c.id === category)?.label || "Select category";

    // OBS Simulation
    const handleStartOBS = useCallback(() => {
        startStreamModal.close();
        obsModal.open();
    }, [startStreamModal, obsModal]);

    // WebRTC Simulation
    const handleStartWebRTC = useCallback(() => {
        startStreamModal.close();
        webrtcModal.open();
    }, [startStreamModal, webrtcModal]);

    return (
        <div className="min-h-screen bg-black text-white p-6 lg:p-10 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                        Stream Setup
                    </h1>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
                        Configure your broadcast for maximum impact
                    </p>
                </div>

                <StreamModal
                    startStreamModal={startStreamModal}
                    handleStartOBS={handleStartOBS}
                    handleStartWebRTC={handleStartWebRTC}
                />

                {/* OBS Info Modal */}
                <Obs obsModal={obsModal} />

                {/* WebRTC Setup Modal */}
                <WebRtc webrtcModal={webrtcModal} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                <div className="xl:col-span-8 space-y-6">
                    <div className="relative aspect-video bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[url('https://picsum.photos/seed/setup-bg/1920/1080?grayscale')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-zinc-800/40 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-2xl">
                                    <VideoOff size={32} className="text-[#f23b75]" />
                                </div>
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400">
                                    Camera currently inactive
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-6">
                    <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-md p-6 rounded-[2rem]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f23b75]" />
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Stream Details</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Broadcast Title</label>
                                <Input
                                    placeholder="e.g., Late Night Lounge ✨"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full h-14 bg-black border border-zinc-700/50 rounded-xl px-4 text-zinc-200 font-bold focus-within:border-[#f23b75] transition-colors"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Category</label>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                        className="w-full bg-black border border-zinc-700/50 h-14 rounded-xl px-4 flex items-center justify-between text-zinc-200 font-bold text-sm hover:border-zinc-500 transition-colors"
                                    >
                                        {currentCategoryLabel}
                                        <ChevronDown size={18} className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden py-2">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => {
                                                        setCategory(cat.id);
                                                        setIsCategoryOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                                                >
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Tags</label>
                                <textarea
                                    placeholder="Add tags separated by commas..."
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="w-full bg-black border border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-200 font-bold text-sm focus:border-[#f23b75] outline-none transition-colors min-h-[100px]"
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-md p-6 rounded-[2rem]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Performance Goal</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="p-5 bg-black/40 rounded-2xl border border-white/5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                    <Star className="text-purple-500" size={24} fill="currentColor" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg font-black text-white truncate">
                                        {goalTokens.toLocaleString()} TOKENS
                                    </div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest truncate">
                                        {goalTitle}
                                    </div>
                                </div>
                            </div>

                            <Goal editGoalModal={editGoalModal} goalTokens={goalTokens} goalTitle={goalTitle} goalDescription={goalDescription} setGoalTokens={setGoalTokens} setGoalTitle={setGoalTitle} setGoalDescription={setGoalDescription} />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
