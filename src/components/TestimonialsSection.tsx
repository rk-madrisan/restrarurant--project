import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "sameer",
      location: "Chennai",
      rating: 5,
      text: "The best South Indian food in the city! The masala dosa reminds me of my grandmother's cooking. The ambiance is perfect for family dinners.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "absar",
      location: "Bangalore",
      rating: 5,
      text: "Authentic flavors that transport you straight to South India. The biryanis are exceptional and the service is outstanding. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Amohan raj",
      location: "Hyderabad",
      rating: 5,
      text: "RK's Kitchen has become our go-to place for special occasions. The food quality is consistently excellent and the staff treats you like family.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-paprika/10 text-paprika border-paprika/20">
            Customer Reviews
          </Badge>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-paprika to-saffron bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their 
            dining experience at RK's Kitchen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-saffron" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-saffron fill-saffron" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-saffron/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-saffron/5 via-turmeric/5 to-paprika/5 rounded-3xl p-8 border border-saffron/10">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground mb-6">
              We'd love to hear about your dining experience at RK's Kitchen. Your feedback helps us serve you better!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.google.com/search?q=rks+kitchen+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-saffron to-turmeric text-white font-semibold rounded-full hover:from-turmeric hover:to-saffron transition-all duration-300 hover:scale-105"
              >
                Write a Google Review
              </a>
              <a 
                href="#booking" 
                className="inline-flex items-center justify-center px-6 py-3 border border-saffron text-saffron font-semibold rounded-full hover:bg-saffron hover:text-white transition-all duration-300 hover:scale-105"
              >
                Book Your Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;