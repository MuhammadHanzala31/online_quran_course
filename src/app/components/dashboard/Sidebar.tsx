"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import Logo from '@/../public/logo/Online Quran Logo Final.jpg'

import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Upload,
  Pen
} from "lucide-react";
import Image from "next/image";


interface NavItem {
   label: string;
   href: string;
   icon: LucideIcon;
   badge?: string;
 }

export default function Sidebar() {

       
       const navItems: NavItem[] = [
        { label: "All Blogs", href: "/dashboard", icon: LayoutDashboard },
        { label: "create Blog", href: "/dashboard/upload", icon: Pen },
       
      ];
       


  const { isCollapsed, toggleCollapsed, isMobileOpen, closeMobile } =
    useSidebar();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile scrim */}
      {isMobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-surface",
          "transition-all duration-200 ease-out",
          // desktop width behaviour
          isCollapsed ? "lg:w-[76px]" : "lg:w-64",
          // mobile off-canvas behaviour
          "w-64 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-label="Sidebar navigation"
      >
        {/* Brand row */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-canvas font-display font-bold">
              <Image src={Logo} alt=" sorry"/>
            </div>
            {!isCollapsed && (
              <span className="truncate font-display text-lg font-semibold tracking-tight">
                Dashboard
              </span>
            )}
          </div>

          {/* Close button — mobile only */}
          <button
            onClick={closeMobile}
            className="rounded-md p-1.5 text-muted hover:bg-surface-2 hover:text-ink lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                title={isCollapsed ? item.label : undefined}
                className={[
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:bg-surface-2 hover:text-ink",
                  isCollapsed ? "justify-center" : "",
                ].join(" ")}
              >
                {isActive && (
                  <span className="absolute left-0 h-5 w-[3px] rounded-r-full bg-accent" />
                )}
                <Icon size={19} className="shrink-0" />
                {!isCollapsed && (
                  <span className="truncate">{item.label}</span>
                )}
                {!isCollapsed && item.badge && (
                  <span className="ml-auto rounded-full bg-info/15 px-2 py-0.5 text-xs font-semibold text-info">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle — desktop only */}
        <div className="hidden border-t border-border p-3 lg:block">
          <button
            onClick={toggleCollapsed}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-muted hover:bg-surface-2 hover:text-ink"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronsLeft
              size={18}
              className={`transition-transform duration-200 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
            {!isCollapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
}