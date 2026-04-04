"use client";

import { Button, Badge } from "@heroui/react";
import { Menu, Search, MessageSquare, Bell, Trophy, Sparkles, User, Heart, Users, LogOut } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from "../../../redux/slices/sidebar.slice";
import { userSelector } from "@/redux/selector";
import { useState, useRef, useEffect } from "react";

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const userName = user?.name;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMessagesOpen, setIsMessagesOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const messagesRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
            if (messagesRef.current && !messagesRef.current.contains(event.target as Node)) {
                setIsMessagesOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const mockMessages = [
        { id: 1, name: "Alice", text: "Hey! Are you online?", time: "5m", unread: true },
        { id: 2, name: "Bob", text: "Check out my new stream!", time: "1h", unread: true },
        { id: 3, name: "Charlie", text: "Thanks for the tokens!", time: "2h", unread: false },
        { id: 4, name: "Diana", text: "Hello there.", time: "1d", unread: false },
        { id: 5, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
        { id: 6, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
        { id: 7, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
        { id: 8, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
        { id: 9, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
        { id: 10, name: "Emma", text: "Stream starting now :)", time: "2d", unread: false },
    ];

    const mockNotifications = [
        { id: 1, text: "Alice started a new stream", time: "10m", unread: true },
        { id: 2, text: "Bob replied to your comment", time: "2h", unread: true },
        { id: 3, text: "You received 50 free tokens", time: "5h", unread: false },
        { id: 4, text: "System maintenance in 2 hours", time: "1d", unread: false },
        { id: 5, text: "Your profile was approved", time: "2d", unread: false },
    ];
    return (
        <header className="sticky top-0 z-50 w-full bg-[#18181b] border-b border-zinc-800">
            <div className="flex h-16 items-center px-4 justify-between gap-4">
                <div className="flex items-center gap-6">
                    <button onClick={() => dispatch(toggleSidebar())} className="text-zinc-400 hover:text-white transition-colors">
                        <Menu size={24} />
                    </button>

                    <Link href="/" className="flex items-center gap-1">
                        <div className="text-2xl font-black tracking-tight text-white flex items-center">
                            Clim<span className="text-[#f23b75]">ara</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-6 ml-4">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f23b75] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f23b75]"></span>
                            </span>
                            <span className="text-sm font-bold text-white group-hover:text-[#f23b75] transition-colors">8916 LIVE</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <Trophy size={18} />
                            <span className="text-sm font-semibold">Top Models</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 max-w-2xl px-4">
                    <div className="flex-1 max-w-2xl px-4 relative flex items-center h-10 bg-zinc-900 border border-zinc-800 rounded-full focus-within:border-[#f23b75] focus-within:bg-zinc-900 transition-colors">
                        <Search className="text-zinc-500 ml-4 mr-2" size={18} />
                        <input
                            placeholder="Find anything you want..."
                            type="search"
                            className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-zinc-500"
                        />
                        <div className="flex items-center gap-2 mr-1">
                            <button className="cursor-pointer hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f23b75]/10 border border-[#f23b75]/30 text-[#f23b75] hover:bg-[#f23b75]/20 hover:scale-105 transition-all text-xs font-bold whitespace-nowrap">
                                <Sparkles size={14} />
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-5 sm:gap-6 shrink-0">
                    {/* Messages Dropdown */}
                    <div className="relative block" ref={messagesRef}>
                        <button
                            onClick={() => { setIsMessagesOpen(!isMessagesOpen); setIsNotificationsOpen(false); setIsMenuOpen(false); }}
                            className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-800/50 relative"
                        >
                            <MessageSquare className="cursor-pointer" size={22} />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-[#f23b75] flex items-center justify-center rounded-full text-[10px] text-white font-bold border-2 border-[#18181b]">
                                2
                            </span>
                        </button>

                        {isMessagesOpen && (
                            <div className="absolute right-0 mt-1 w-80 bg-[#18181b] border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col">
                                <div className="px-4 py-3 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
                                    <span className="text-sm font-bold text-white">Messages</span>
                                    <span className="text-xs text-[#f23b75] font-semibold cursor-pointer hover:underline">Mark all read</span>
                                </div>
                                <div className="overflow-y-auto flex flex-col p-2 gap-1 max-h-[min(600px,calc(100vh-150px))]">
                                    {mockMessages.map(msg => (
                                        <div key={msg.id} className="flex items-center gap-3 p-2 hover:bg-zinc-800/80 rounded-lg cursor-pointer transition-colors">
                                            <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                                                <span className="text-sm font-bold text-white">{msg.name.charAt(0)}</span>
                                            </div>
                                            <div className="flex flex-col flex-1 overflow-hidden">
                                                <div className="flex justify-between items-center">
                                                    <span className={`text-sm truncate ${msg.unread ? 'font-bold text-white' : 'font-medium text-zinc-300'}`}>{msg.name}</span>
                                                    <span className="text-xs text-zinc-500">{msg.time}</span>
                                                </div>
                                                <span className={`text-xs truncate ${msg.unread ? 'text-zinc-300 font-medium' : 'text-zinc-500'}`}>{msg.text}</span>
                                            </div>
                                            {msg.unread && <div className="w-2 h-2 rounded-full bg-[#f23b75] shrink-0"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Notifications Dropdown */}
                    <div className="relative block" ref={notificationsRef}>
                        <button
                            onClick={() => { setIsNotificationsOpen(!isNotificationsOpen); setIsMessagesOpen(false); setIsMenuOpen(false); }}
                            className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-zinc-800/50 relative"
                        >
                            <Bell className="cursor-pointer" size={22} />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-[#f23b75] flex items-center justify-center rounded-full text-[10px] text-white font-bold border-2 border-[#18181b]">
                                2
                            </span>
                        </button>

                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-[#18181b] border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col">
                                <div className="px-4 py-3 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
                                    <span className="text-sm font-bold text-white">Notifications</span>
                                    <span className="text-xs text-[#f23b75] font-semibold cursor-pointer hover:underline">Mark all read</span>
                                </div>
                                <div className="overflow-y-auto flex flex-col p-2 gap-1 max-h-[min(600px,calc(100vh-150px))]">
                                    {mockNotifications.map(notif => (
                                        <div key={notif.id} className="flex gap-3 p-2 hover:bg-zinc-800/80 rounded-lg cursor-pointer transition-colors">
                                            <div className="h-8 w-8 rounded-full bg-[#f23b75]/10 text-[#f23b75] flex items-center justify-center shrink-0 mt-0.5">
                                                <Bell size={14} />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <span className={`text-sm ${notif.unread ? 'text-white' : 'text-zinc-300'}`}>{notif.text}</span>
                                                <span className="text-xs text-zinc-500 mt-1">{notif.time}</span>
                                            </div>
                                            {notif.unread && <div className="w-2 h-2 rounded-full bg-[#f23b75] shrink-0 mt-1.5"></div>}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/notifications" onClick={() => setIsNotificationsOpen(false)} className="px-4 py-3 border-t border-zinc-800 text-center text-sm text-[#f23b75] font-semibold hover:bg-zinc-900/50 transition-colors">
                                    View all notifications
                                </Link>
                            </div>
                        )}
                    </div>

                    <Button
                        className="bg-[#c8e23e] text-black font-bold h-9 px-4 rounded-full text-sm hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(200,226,62,0.3)]"
                    >
                        Add Tokens
                    </Button>

                    {
                        !user ? (
                            <Link href='/login' className="flex items-center justify-center bg-[#f23b75] text-white font-bold h-9 px-6 rounded-full text-sm hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(242,59,117,0.3)]">
                                Login
                            </Link>
                        ) : (
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => { setIsMenuOpen(!isMenuOpen); setIsMessagesOpen(false); setIsNotificationsOpen(false); }}
                                    className="flex items-center justify-center h-8 w-8 rounded-full border border-zinc-700 hover:border-[#f23b75] bg-zinc-900 transition-colors outline-none cursor-pointer"
                                    aria-expanded={isMenuOpen}
                                >
                                    <span className="text-xs font-semibold text-white">{userName.charAt(0).toUpperCase()}</span>
                                </button>

                                {isMenuOpen && (
                                    <div className="absolute right-0 mt-1 w-64 bg-[#18181b] border border-zinc-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                                        {/* Dropdown Header */}
                                        <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full border border-zinc-700 bg-[#f23b75]/10 shrink-0">
                                                <span className="text-sm font-bold text-[#f23b75]">{userName.charAt(0).toUpperCase()}</span>
                                            </div>
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-semibold text-white truncate">{userName}</span>
                                                <span className="text-xs text-zinc-500 truncate">Member</span>
                                            </div>
                                        </div>

                                        {/* Dropdown Body */}
                                        <div className="py-2">
                                            <Link
                                                href="/profile"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                                            >
                                                <User size={16} />
                                                My profile
                                            </Link>
                                            <Link
                                                href="/favorite"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                                            >
                                                <Heart size={16} />
                                                My favorites
                                            </Link>
                                            <Link
                                                href="/notifications"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                                            >
                                                <Bell size={16} />
                                                My notifications
                                            </Link>
                                            <Link
                                                href="/friends"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                                            >
                                                <Users size={16} />
                                                My friends
                                            </Link>
                                        </div>

                                        {/* Logout Section */}
                                        <div className="py-2 border-t border-zinc-800">
                                            <button
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                                            >
                                                <LogOut size={16} />
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="flex bg-[#121214] h-12 items-center px-4 md:px-14 gap-8 overflow-x-auto no-scrollbar border-b border-zinc-800">
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-white hover:text-[#f23b75] transition-colors border-b-2 border-transparent hover:border-[#f23b75] py-3">Girls</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Couples</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Guys</Link>
                <Link href="#" className="whitespace-nowrap text-sm font-semibold text-zinc-400 hover:text-white transition-colors">Trans</Link>
            </div>
        </header>
    );
}
