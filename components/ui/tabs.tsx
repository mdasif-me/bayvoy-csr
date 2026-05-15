"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { cn } from "@/utils/cn";

type TabsContextType = {
  value: string;
  onChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be rendered inside a Tabs provider.");
  }
  return context;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  children: React.ReactNode;
}

function Tabs({ defaultValue, children, className, ...props }: TabsProps) {
  const [value, setValue] = useState(defaultValue);
  const contextValue = useMemo(() => ({ value, onChange: setValue }), [value]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("flex", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div className={cn("inline-flex items-center justify-center gap-2", className)} {...props}>
      {children}
    </div>
  );
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const { value: activeValue, onChange } = useTabs();
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
        isActive ? "bg-[#FFB800] text-white" : "bg-[#F3F4F6] text-slate-700 hover:bg-slate-200",
        className
      )}
      data-state={isActive ? "active" : "inactive"}
      {...props}
    >
      {children}
    </button>
  );
}

export { Tabs, TabsList, TabsTrigger };
