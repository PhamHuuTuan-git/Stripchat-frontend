"use client";

import { memo, useState } from "react";

import {
    Button,
} from "@heroui/react";

function Goal() {
    const [goalCurrent, setGoalCurrent] = useState(18450);
    const [goalTarget] = useState(25000);

    return (
        <>
            <div className="flex justify-between items-end mb-3">
                <div className="space-y-1">
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Private Show Goal</h3>
                    <div className="text-sm font-black tracking-tight">
                        <span className="text-white">{goalCurrent.toLocaleString()}</span>
                        <span className="text-zinc-600 mx-1">/</span>
                        <span className="text-zinc-500">{goalTarget.toLocaleString()}</span>
                    </div>
                </div>
                <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-4 text-[9px] font-black uppercase tracking-widest border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white"
                >
                    Edit Goal
                </Button>
            </div>
            <div className="relative h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-[#f23b75] to-pink-400 transition-all duration-1000"
                    style={{ width: `${(goalCurrent / goalTarget) * 100}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" />
            </div>
        </>
    )
}

export default memo(Goal);