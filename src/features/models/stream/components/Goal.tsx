export default function Goal() {
    return (
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
    )
}