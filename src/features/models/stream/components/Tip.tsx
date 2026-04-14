import { memo, useState } from "react";
import { Button, Modal, Input, Label } from "@heroui/react";
import { Coins, Send } from "lucide-react";
import { TipProps } from "../types";

function Tip({ tipState, handleSendTip }: TipProps) {
    const [tipAmount, setTipAmount] = useState("");

    const sendTip = () => {
        if (!tipAmount || isNaN(Number(tipAmount))) return;
        setTipAmount("");
        handleSendTip(tipAmount);
        tipState.close();
    }

    return (
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
                                onPress={sendTip}
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
    )
}

export default memo(Tip);