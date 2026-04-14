import { memo } from "react";
import {
    Star,
    Edit2,
} from "lucide-react";
import {
    Button,
    Input,
    Modal,
} from "@heroui/react";
import { GoalProps } from "../types";

function Goal({ editGoalModal, goalTokens, goalTitle, goalDescription, setGoalTokens, setGoalTitle, setGoalDescription }: GoalProps) {
    return (
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
                    <Modal.Dialog className="bg-[#0f0f12] border border-zinc-800 shadow-2xl rounded-2xl w-full overflow-hidden relative">
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
                                className="flex-1 h-12 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all border-none"
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
    );
}

export default memo(Goal);