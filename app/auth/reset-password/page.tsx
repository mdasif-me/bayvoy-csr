'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center gradient-sky px-4 font-dm'>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-2xl rounded-[2.5rem] p-12 shadow-lg'
      >
        <div className='text-center mb-8'>
          <Link href='/' className='flex items-center mx-auto group/logo w-fit'>
            <motion.div
              className={`w-60 h-16 relative flex items-center justify-center transition-all duration-300`}
            >
              <Image
                src='/logo/favicon.png'
                alt='BayVoy'
                width={240}
                height={64}
                className='object-cover'
                priority
              />
            </motion.div>
          </Link>
          <article className='my-4'>
            <h1 className='text-3xl font-black text-slate-900 tracking-tight'>
              Reset Password
            </h1>
            <p className='text-sm text-slate-500 mt-2 font-medium'>
              Choose a strong password to protect your account.
            </p>
          </article>
        </div>

        <div className='space-y-4'>
          <div className='relative'>
            <Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean' />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='New Password'
              className='pl-12 pr-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all'
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ocean transition-colors'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className='relative'>
            <Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean' />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm New Password'
              className='pl-12 pr-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all'
            />
          </div>

          <div className='bg-slate-50 rounded-2xl p-4 space-y-2'>
            <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1'>
              Requirements
            </p>
            <div className='flex items-center gap-2 text-xs text-emerald-600 font-bold'>
              <CheckCircle2 size={14} /> At least 8 characters
            </div>
            <div className='flex items-center gap-2 text-xs text-slate-400 font-bold'>
              <CheckCircle2 size={14} /> One special character
            </div>
          </div>

          <Button variant='hero' size='lg' className='w-full'>
            Update Password
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
