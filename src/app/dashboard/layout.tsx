import React from 'react'
import DashboardShell from '../components/dashboard/DashboardShell'

export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell>{children}</DashboardShell>
    )
}
