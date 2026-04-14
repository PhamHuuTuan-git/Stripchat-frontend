import { useEffect, useRef, useState } from "react";
import { } from "@heroui/react";

import {
    ChevronDown,
    Mic,
    MicOff,
    Video,
    Volume2
} from "lucide-react";
import {
    Modal,
    Button,
} from "@heroui/react";

import { WebRtcModalProps } from "../types";

function WebRtc({ webrtcModal }: WebRtcModalProps) {
    const [isMuted, setIsMuted] = useState(false);
    const [audioLevel, setAudioLevel] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        if (!webrtcModal.isOpen) return;

        let isMounted = true;

        async function setUpWebRtc() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });

                if (!isMounted) return;

                streamRef.current = stream;
                setCameraStream(stream);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

                const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                const analyser = audioContext.createAnalyser();
                const source = audioContext.createMediaStreamSource(stream);

                source.connect(analyser);
                analyser.fftSize = 256;

                audioContextRef.current = audioContext;
                analyserRef.current = analyser;

                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                const updateAudioLevel = () => {
                    if (!analyserRef.current) return;

                    analyserRef.current.getByteFrequencyData(dataArray);

                    let sum = 0;
                    for (let i = 0; i < bufferLength; i++) {
                        sum += dataArray[i];
                    }

                    const average = sum / bufferLength;
                    const level = Math.min(100, Math.pow(average / 128, 0.5) * 100);

                    setAudioLevel(level);
                    animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
                };

                updateAudioLevel();

            } catch (err) {
                console.error("Camera access denied", err);
            }
        }

        setUpWebRtc();

        return () => {
            isMounted = false;

            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }

            setCameraStream(null);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }

            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }

            analyserRef.current = null;
            setAudioLevel(0);

            webrtcModal.close();
        };

    }, [webrtcModal.isOpen]);

    const stopWebRTC = () => {
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
        }
        setCameraStream(null);

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }

        analyserRef.current = null;
        setAudioLevel(0);
        webrtcModal.close();
    };

    return (
        <Modal.Root state={webrtcModal}>
            <Modal.Backdrop className="bg-black/60 backdrop-blur-md z-[70] flex items-center justify-center p-4">
                <Modal.Container className="w-[90vw] max-w-[1280px] overflow-hidden animate-in zoom-in-95 duration-200">
                    <Modal.Dialog className="max-w-none bg-zinc-950 border border-zinc-800 shadow-2xl rounded-3xl w-full relative">
                        <div className="w-full max-w-none grid grid-cols-1 md:grid-cols-2">
                            {/* Preview Side */}
                            <div className="relative aspect-video lg:aspect-square bg-black rounded-l-3xl overflow-hidden border-r border-zinc-900">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-x-[-1]"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Camera active</span>
                                </div>
                            </div>

                            {/* Controls Side */}
                            <div className="p-10 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Web Start Setup</h2>
                                        <p className="text-xs font-bold text-zinc-500 mt-1 uppercase tracking-widest">Adjust your devices before going live</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Select Input Source</label>
                                            <div className="space-y-2">
                                                <Button className="w-full h-14 bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-bold flex justify-between px-4 rounded-xl hover:border-[#f23b75] bg-transparent">
                                                    <div className="flex items-center gap-3">
                                                        <Video size={18} className="text-[#f23b75]" />
                                                        Facetime HD Camera
                                                    </div>
                                                    <ChevronDown size={14} />
                                                </Button>
                                                <Button className="w-full h-14 bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-bold flex justify-between px-4 rounded-xl hover:border-[#f23b75] bg-transparent">
                                                    <div className="flex items-center gap-3">
                                                        <Volume2 size={18} className="text-blue-500" />
                                                        System Internal Mic
                                                    </div>
                                                    <ChevronDown size={14} />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Audio Level</label>
                                                <Button
                                                    isIconOnly
                                                    variant="ghost"
                                                    onPress={() => setIsMuted(!isMuted)}
                                                    className={`h-8 w-8 bg-transparent border-none ${isMuted ? "text-[#f23b75]" : "text-zinc-500"}`}
                                                >
                                                    {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                                                </Button>
                                            </div>
                                            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                                <div
                                                    className={`h-full transition-all duration-100 ${isMuted ? "bg-zinc-800" : "bg-gradient-to-r from-blue-500 via-[#f23b75] to-green-500"}`}
                                                    style={{ width: `${isMuted ? 0 : audioLevel}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 mt-10">
                                    <Button
                                        className="w-full h-14 bg-[#f23b75] hover:bg-[#ff4d85] text-white font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all border-none"
                                        onPress={() => { console.log("LIVE STARTED"); stopWebRTC(); }}
                                    >
                                        Start Live Now
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full h-12 text-zinc-500 font-black uppercase tracking-widest hover:text-white bg-transparent border-none"
                                        onPress={stopWebRTC}
                                    >
                                        Cancel Setup
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Modal.CloseTrigger className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer outline-none" />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal.Root>
    );
}

export default WebRtc;