import { memo, useEffect, useState } from "react";
import {
    Copy,
    Check,
    Loader2
} from "lucide-react";
import { Modal, Input, Button } from "@heroui/react";

import type { ObsModalProps } from "../types";

function Obs({ obsModal }: ObsModalProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [obsInfo, setObsInfo] = useState<{ streamKey: string; rtmpUrl: string; streamId: string } | null>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    useEffect(() => {
        setIsGenerating(true);
        setTimeout(() => {
            setObsInfo({
                streamKey: "live_482910394_xY2k9Pz5Wq8N1m7V",
                rtmpUrl: "rtmp://live.stripchat.com/app",
                streamId: "st-99218-alpha-001"
            });
            setIsGenerating(false);
        }, 2500);

        return () => {
            setObsInfo(null);
            setIsGenerating(false);
        }
    }, [obsModal.isOpen]);

    return (
        <Modal.Root state={obsModal}>
            <Modal.Backdrop className="bg-black/60 backdrop-blur-md z-[70] flex items-center justify-center p-4">
                <Modal.Container className="w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200">
                    <Modal.Dialog className="bg-zinc-950 border border-zinc-800 shadow-2xl rounded-3xl w-full relative">
                        <Modal.Header className="p-8 border-b border-zinc-900 text-center">
                            <h2 className="text-2xl font-black text-white uppercase">External Encoder Setup</h2>
                            <p className="text-xs font-bold text-zinc-500 mt-1">Copy these credentials to your streaming software (OBS/vMix)</p>
                        </Modal.Header>
                        <Modal.Body className="p-8 space-y-6">
                            {isGenerating ? (
                                <div className="flex flex-col items-center justify-center py-10 gap-4">
                                    <Loader2 className="w-12 h-12 text-[#f23b75] animate-spin" />
                                    <p className="text-sm font-black uppercase tracking-widest text-[#f23b75] animate-pulse">Generating Stream Credentials...</p>
                                </div>
                            ) : obsInfo && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {[
                                        { label: "Server URL", value: obsInfo.rtmpUrl, key: "url" },
                                        { label: "Stream Key", value: obsInfo.streamKey, key: "key", secret: true },
                                        { label: "Broadcast ID", value: obsInfo.streamId, key: "id" }
                                    ].map((field) => (
                                        <div key={field.key} className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">{field.label}</label>
                                            <div className="relative group">
                                                <Input
                                                    readOnly
                                                    value={field.value}
                                                    type={field.secret ? "password" : "text"}
                                                    className="w-full h-14 bg-black border border-zinc-800 rounded-xl px-4 text-zinc-200 font-mono text-sm pr-12 focus-within:border-[#f23b75] transition-colors"
                                                />
                                                <Button
                                                    isIconOnly
                                                    variant="ghost"
                                                    onPress={() => copyToClipboard(field.value, field.key)}
                                                    className="absolute right-2 top-2 h-10 w-10 text-zinc-500 hover:text-[#f23b75]"
                                                >
                                                    {copiedField === field.key ? <Check size={18} /> : <Copy size={18} />}
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer className="p-8 border-t border-zinc-900 bg-zinc-900/20">
                            <Button
                                className="w-full h-14 bg-[#f23b75] hover:bg-[#ff4d85] font-black uppercase tracking-widest rounded-xl text-sm border-none"
                                onPress={() => obsModal.close()}
                            >
                                I'm Ready to Broadcast
                            </Button>
                        </Modal.Footer>
                        <Modal.CloseTrigger className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer outline-none" />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal.Root>
    );
}

export default memo(Obs);