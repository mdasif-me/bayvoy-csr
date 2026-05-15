"use client";

import { Hotel, Car, Map, Settings2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "hotel", label: "Hotel", icon: <Hotel className="w-5 h-5" /> },
  { id: "rent", label: "Rent", icon: <Car className="w-5 h-5" /> },
  { id: "tour", label: "Tour", icon: <Map className="w-5 h-5" /> },
  { id: "customize", label: "Customize", icon: <Settings2 className="w-5 h-5" /> },
];

interface SearchTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SearchTabs = ({ activeTab, onTabChange }: SearchTabsProps) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-white rounded-2xl p-2 shadow-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center flex-col sm:flex-row gap-2 px-5 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300",
            activeTab === tab.id
              ? "bg-primary text-white shadow-md shadow-primary/20"
              : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
          )}
        >
          {tab.icon}
          <span className="inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;
