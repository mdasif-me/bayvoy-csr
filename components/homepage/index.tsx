import Hero from "./sections/hero";
import PopularDestinations from "@/modules/hotel/components/popular-destinations";
import FeaturedTours from "@/modules/tour/components/featured-tours";
import Features from "@/components/shared/features";

export default function Homepage() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <FeaturedTours />
      <Features />
    </>
  );
}
