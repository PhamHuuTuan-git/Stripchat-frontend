"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userSelector } from "@/redux/selector";
import { setUser } from "@/redux/slices/user.slice";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const useUser = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setTimeout(() => {
                    dispatch(setUser({
                        name: 'Tuan',
                        email: 'tuan@gmail.com'
                    }));

                }, 2000);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        if (!useUser) {
            fetchUser();
        }
    }, [useUser]);
    return (
        <>
            {children}
        </>
    );
}