"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface SidebarContextValue {
  /** desktop: collapsed to icon-rail vs full width */
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  /** mobile: off-canvas drawer open/closed */
  isMobileOpen: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
  /** single entry point for the topbar button: collapses on desktop,
   *  opens/closes the drawer on mobile */
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close the mobile drawer automatically if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsMobileOpen(false);
    };
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const toggleSidebar = () => {
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      setIsCollapsed((v) => !v);
    } else {
      setIsMobileOpen((v) => !v);
    }
  };

  const value: SidebarContextValue = {
    isCollapsed,
    toggleCollapsed: () => setIsCollapsed((v) => !v),
    isMobileOpen,
    toggleMobile: () => setIsMobileOpen((v) => !v),
    closeMobile: () => setIsMobileOpen(false),
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return ctx;
}