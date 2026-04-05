"use client";

import { MapPin, Calendar, Share2, Info, Ruler, Star, Activity } from "lucide-react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";

export default function ProfilePage() {
    const details = [
        { label: "Age", value: "24", icon: Calendar },
        { label: "Location", value: "United States", icon: MapPin },
        { label: "Language", value: "English, Spanish", icon: Info },
        { label: "Ethnicity", value: "Latina", icon: Star },
        { label: "Body Type", value: "Athletic", icon: Activity },
        { label: "Height", value: "5'7\" (170cm)", icon: Ruler },
    ];

    return (
        <div className="flex flex-col gap-12 bg-zinc-900/40 rounded-3xl p-8 md:p-12 border border-zinc-800/50 backdrop-blur-md">
            {/* Model Profile Header */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="relative group/avatar">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-[6px] border-[#f23b75] p-1.5 shadow-[0_0_40px_rgba(242,59,117,0.3)]">
                        <Image
                            src="https://picsum.photos/seed/profile-main/400/400"
                            alt="Profile Avatar"
                            width={224}
                            height={224}
                            className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover/avatar:scale-110"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-[6px] border-zinc-900 flex items-center justify-center text-white shadow-xl animate-pulse">
                        <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                </div>

                <div className="flex-grow flex flex-col gap-6 pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl font-black text-white tracking-tighter">Model_Username</h1>
                                <div className="px-3 py-1 bg-[#f23b75]/20 rounded text-[#f23b75] text-[10px] font-black uppercase tracking-widest border border-[#f23b75]/30">Verified</div>
                            </div>
                            <p className="text-zinc-500 font-bold uppercase tracking-[3px] text-xs">Premium Content Creator</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button className="bg-[#f23b75] text-white font-black uppercase text-xs tracking-widest px-10 h-14 shadow-[0_8px_30px_rgba(242,59,117,0.4)] hover:scale-105 transition-transform">Follow Me</Button>
                            <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700 h-14 w-14 text-white p-0 flex items-center justify-center min-w-0"><Share2 size={20} /></Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {details.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex flex-col gap-1.5">
                                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center gap-2">
                                        <Icon size={12} className="text-[#f23b75]" />
                                        {item.label}
                                    </span>
                                    <span className="text-white font-bold tracking-tight">{item.value}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="grid lg:grid-cols-12 gap-12">
                {/* About Me Section */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-black text-white tracking-tight uppercase border-l-4 border-[#f23b75] pl-4">About Me</h2>
                        <p className="text-zinc-400 leading-relaxed font-medium">Hi there! My name is <span className="text-white">Model_Username</span> and I love meeting new people from all over the world. I'm a very energetic and friendly person, and I love to share my passions with you. ❤️</p>
                        <p className="text-zinc-400 leading-relaxed font-medium">Whether you want to chat, watch me have fun, or explore my premium content, you've come to the right place. Don't be shy, say hi in the chat! I'm live almost every day from 8 PM EST. ✨</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-black text-white tracking-tight uppercase border-l-4 border-[#f23b75] pl-4">Interests</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Dancing", "Cosplay", "ASMR", "Gaming", "Yoga", "Cooking"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-zinc-800 text-zinc-300 text-sm font-bold rounded-lg border border-zinc-700/50 hover:border-[#f23b75] hover:text-[#f23b75] cursor-default transition-all">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Stats Section */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <Card className="bg-zinc-800/50 border border-zinc-700/50">
                        <div className="p-6">
                            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-zinc-700 pb-4">
                                <Activity size={18} className="text-[#f23b75]" />
                                Statistics
                            </h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center group cursor-default">
                                    <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Followers</span>
                                    <span className="text-[#f23b75] text-xl font-black group-hover:scale-110 transition-transform">124,532</span>
                                </div>
                                <div className="flex justify-between items-center group cursor-default">
                                    <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Live Since</span>
                                    <span className="text-white text-lg font-black group-hover:translate-x-[-4px] transition-transform">Jan 2024</span>
                                </div>
                                <div className="flex justify-between items-center group cursor-default">
                                    <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Ranking</span>
                                    <span className="text-white text-lg font-black group-hover:translate-x-[-4px] transition-transform">Top 0.5%</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#f23b75]/5 border border-[#f23b75]/20">
                        <div className="p-6">
                            <h3 className="text-lg font-black text-[#f23b75] uppercase tracking-wider mb-4">Support Me</h3>
                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Consider following my profile and tipping if you'd like to support my work and keep me live! 💖</p>
                            <Button className="w-full bg-[#f23b75] text-white font-black uppercase tracking-widest shadow-lg shadow-[#f23b75]/20 h-14">Send a Tip</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
