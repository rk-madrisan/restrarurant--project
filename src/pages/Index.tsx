import RestaurantHeader from "@/components/RestaurantHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import RestaurantFooter from "@/components/RestaurantFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <RestaurantHeader />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <BookingSection />
      <RestaurantFooter />
    </div>
  );
};

export default Index;
