import { useOverlayState } from "@heroui/react";

export interface StreamVideoProps {
    isFullScreen: boolean;
    toggleFullScreen: () => void;
    setShowChatOverlay: (showChatOverlay: boolean) => void;
    showChatOverlay: boolean;
}

export interface StreamChatProps {
    streamId: string;
    isOverlay?: boolean;
}

export interface TipProps {
    tipState: ReturnType<typeof useOverlayState>;
    handleSendTip: (amount: string) => void;
}