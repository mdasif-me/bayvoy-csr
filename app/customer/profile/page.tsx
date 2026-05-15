"use client";

import { User, Mail, Phone, MapPin, Camera, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfileSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 font-dm">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Profile Settings</h1>
        <p className="text-slate-500 mt-2 font-medium">Update your personal information and preferences.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        {/* Left: Avatar Upload */}
        <div className="space-y-6">
          <div className="relative w-40 h-40 mx-auto">
            <div className="w-full h-full rounded-[2.5rem] bg-slate-100 border-4 border-white shadow-xl overflow-hidden">
                <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                />
            </div>
            <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-ocean text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera size={20} />
            </button>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-slate-900">Felix Sanchez</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Travel Enthusiast</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean" />
                        <Input defaultValue="Felix Sanchez" className="pl-11 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean" />
                        <Input defaultValue="felix.sanchez@example.com" className="pl-11 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean" />
                        <Input defaultValue="+880 1234 567 890" className="pl-11 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean" />
                        <Input defaultValue="Dhaka, Bangladesh" className="pl-11 h-14 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Bio</label>
                <textarea 
                    className="w-full p-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-ocean outline-none min-h-[120px] text-sm text-slate-600 leading-relaxed"
                    placeholder="Tell us a bit about yourself..."
                    defaultValue="I love exploring new places and experiencing different cultures. Traveling is my passion!"
                />
            </div>

            <div className="pt-4 border-t border-slate-50 flex justify-end">
                <Button className="h-14 bg-ocean hover:opacity-90 text-white rounded-2xl font-bold px-10 flex items-center gap-2 shadow-lg shadow-ocean/20 transition-all">
                    <Save size={20} />
                    Save Changes
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
