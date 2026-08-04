"use client";

import type { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";

function ShellBody({ children }: { children: ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-canvas relative z-[99999]">
      <Sidebar />

      <div
        className={[
          "flex min-h-screen flex-col transition-[margin] duration-200 ease-out",
          isCollapsed ? "lg:ml-[76px]" : "lg:ml-64",
        ].join(" ")}
      >
        <Topbar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <ShellBody>{children}</ShellBody>
    </SidebarProvider>
  );
}