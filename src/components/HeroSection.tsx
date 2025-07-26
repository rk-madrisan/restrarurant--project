import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-saffron/10 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-saffron fill-saffron" />
              <span className="text-saffron font-medium">Authentic South Indian Cuisine</span>
            </div>
            
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-saffron via-turmeric to-paprika bg-clip-text text-transparent">
                Food Heaven
              </span>{" "}
              Where Flavor Meets Excellence!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 font-poppins leading-relaxed">
              Experience the authentic taste of South India at RK's Kitchen. From traditional 
              dosas to aromatic biryanis, every dish is crafted with love and the finest spices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-saffron to-turmeric hover:from-turmeric hover:to-saffron text-white font-semibold px-8 py-4 rounded-full shadow-warm transition-all duration-300 hover:scale-105 group"
              >
                Discover Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book Table Now
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">50+</div>
                <div className="text-sm text-muted-foreground">Authentic Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-turmeric">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-paprika">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-spice">
              <img 
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Traditional South Indian thali with various curries and rice"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 animate-float">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Traditional masala dosa"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">Today's Special</h3>
                    <p className="text-sm text-muted-foreground">Authentic Masala Dosa</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-saffron fill-saffron" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-turmeric to-saffron rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-paprika to-turmeric rounded-full opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;