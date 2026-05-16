'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  return (
    <div className='min-h-screen flex items-center justify-center gradient-sky px-4 font-dm'>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-2xl rounded-[2.5rem] p-12 shadow-lg'
      >
        <div className='text-center mb-16'>
          <div className='mb-6 flex justify-center'>
            <Link href='/' className='flex items-center group/logo w-fit'>
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
          </div>
          <h1 className='text-3xl font-black text-slate-900 tracking-tight'>
            Forgot Password
          </h1>
          <p className='text-sm text-slate-500 mt-2 font-medium'>
            {`No worries! Enter your email and we'll send you reset instructions.`}
          </p>
        </div>

        <div className='space-y-4'>
          <div className='relative'>
            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean' />
            <Input
              type='email'
              placeholder='Email address'
              className='pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all'
            />
          </div>

          <Button variant='hero' size='lg' className='w-full gap-2 my-2'>
            <Send size={20} />
            Send Reset Link
          </Button>

          <div className='text-center pt-2'>
            <Link
              href='/auth/login'
              className='inline-flex items-center gap-2 text-sm text-slate-400 font-bold hover:text-ocean transition-colors'
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
