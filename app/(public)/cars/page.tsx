"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Car,
  Fuel,
  Gauge,
  MapPin,
  Star,
  Loader2,
  CarFront,
  RotateCcw,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRentVehicles } from "@/hooks/use-travel-search";

// Animation Constants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const CarsPage = () => {
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => ({
      location: searchParams.get("location") || "",
      type: searchParams.get("type") || "all",
      fuel: searchParams.get("fuel") || "all",
    }),
    [searchParams],
  );

  const { data, isLoading, isError } = useRentVehicles(filters);

  // Data Selectors
  // @ts-ignore
  const vehicles = data || [];
  // @ts-ignore
  const dynamicTypes = ["SUV", "Sedan", "Luxury", "Compact"]; // Fallback if meta missing
  const dynamicFuels = ["Petrol", "Diesel", "Electric", "Hybrid"];

  if (isError) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-500 font-bold text-xl">Failed to load vehicles.</p>
        <Button onClick={() => window.location.reload()} className="bg-[#0ea5e9]">Retry</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-2 text-slate-900">
            Find Your Perfect Ride
          </h1>
          <p className="text-slate-500 text-lg">
            Premium fleet for your next journey. Select from our curated collection.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* SIDEBAR: Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-28 space-y-8 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              {/* Type Filter */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Vehicle Type
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <FilterButton
                    label="All"
                    active={filters.type === "all"}
                    href="/cars"
                  />
                  {dynamicTypes.map((t: string) => (
                    <FilterButton
                      key={t}
                      label={t}
                      active={filters.type === t}
                      href={`/cars?type=${t}`}
                    />
                  ))}
                </div>
              </div>

              {/* Fuel Filter */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Fuel System
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/cars">
                    <Badge
                        variant={filters.fuel === "all" ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all ${filters.fuel === 'all' ? 'bg-[#0ea5e9]' : ''}`}
                    >
                        All Systems
                    </Badge>
                  </Link>
                  {dynamicFuels.map((f: string) => (
                    <Link key={f} href={`/cars?fuel=${f}`}>
                        <Badge
                        variant={filters.fuel === f ? "default" : "outline"}
                        className={`cursor-pointer px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all ${filters.fuel === f ? 'bg-[#0ea5e9]' : ''}`}
                        >
                        {f}
                        </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/cars" className="block">
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-slate-400 hover:text-red-500 rounded-xl text-xs h-10 border border-dashed border-slate-200 transition-all"
                >
                    <RotateCcw size={14} className="mr-2" /> Reset Filters
                </Button>
              </Link>
            </div>
          </aside>

          {/* VEHICLE GRID */}
          <div className="flex-1 min-h-[400px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="animate-spin text-[#0ea5e9]" size={48} />
                <span className="text-xs font-bold tracking-tighter uppercase text-slate-400">
                  Fetching Fleet...
                </span>
              </div>
            ) : vehicles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
                <div className="bg-blue-50 p-6 rounded-full mb-6 text-[#0ea5e9]">
                  <CarFront size={48} />
                </div>
                <h3 className="text-2xl font-black mb-2 text-slate-900">No Matching Rides</h3>
                <p className="text-slate-500 max-w-xs mx-auto mb-8 font-medium">
                  We couldn't find any vehicles with these specific filters. Try adjusting your search!
                </p>
                <Link href="/cars">
                    <Button
                    variant="outline"
                    className="rounded-2xl px-8 font-bold border-2 border-slate-100"
                    >
                    Clear All Filters
                    </Button>
                </Link>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {vehicles.map((vehicle: any) => (
                  <VehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components ---

const FilterButton = ({ label, active, href }: { label: string, active: boolean, href: string }) => (
  <Link href={href} className="w-full">
    <button
        className={`w-full py-2.5 rounded-xl text-[11px] font-bold capitalize transition-all border ${
        active
            ? "bg-[#0ea5e9] text-white border-[#0ea5e9] shadow-lg shadow-blue-100 scale-[1.02]"
            : "bg-white text-slate-400 border-slate-100 hover:bg-slate-50"
        }`}
    >
        {label}
    </button>
  </Link>
);

const VehicleCard = ({ vehicle }: any) => (
  <motion.div variants={itemVariants}>
    <Card className="overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2rem] h-full flex flex-col bg-white">
      <div className="relative h-64 overflow-hidden">
        <img
          src={vehicle.images?.[0] || "/images/placeholder.jpg"}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-slate-900 backdrop-blur-md border-none px-5 py-2 font-black shadow-xl rounded-xl">
            ৳{vehicle.pricePerDay.toLocaleString()}
            <span className="text-[10px] ml-1 opacity-60">/day</span>
          </Badge>
        </div>
      </div>

      <CardContent className="p-8 flex flex-col flex-grow space-y-6">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight group-hover:text-[#0ea5e9] transition-colors line-clamp-1 text-slate-900">
              {vehicle.name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={14} className="text-[#0ea5e9]" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {vehicle.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-blue-50 text-[#0ea5e9] px-3 py-1.5 rounded-xl border border-blue-100">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-black">
              {vehicle.rating || "4.8"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50">
          <SpecItem icon={<Car size={18} />} label={vehicle.vehicleType} />
          <SpecItem icon={<Fuel size={18} />} label={vehicle.fuelType} />
          <SpecItem icon={<Gauge size={18} />} label={vehicle.engineCapacity || "1.5L"} />
        </div>

        <div className="flex items-center justify-between pt-2 mt-auto">
          <Badge
            className={`px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest ${
              vehicle.isAvailable
                ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                : "bg-slate-50 text-slate-400 border border-slate-100"
            }`}
          >
            {vehicle.isAvailable ? "Ready to Rent" : "Booked"}
          </Badge>
          <Link href={`/cars/${vehicle._id}`}>
            <Button
              size="sm"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl font-bold px-8 h-12 shadow-lg shadow-blue-100 active:scale-95 transition-all"
            >
              Rent Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SpecItem = ({ icon, label }: any) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-[#0ea5e9]">{icon}</div>
    <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">
      {label}
    </span>
  </div>
);

export default CarsPage;
