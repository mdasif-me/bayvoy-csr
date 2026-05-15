import { Star, MapPin, Clock, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { packages } from "@/components/homepage/data";

const FeaturedTours = () => {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-wider">
            Special Offers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Featured Packages
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Hand-picked travel packages with exclusive deals. Book now and save big!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#ff4d4d] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${pkg.originalPrice - pkg.discountPrice}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#0ea5e9]" />
                  <span className="text-sm text-slate-500">{pkg.location}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {pkg.groupSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-[#ffb800] fill-[#ffb800]" />
                    <span className="font-semibold text-slate-900">{pkg.rating}</span>
                    <span className="text-slate-500 text-sm">({pkg.reviews})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 line-through text-sm">
                      ${pkg.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-[#0ea5e9] ml-2">
                      ${pkg.discountPrice}
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full h-12 font-bold transition-all">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
