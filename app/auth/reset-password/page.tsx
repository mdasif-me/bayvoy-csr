"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-sky px-4 font-dm">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-xl rounded-[2.5rem] p-12 shadow-lg"
      >
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-ocean-light rounded-2xl flex items-center justify-center mb-4">
            <Lock className="text-ocean w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Reset Password</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Choose a strong password to protect your account.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="pl-12 pr-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ocean transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              className="pl-12 pr-12 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean transition-all"
            />
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Requirements</p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
              <CheckCircle2 size={14} /> At least 8 characters
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-bold">
              <CheckCircle2 size={14} /> One special character
            </div>
          </div>

          <Button variant="hero" size="lg" className="w-full">
            Update Password
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
