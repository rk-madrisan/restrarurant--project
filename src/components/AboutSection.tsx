import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Award, Heart, Utensils } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Star,
      title: "Authentic Recipes",
      description: "Traditional South Indian recipes passed down through generations"
    },
    {
      icon: Users,
      title: "Family Atmosphere",
      description: "Warm, welcoming environment perfect for families and friends"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All dishes prepared fresh daily with the finest ingredients"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in authentic South Indian cuisine"
    }
  ];

  const steps = [
    {
      icon: Utensils,
      title: "Browse Our Menu",
      description: "Explore our extensive collection of authentic South Indian dishes, from crispy dosas to aromatic biryanis.",
      step: "01"
    },
    {
      icon: Heart,
      title: "Find Your Favorite",
      description: "Discover your perfect dish from our carefully curated selection of vegetarian and non-vegetarian options.",
      step: "02"
    },
    {
      icon: Clock,
      title: "Book & Take Order",
      description: "Reserve your table and place your order for a seamless dining experience.",
      step: "03"
    },
    {
      icon: Star,
      title: "Enjoy Meal",
      description: "Savor the authentic flavors in our cozy atmosphere with family and friends.",
      step: "04"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-mint/10 text-mint border-mint/20">
              About RK's Kitchen
            </Badge>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We're Always{" "}
              <span className="bg-gradient-to-r from-mint to-saffron bg-clip-text text-transparent">
                Here For You
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At RK's Kitchen, we believe that food is more than just sustenance—it's a way to 
              connect with our heritage, our family, and our community. Our journey began with 
              a simple dream: to share the authentic flavors of South India with the world.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dish we serve tells a story of tradition, passion, and love. From our 
              grandmother's secret spice blends to our chef's innovative presentation, we 
              honor the past while embracing the future.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-saffron/10 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-saffron" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="spice" size="lg" className="rounded-full">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Chef preparing traditional South Indian food"
                  className="w-full h-48 object-cover rounded-2xl shadow-warm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Traditional filter coffee"
                  className="w-full h-32 object-cover rounded-2xl shadow-warm"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Spicy South Indian curry"
                  className="w-full h-32 object-cover rounded-2xl shadow-warm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Fresh masala dosa"
                  className="w-full h-48 object-cover rounded-2xl shadow-warm"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm shadow-spice animate-float">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-saffron">15+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-turmeric">50K+</div>
                    <div className="text-xs text-muted-foreground">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-paprika">5★</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-turmeric/10 text-turmeric border-turmeric/20">
            Simple Process
          </Badge>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Does It{" "}
            <span className="bg-gradient-to-r from-turmeric to-paprika bg-clip-text text-transparent">
              Work?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect dining journey in just four simple steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-saffron to-turmeric text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-saffron/10 to-turmeric/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-saffron" />
                </div>
                
                {/* Content */}
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;