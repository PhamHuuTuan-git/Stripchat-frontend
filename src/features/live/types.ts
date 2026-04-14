export interface ChatMessage {
    id: string;
    user: string;
    message: string;
    type: "normal" | "tip" | "system";
    tokens?: number;
    badge?: "vip" | "mod" | "fan";
    color?: string;
}

export interface ChatProps {
    sendMessage: () => void;
}

export interface ControlBarProps {
    muteCam: () => void;
    muteMic: () => void;
    shareScreen: () => void;
    endCall: () => void;
}