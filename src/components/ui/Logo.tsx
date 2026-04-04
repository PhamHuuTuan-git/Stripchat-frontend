"use client";

import Link from "next/link";

interface LogoProps {
    className?: string;
    textSize?: string;
    withLink?: boolean;
    variant?: "default" | "gradient";
}

export default function Logo({
    className = "",
    textSize = "text-2xl",
    withLink = true,
    variant = "default"
}: LogoProps) {
    const LogoContent = variant === "default" ? (
        <div className={`${textSize} font-black tracking-tight text-white flex items-center ${className}`}>
            Clim<span className="text-[#f23b75]">ara</span>
        </div>
    ) : (
        <span className={`font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ${textSize} ${className}`}>
            Climara
        </span>
    );

    if (withLink) {
        return (
            <Link href="/" className="inline-flex items-center gap-1">
                {LogoContent}
            </Link>
        );
    }

    return LogoContent;
}
