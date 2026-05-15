import { Shield, Clock, CreditCard, Headphones } from "lucide-react";
import { features } from "@/components/homepage/data";

const iconMap: Record<string, React.ReactNode> = {
  "Secure Booking": <Shield className="w-8 h-8" />,
  "24/7 Support": <Clock className="w-8 h-8" />,
  "Best Price Guarantee": <CreditCard className="w-8 h-8" />,
  "Free Cancellation": <Headphones className="w-8 h-8" />,
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Travel with Confidence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We make travel planning easy, secure, and worry-free. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-slate-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up cursor-default border border-transparent hover:border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors duration-300">
                {iconMap[feature.title]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
