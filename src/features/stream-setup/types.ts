import { OverlayTriggerState } from "@react-stately/overlays";

export interface ObsModalProps {
    obsModal: OverlayTriggerState;
}

export interface WebRtcModalProps {
    webrtcModal: OverlayTriggerState;
}

export interface StreamModalProps {
    startStreamModal: OverlayTriggerState;
    handleStartOBS: () => void;
    handleStartWebRTC: () => void;
}

export interface GoalProps {
    editGoalModal: OverlayTriggerState;
    goalTokens: number;
    goalTitle: string;
    goalDescription: string;
    setGoalTokens: (value: number) => void;
    setGoalTitle: (value: string) => void;
    setGoalDescription: (value: string) => void;
}