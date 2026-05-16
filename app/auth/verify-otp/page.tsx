'use client';

import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center gradient-sky px-4 font-dm'>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-2xl rounded-[2.5rem] p-12 shadow-lg'
      >
        <div className='text-center mb-8'>
          <Link href='/' className='flex items-center group/logo w-fit mx-auto'>
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
              Verify OTP
            </h1>
            <p className='text-sm text-slate-500 mt-2 font-medium'>
              {`We've sent a 6-digit code to your email.`}
            </p>
          </article>
        </div>

        <div className='space-y-6'>
          <div className='flex justify-between gap-2 py-4'>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  if (el) inputs.current[index] = el;
                }}
                type='text'
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='w-full h-20 text-center text-4xl font-bold bg-slate-100 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all outline-none text-slate-900'
              />
            ))}
          </div>

          <div className='flex items-center justify-center gap-2 text-sm font-bold text-slate-400'>
            <Timer size={16} />
            <span>00:{timer < 10 ? `0${timer}` : timer}</span>
          </div>

          <Button variant='hero' size='lg' className='w-full'>
            Verify & Continue
          </Button>

          <div className='text-center space-y-8'>
            <p className='text-sm text-slate-500 font-medium'>
              {`Didn't receive the code?`}
              <button
                className='text-ocean font-bold hover:underline disabled:opacity-50 ml-2'
                disabled={timer > 0}
              >
                Resend OTP
              </button>
            </p>
            <Link
              href='/auth/login'
              className='block text-sm text-slate-400 font-bold hover:text-slate-600 transition-colors'
            >
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
