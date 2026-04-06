"use client";

import { useState } from "react";
import {
    VideoOff,
    Settings,
    ChevronDown,
    Star,
    Monitor,
    Mic,
    Edit2,
    Play,
    Zap,
    Layout,
} from "lucide-react";
import {
    Button,
    Input,
    Card,
    Modal,
    useOverlayState
} from "@heroui/react";

export default function StreamSetupPage() {
    const [title, setTitle] = useState("Late Night Lounge ✨");
    const [category, setCategory] = useState("cinematic");
    const [tags, setTags] = useState("");
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const startStreamModal = useOverlayState();

    const [goalTokens, setGoalTokens] = useState(10000);
    const [goalTitle, setGoalTitle] = useState("Special Performance Unlock");
    const [goalDescription, setGoalDescription] = useState("");
    const editGoalModal = useOverlayState();

    const categories = [
        { id: "cinematic", label: "Cinematic Performance" },
        { id: "gaming", label: "Gaming & Chill" },
        { id: "talk", label: "Just Chatting" },
        { id: "asmr", label: "ASMR Experience" }
    ];

    const currentCategoryLabel = categories.find(c => c.id === category)?.label || "Select category";

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

                <Modal.Root state={startStreamModal}>
                    <Modal.Trigger>
                        <Button
                            className="bg-[#f23b75] hover:bg-[#ff4d85] text-white font-black uppercase text-sm tracking-widest px-10 h-14 rounded-xl shadow-[0_10px_40px_rgba(242,59,117,0.3)] transition-all hover:scale-[1.02] active:scale-95 border-none"
                        >
                            <Play size={18} fill="currentColor" />
                            Start Stream
                        </Button>
                    </Modal.Trigger>
                    <Modal.Backdrop className="bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
                        <Modal.Container className="w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-200">
                            <Modal.Dialog className="bg-[#0f0f12] border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl w-full overflow-hidden">
                                <Modal.Header className="flex flex-col gap-1 items-center border-b border-zinc-900/50 p-6 bg-zinc-900/20">
                                    <div className="w-10 h-10 rounded-full bg-[#f23b75]/10 flex items-center justify-center mb-2">
                                        <Play size={20} className="text-[#f23b75]" fill="currentColor" />
                                    </div>
                                    <h2 className="text-xl font-black text-white uppercase tracking-tighter">Choose Streaming Method</h2>
                                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Select how you want to broadcast today</p>
                                </Modal.Header>

                                <Modal.Body className="py-8 px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        className="group p-6 bg-zinc-900/30 hover:bg-zinc-800/80 border-zinc-800/50 hover:border-[#f23b75] border rounded-2xl transition-all flex flex-col items-center text-center gap-4"
                                        onClick={() => { console.log("Stream with OBS"); startStreamModal.close(); }}
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <Monitor size={32} className="text-blue-500 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#f23b75] transition-colors mb-1">With OBS</h3>
                                            <p className="text-[11px] text-zinc-500 font-medium leading-tight max-w-[200px]">Use professional software for advanced setups.</p>
                                        </div>
                                    </button>

                                    <button
                                        className="group p-6 bg-zinc-900/30 hover:bg-zinc-800/80 border-zinc-800/50 hover:border-[#f23b75] border rounded-2xl transition-all flex flex-col items-center text-center gap-4"
                                        onClick={() => { console.log("Quick Start Stream"); startStreamModal.close(); }}
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-[#f23b75]/10 flex items-center justify-center shrink-0 border border-[#f23b75]/10 group-hover:bg-[#f23b75] group-hover:text-white transition-all">
                                            <Zap size={32} className="text-[#f23b75] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#f23b75] transition-colors mb-1">Quick Start</h3>
                                            <p className="text-[11px] text-zinc-500 font-medium leading-tight max-w-[200px]">Start directly from your browser instantly.</p>
                                        </div>
                                    </button>
                                </Modal.Body>

                                <Modal.Footer className="border-t border-zinc-900/50 p-4 flex justify-center bg-zinc-900/10">
                                    <Button
                                        onPress={() => startStreamModal.close()}
                                        className="text-[10px] font-bold text-zinc-600 hover:text-white uppercase tracking-widest bg-transparent border-none"
                                    >
                                        Cancel
                                    </Button>
                                </Modal.Footer>

                                <Modal.CloseTrigger className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-colors bg-transparent border-none cursor-pointer outline-none" />
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal.Root>
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

                            <Modal.Root state={editGoalModal}>
                                <Modal.Trigger>
                                    <Button
                                        variant="outline"
                                        className="w-full h-14 border-zinc-800 hover:border-zinc-700 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-zinc-800/50 text-zinc-400 hover:text-white transition-all bg-transparent"
                                    >
                                        <Edit2 size={14} className="mr-2" />
                                        Edit Goal
                                    </Button>
                                </Modal.Trigger>

                                <Modal.Backdrop className="bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
                                    <Modal.Container className="w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                                        <Modal.Dialog className="bg-[#0f0f12] border border-zinc-800 shadow-2xl rounded-2xl w-full overflow-hidden">
                                            <Modal.Header className="flex flex-col gap-1 items-center border-b border-zinc-900/50 p-6 bg-zinc-900/20">
                                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                                                    <Star size={20} className="text-purple-500" fill="currentColor" />
                                                </div>
                                                <h2 className="text-xl font-black text-white uppercase tracking-tighter">Edit Performance Goal</h2>
                                                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Set a new target for your community</p>
                                            </Modal.Header>

                                            <Modal.Body className="p-8 space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Goal Amount (Tokens)</label>
                                                    <Input
                                                        type="number"
                                                        placeholder="e.g., 10000"
                                                        value={goalTokens.toString()}
                                                        onChange={(e) => setGoalTokens(Number(e.target.value))}
                                                        className="w-full h-14 bg-black border border-zinc-700/50 rounded-xl px-4 text-zinc-200 font-bold focus-within:border-purple-500 transition-colors"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Goal Title</label>
                                                    <Input
                                                        placeholder="e.g., Special Performance Unlock"
                                                        value={goalTitle}
                                                        onChange={(e) => setGoalTitle(e.target.value)}
                                                        className="w-full h-14 bg-black border border-zinc-700/50 rounded-xl px-4 text-zinc-200 font-bold focus-within:border-purple-500 transition-colors"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Goal Description</label>
                                                    <textarea
                                                        placeholder="Describe what happens when this goal is reached..."
                                                        value={goalDescription}
                                                        onChange={(e) => setGoalDescription(e.target.value)}
                                                        className="w-full bg-black border border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-200 font-bold text-sm focus:border-purple-500 outline-none transition-colors min-h-[100px]"
                                                    />
                                                </div>
                                            </Modal.Body>

                                            <Modal.Footer className="border-t border-zinc-900/50 p-6 flex gap-3 bg-zinc-900/10">
                                                <Button
                                                    onPress={() => editGoalModal.close()}
                                                    className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all"
                                                >
                                                    Save Changes
                                                </Button>
                                                <Button
                                                    onPress={() => editGoalModal.close()}
                                                    className="h-12 px-6 text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-widest bg-transparent border border-zinc-800 rounded-xl transition-all"
                                                >
                                                    Cancel
                                                </Button>
                                            </Modal.Footer>

                                            <Modal.CloseTrigger className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-colors bg-transparent border-none cursor-pointer outline-none" />
                                        </Modal.Dialog>
                                    </Modal.Container>
                                </Modal.Backdrop>
                            </Modal.Root>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
