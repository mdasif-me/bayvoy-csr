"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, Timer } from "lucide-react";
import Link from "next/link";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-sky px-4 font-dm">
      <div className="bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-md rounded-[2.5rem] p-10 shadow-lg animate-scale-in">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-ocean-light rounded-2xl flex items-center justify-center mb-4">
            <KeyRound className="text-ocean w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Verify OTP</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            We've sent a 6-digit code to your email.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                // @ts-ignore
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-bold bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all outline-none text-slate-900"
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-400">
            <Timer size={16} />
            <span>00:{timer < 10 ? `0${timer}` : timer}</span>
          </div>

          <Button variant="hero" size="lg" className="w-full">Verify & Continue</Button>

          <div className="text-center space-y-4">
            <p className="text-sm text-slate-500 font-medium">
              Didn't receive the code?{" "}
              <button className="text-ocean font-bold hover:underline disabled:opacity-50" disabled={timer > 0}>
                Resend OTP
              </button>
            </p>
            <Link href="/auth/login" className="block text-sm text-slate-400 font-bold hover:text-slate-600 transition-colors">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
