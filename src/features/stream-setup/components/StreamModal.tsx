import {
    Monitor,
    Play,
    Zap
} from "lucide-react";
import {
    Button,
    Modal
} from "@heroui/react";
import { memo } from "react";
import type { StreamModalProps } from "../types";
function StreamModal({ startStreamModal, handleStartOBS, handleStartWebRTC }: StreamModalProps) {
    return (
        <Modal.Root state={startStreamModal}>
            <Modal.Trigger>
                <Button
                    onPress={() => startStreamModal.open()}
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
                                onClick={handleStartOBS}
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
                                onClick={handleStartWebRTC}
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
    )
}

export default memo(StreamModal);