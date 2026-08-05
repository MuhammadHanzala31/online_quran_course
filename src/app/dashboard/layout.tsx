import React from 'react'
import DashboardShell from '../components/dashboard/DashboardShell'
import { logoutAction } from '@/utils/authController';

export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {

   

    return (
        <DashboardShell>{children}</DashboardShell>
    )
}
