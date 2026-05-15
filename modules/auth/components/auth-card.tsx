"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

interface AuthCardProps {
  initialMode?: "login" | "register";
}

const AuthCard = ({ initialMode = "login" }: AuthCardProps) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-sky px-4 font-dm overflow-hidden">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          layout: { duration: 0.3 }
        }}
        className="bg-white/95 backdrop-blur-2xl border border-white/60 w-full max-w-xl rounded-[2.5rem] p-12 shadow-[0_8px_40px_rgba(0,0,0,0.12)] relative overflow-hidden"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-ocean rounded-xl flex items-center justify-center shadow-lg shadow-ocean/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tighter">BayVoy</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {mode === "login"
              ? "Login to continue your journey"
              : "Join us and start exploring"}
          </p>
        </div>

        {/* Tabs */}
        <div className="relative bg-slate-100 rounded-xl p-1 mb-8">
          <div
            className={cn(
              "absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-lg bg-white shadow transition-all duration-300",
              mode === "register" && "translate-x-full"
            )}
          />

          <div className="relative flex">
            <button
              onClick={() => setMode("login")}
              className={cn(
                "flex-1 py-2 rounded-lg text-sm font-medium transition-colors z-10",
                mode === "login" ? "text-slate-900" : "text-slate-500"
              )}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={cn(
                "flex-1 py-2 rounded-lg text-sm font-medium transition-colors z-10",
                mode === "register" ? "text-slate-900" : "text-slate-500"
              )}
            >
              Register
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-4"
            >
              {mode === "register" && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 h-12 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10 h-12 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10 h-12 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Processing..." : mode === "login" ? "Login" : "Create Account"}
              </Button>

              {mode === "login" && (
                <div className="text-center">
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm font-bold text-slate-400 hover:text-ocean transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-slate-400">
              <span className="bg-white px-4">Or</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 font-bold text-slate-600 flex items-center justify-center gap-3 transition-all"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            Google
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthCard;
