"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "@heroui/react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const registerSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" }).max(20, { message: "Username must be at most 20 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Must contain at least one special character" }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
    const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = async (data: RegisterFormValues) => {
        console.log("Form validated and processing: ", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <div className="dark min-h-screen w-full flex bg-black text-foreground selection:bg-pink-500/30">
            <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=3387&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/90" />

                <div className="relative z-10 flex flex-col p-12 text-white max-w-xl left-0 absolute bottom-12">
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Climara</span> Experience
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Connect with millions of users. Create your account to start interacting with your favorite broadcasters instantly.
                    </p>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-zinc-950/50 backdrop-blur-xl relative z-10">
                <div className="w-full max-w-sm flex flex-col gap-6">
                    <div className="text-center mb-4">
                        <h1 className="text-3xl font-black tracking-tight mb-2">
                            Clim<span className="text-[#f23b75]">ara</span>
                        </h1>
                        <p className="text-sm text-zinc-400">Create an account to get started</p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-1 w-full">
                            <div className={`relative flex items-center w-full px-3 py-3 bg-zinc-900/50 border rounded-xl transition-colors focus-within:border-[#f23b75] focus-within:shadow-[0_0_10px_rgba(242,59,117,0.2)] ${errors.username ? 'border-[#f23b75]' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                <User className={`${errors.username ? 'text-[#f23b75]' : 'text-zinc-500'} mr-3 shrink-0`} size={18} />
                                <input
                                    {...register("username")}
                                    placeholder="Username"
                                    className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-zinc-500"
                                />
                            </div>
                            {errors.username && <span className="text-xs text-[#f23b75] ml-1 font-medium">{errors.username.message}</span>}
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <div className={`relative flex items-center w-full px-3 py-3 bg-zinc-900/50 border rounded-xl transition-colors focus-within:border-[#f23b75] focus-within:shadow-[0_0_10px_rgba(242,59,117,0.2)] ${errors.email ? 'border-[#f23b75]' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                <Mail className={`${errors.email ? 'text-[#f23b75]' : 'text-zinc-500'} mr-3 shrink-0`} size={18} />
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-zinc-500"
                                />
                            </div>
                            {errors.email && <span className="text-xs text-[#f23b75] ml-1 font-medium">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <div className={`relative flex items-center w-full px-3 py-3 bg-zinc-900/50 border rounded-xl transition-colors focus-within:border-[#f23b75] focus-within:shadow-[0_0_10px_rgba(242,59,117,0.2)] ${errors.password ? 'border-[#f23b75]' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                <Lock className={`${errors.password ? 'text-[#f23b75]' : 'text-zinc-500'} mr-3 shrink-0`} size={18} />
                                <input
                                    {...register("password")}
                                    type={isVisible ? "text" : "password"}
                                    placeholder="Password"
                                    className="bg-transparent border-none outline-none text-white w-full text-sm placeholder:text-zinc-500"
                                />
                                <button
                                    className="focus:outline-none ml-2 text-zinc-400 hover:text-zinc-300 transition-colors"
                                    type="button"
                                    onClick={toggleVisibility}
                                >
                                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <span className="text-xs text-[#f23b75] ml-1 font-medium">{errors.password.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-2 font-semibold bg-[#f23b75] hover:bg-[#d63266] text-white shadow-lg shadow-pink-500/20 rounded-xl py-3 transition-colors disabled:opacity-50 flex justify-center items-center"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>

                    <div className="flex items-center gap-4 py-2">
                        <div className="h-[1px] flex-1 bg-zinc-800" />
                        <p className="text-zinc-500 text-xs text-center uppercase tracking-wider font-medium">Or continue with</p>
                        <div className="h-[1px] flex-1 bg-zinc-800" />
                    </div>

                    <button
                        type="button"
                        className="w-full font-medium border border-zinc-800 bg-transparent hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 rounded-xl py-3 transition-colors flex items-center justify-center gap-3"
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                            </g>
                        </svg>
                        <span>Sign up with Google</span>
                    </button>

                    <p className="text-center text-zinc-400 text-sm mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#f23b75] hover:text-pink-400 font-medium">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}