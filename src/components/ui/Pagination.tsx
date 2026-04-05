"use client";

import React, { useMemo } from "react";
import { Pagination as HeroPagination } from "@heroui/react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
    total: number;
    initialPage?: number;
    page?: number;
    onChange?: (page: number) => void;
    className?: string;
}

export default function Pagination({
    total,
    initialPage = 1,
    page: controlledPage,
    onChange,
    className = "",
}: PaginationProps) {
    const [internalPage, setInternalPage] = React.useState(initialPage);

    const currentPage = controlledPage !== undefined ? controlledPage : internalPage;

    const handlePageChange = (newPage: number) => {
        if (controlledPage === undefined) {
            setInternalPage(newPage);
        }
        if (onChange) {
            onChange(newPage);
        }
    };

    const pageItems = useMemo(() => {
        const items: (number | "dots")[] = [];
        const siblingCount = 1;
        items.push(1);

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, total - 1);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < total - 1;

        if (shouldShowLeftDots) {
            items.push("dots");
        }

        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
            items.push(i);
        }

        if (shouldShowRightDots) {
            items.push("dots");
        }

        if (total > 1) {
            items.push(total);
        }

        return items;
    }, [total, currentPage]);

    if (total <= 1) return null;

    return (
        <HeroPagination className={`bg-transparent w-full flex justify-center ${className}`}>
            <HeroPagination.Content className="gap-2 justify-center">
                <HeroPagination.Item>
                    <HeroPagination.Previous
                        onPress={() => handlePageChange(Math.max(1, currentPage - 1))}
                        isDisabled={currentPage === 1}
                        className="text-zinc-500 hover:text-white min-w-10 h-10 border-none bg-transparent hover:bg-zinc-800 transition-colors rounded-xl"
                    >
                        <ChevronLeft size={18} />
                    </HeroPagination.Previous>
                </HeroPagination.Item>

                {pageItems.map((item, index) => {
                    if (item === "dots") {
                        return (
                            <HeroPagination.Item key={`dots-${index}`}>
                                <HeroPagination.Ellipsis className="w-10 h-10 flex items-center justify-center text-zinc-500">
                                    <MoreHorizontal size={18} />
                                </HeroPagination.Ellipsis>
                            </HeroPagination.Item>
                        );
                    }

                    const isActive = item === currentPage;
                    return (
                        <HeroPagination.Item key={item}>
                            <HeroPagination.Link
                                isActive={isActive}
                                onPress={() => handlePageChange(item)}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${isActive
                                    ? "bg-[#f23b75] text-white shadow-[0_4px_12px_rgba(242,59,117,0.4)]"
                                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                                    }`}
                            >
                                {item}
                            </HeroPagination.Link>
                        </HeroPagination.Item>
                    );
                })}

                <HeroPagination.Item>
                    <HeroPagination.Next
                        onPress={() => handlePageChange(Math.min(total, currentPage + 1))}
                        isDisabled={currentPage === total}
                        className="text-zinc-500 hover:text-white min-w-10 h-10 border-none bg-transparent hover:bg-zinc-800 transition-colors rounded-xl"
                    >
                        <ChevronRight size={18} />
                    </HeroPagination.Next>
                </HeroPagination.Item>
            </HeroPagination.Content>
        </HeroPagination>
    );
}
