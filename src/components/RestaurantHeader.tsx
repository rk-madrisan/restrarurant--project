import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const RestaurantHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chennai, Tamil Nadu </span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <p className="h-4 w-4" />
              <span>[MOHAMED RIYASKHAN - 24IT027] </span>
            </div>
          </div>
          <div className="text-saffron font-medium">Open Daily: 11:00 AM - 10:00 PM</div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-saffron to-paprika p-3 rounded-full shadow-warm">
              <span className="text-white font-bold text-xl">RK</span>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-foreground">
                RK's Kitchen
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                A Really Delicious
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-saffron transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Book Table Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default" 
              className="hidden md:flex bg-gradient-to-r from-saffron to-turmeric hover:from-turmeric hover:to-saffron text-white font-semibold px-6 py-2 rounded-full shadow-warm transition-all duration-300 hover:scale-105"
            >
              Book Table
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-saffron transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-saffron transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="mt-4 bg-gradient-to-r from-saffron to-turmeric text-white font-semibold py-2 rounded-full"
              >
                Book Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default RestaurantHeader;