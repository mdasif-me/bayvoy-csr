import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { destinations } from "@/components/homepage/data";

const DestinationCard = ({ destination, index }: { destination: any, index: number }) => (
  <div
    className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <Image
      src={destination.image}
      alt={destination.name}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    <div className="absolute top-4 left-4">
      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
        {destination.tag}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-white/90">
          <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
          <span className="text-sm font-semibold">{destination.rating}</span>
          <span className="text-xs text-white/60">({destination.reviews})</span>
        </div>
        <span className="text-lg font-bold text-white">{destination.price}</span>
      </div>
    </div>
  </div>
);

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-wider">
            Explore
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Popular Destinations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Discover the world's most beautiful places. From tropical beaches to historic cities,
            find your perfect getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
