"use client";

import { Mail, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-sky px-4 font-dm">
      <div className="bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-md rounded-[2.5rem] p-10 shadow-lg animate-scale-in">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-ocean rounded-xl flex items-center justify-center shadow-lg shadow-ocean/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tighter">BayVoy</span>
            </Link>
          </div>
          <div className="mx-auto w-16 h-16 bg-ocean-light rounded-2xl flex items-center justify-center mb-4">
            <Mail className="text-ocean w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Forgot Password</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              type="email"
              placeholder="Email address"
              className="pl-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all"
            />
          </div>

          <Button variant="hero" size="lg" className="w-full gap-2">
            <Send size={20} />
            Send Reset Link
          </Button>

          <div className="text-center pt-2">
            <Link href="/auth/login" className="inline-flex items-center gap-2 text-sm text-slate-400 font-bold hover:text-ocean transition-colors">
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
