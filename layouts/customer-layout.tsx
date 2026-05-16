'use client';

import { cn } from '@/utils/cn';
import {
  Bell,
  CreditCard,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  UserCircle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const sidebarLinks = [
  { name: 'Dashboard', href: '/customer/dashboard', icon: LayoutDashboard },
  { name: 'My Bookings', href: '/customer/bookings', icon: ShoppingBag },
  { name: 'Wishlist', href: '/customer/wishlist', icon: Heart },
  { name: 'Notifications', href: '/customer/notifications', icon: Bell },
  { name: 'Payments', href: '/customer/payments', icon: CreditCard },
  { name: 'Profile', href: '/customer/profile', icon: UserCircle },
  { name: 'Settings', href: '/customer/settings', icon: Settings },
];

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className='min-h-screen bg-slate-50 pt-20'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8'>
        <aside className='w-full md:w-64 shrink-0'>
          <div className='bg-white rounded-[2.5rem] border border-slate-100 p-6 shadow-xl shadow-slate-200/40 sticky top-28'>
            <div className='space-y-2'>
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all',
                      isActive
                        ? 'bg-ocean text-white shadow-lg shadow-ocean/20'
                        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                    )}
                  >
                    <link.icon size={18} />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className='mt-8 pt-8 border-t border-slate-50'>
              <button className='flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-50 hover:text-red-500 w-full transition-all'>
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </aside>
        <main className='flex-1 min-w-0'>{children}</main>
      </div>
    </div>
  );
}
