"use client";

import { useState } from "react";
import { Heart, Coins, Maximize, Minimize, Eye, EyeOff, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import { Button, Modal, Input, Label, useOverlayState, ProgressBar } from "@heroui/react";
import StreamChat from "@/components/live/StreamChat";

export default function StreamPage() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [showChatOverlay, setShowChatOverlay] = useState(true);
    const tipState = useOverlayState();
    const [tipAmount, setTipAmount] = useState("");

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleSendTip = () => {
        if (!tipAmount || isNaN(Number(tipAmount))) return;
        console.log(`Sent tip: ${tipAmount} tokens`);
        setTipAmount("");
        tipState.close();
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

                    {isFullScreen && showChatOverlay && (
                        <div className="absolute bottom-6 left-6 z-30 transition-all animate-in fade-in slide-in-from-left-4 duration-500">
                            <StreamChat streamId="current-stream" isOverlay={true} />
                        </div>
                    )}
                </div>

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
                                    Follow
                                </Button>

                                <Modal.Root state={tipState}>
                                    <Modal.Trigger>
                                        <Button
                                            variant="outline"
                                            className="bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase text-xs tracking-[0.2em] px-10 h-14 border-zinc-700 hover:border-zinc-600"
                                        >
                                            <Coins size={16} className="mr-2 text-yellow-500" />
                                            Tip
                                        </Button>
                                    </Modal.Trigger>
                                    <Modal.Backdrop className="bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 transition-all animate-in fade-in duration-300">
                                        <Modal.Container className="w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                                            <Modal.Dialog className="bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl w-full overflow-hidden">
                                                <Modal.Header className="flex flex-col gap-1 items-center border-b border-zinc-800 p-6 bg-zinc-900/50 backdrop-blur-sm">
                                                    <div className="w-12 h-12 rounded-full bg-[#f23b75]/10 flex items-center justify-center mb-2 animate-bounce">
                                                        <Coins size={24} className="text-[#f23b75]" />
                                                    </div>
                                                    <span className="text-xl font-black text-white uppercase tracking-wider">Send a Tip</span>
                                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Support Model_Username</p>
                                                </Modal.Header>

                                                <Modal.Body className="py-8 px-8 group">
                                                    <div className="space-y-6">
                                                        <div className="flex flex-col gap-3">
                                                            <Label className="text-zinc-400 font-bold uppercase text-[10px] tracking-[0.1em]">Amount of Tokens</Label>
                                                            <div className="relative">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 flex items-center justify-center">
                                                                    <Coins size={20} />
                                                                </div>
                                                                <Input
                                                                    type="number"
                                                                    placeholder="0"
                                                                    value={tipAmount}
                                                                    onChange={(e) => setTipAmount(e.target.value)}
                                                                    className="w-full bg-zinc-800/80 border border-zinc-700 hover:border-[#f23b75] focus:border-[#f23b75] text-white font-black text-2xl h-16 pl-12 rounded-xl transition-all outline-none"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-4 gap-3">
                                                            {[10, 25, 50, 100].map((amount) => (
                                                                <button
                                                                    key={amount}
                                                                    type="button"
                                                                    onClick={() => setTipAmount(amount.toString())}
                                                                    className="py-3 bg-zinc-800 hover:bg-[#f23b75]/20 border border-zinc-700 hover:border-[#f23b75] rounded-xl text-[11px] font-black text-zinc-400 hover:text-[#f23b75] transition-all"
                                                                >
                                                                    +{amount}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Modal.Body>

                                                <Modal.Footer className="gap-3 border-t border-zinc-800 p-6 flex justify-between items-center bg-zinc-900/50">
                                                    <Button
                                                        variant="ghost"
                                                        onPress={() => tipState.close()}
                                                        className="font-bold text-zinc-500 hover:text-white border-transparent hover:bg-zinc-800 px-6"
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        className="bg-[#f23b75] text-white font-black uppercase text-xs tracking-widest px-10 h-12 shadow-[0_4px_25px_rgba(242,59,117,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex-grow"
                                                        onPress={handleSendTip}
                                                    >
                                                        <Send size={16} className="mr-2" />
                                                        Send Tip
                                                    </Button>
                                                </Modal.Footer>

                                                <Modal.CloseTrigger className="absolute top-4 right-4 text-zinc-500 hover:text-white hover:bg-zinc-800 p-2 rounded-full transition-all border-none bg-transparent outline-none cursor-pointer" />
                                            </Modal.Dialog>
                                        </Modal.Container>
                                    </Modal.Backdrop>
                                </Modal.Root>
                            </div>
                        </div>

                        <div className="w-full border-t border-zinc-800/50 pt-6 mt-2">
                            <div className="flex flex-col gap-3 max-w-2xl">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f23b75]">Live Goal</span>
                                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.1em]">1,625 / 2,500 Tokens</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-sm font-bold text-white tracking-tight">Oshiete Reward: Private Show! 🎥</h3>
                                        <span className="text-lg font-black text-[#f23b75]">65%</span>
                                    </div>

                                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#f23b75] to-[#ff6b9d] rounded-full shadow-[0_0_25px_rgba(242,59,117,0.6)] transition-all duration-1000 ease-out flex items-center justify-end px-2"
                                            style={{ width: '65%' }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px] animate-pulse" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-500 font-medium">Goal: 2,500 tokens to unlock a special private performance for all current viewers!</p>
                                </div>
                            </div>
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
