"use client";

import { Menu, Search, Bell } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function Topbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 justify-between border-b border-border bg-surface/80 px-4 backdrop-blur-md sm:px-6">
      {/* Single sidebar toggle: collapses the rail on desktop,
          opens/closes the off-canvas drawer on mobile */}
      <button
        onClick={toggleSidebar}
        className="rounded-md p-2 text-muted hover:bg-surface-2 hover:text-ink"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
    

      <div className="flex-1 sm:hidden" />

      {/* Right cluster */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          className="relative rounded-md p-2 text-muted hover:bg-surface-2 hover:text-ink"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>

        <div className="mx-1 h-6 w-px bg-border" />

        <button className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 hover:bg-surface-2">
          <div className="flex h-8 w-8 items-center bg-green-600 justify-center rounded-full bg-info/20 text-sm font-semibold text-info">
            A
          </div>
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-sm font-medium text-ink">OQC</p>
            <p className="text-xs text-muted">Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
}