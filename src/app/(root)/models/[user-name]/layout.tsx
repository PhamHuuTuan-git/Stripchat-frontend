"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Video, Info } from "lucide-react";
import GroupItem from "@/components/live/GroupItem";
import Pagination from "@/components/ui/Pagination";

const mockRelatedStreams = [
    { id: "1", thumbnail: "https://picsum.photos/seed/1/400/250", username: "Related_Model_1", isMobile: true, isHD: true, rank: 1, flag: "🇺🇸" },
    { id: "2", thumbnail: "https://picsum.photos/seed/2/400/250", username: "Related_Model_2", isMobile: false, isHD: true, rank: 2, flag: "🇬🇧" },
    { id: "3", thumbnail: "https://picsum.photos/seed/3/400/250", username: "Related_Model_3", isMobile: true, isHD: false, rank: 3, flag: "🇨🇦" },
    { id: "4", thumbnail: "https://picsum.photos/seed/4/400/250", username: "Related_Model_4", isMobile: false, isHD: true, rank: 4, flag: "🇦🇺" },
    { id: "5", thumbnail: "https://picsum.photos/seed/5/400/250", username: "Related_Model_5", isMobile: true, isHD: true, rank: 5, flag: "🇩🇪" },
    { id: "6", thumbnail: "https://picsum.photos/seed/6/400/250", username: "Related_Model_6", isMobile: false, isHD: true, flag: "🇫🇷" },
    { id: "7", thumbnail: "https://picsum.photos/seed/7/400/250", username: "Related_Model_7", isMobile: true, isHD: false, flag: "🇮🇹" },
    { id: "8", thumbnail: "https://picsum.photos/seed/8/400/250", username: "Related_Model_8", isMobile: false, isHD: true, flag: "🇪🇸" },
];

export default function ModelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const params = useParams();
    const username = params["user-name"];

    const tabs = [
        { name: "Stream", href: `/models/${username}/stream`, icon: Video },
        { name: "Profile", href: `/models/${username}/profile`, icon: Info },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white">
            <div className="max-w-[1600px] mx-auto px-4 py-8">
                <div className="flex items-center gap-1 border-b border-zinc-800 mb-6 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href;
                        const Icon = tab.icon;
                        return (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${isActive
                                    ? "text-[#f23b75]"
                                    : "text-zinc-500 hover:text-zinc-300"
                                    }`}
                            >
                                <Icon size={18} />
                                {tab.name}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f23b75] shadow-[0_-4px_12px_rgba(242,59,117,0.5)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="mb-12">
                    {children}
                </div>

                <div className="mt-16 border-t border-zinc-900 pt-12">
                    <div className="flex flex-col gap-8">
                        <GroupItem
                            title="Related Streams"
                            streams={mockRelatedStreams}
                            flag="🔥"
                        />

                        <div className="flex justify-center mt-4">
                            <Pagination
                                total={10}
                                initialPage={1}
                                onChange={(page) => {
                                    console.log("Loading page:", page);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
