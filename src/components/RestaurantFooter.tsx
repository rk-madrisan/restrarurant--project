import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RestaurantFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-curry/90 to-curry text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-saffron to-paprika p-3 rounded-full">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">RK's Kitchen</h3>
                <p className="text-white/80">A Really Delicious</p>
              </div>
            </div>
            <p className="text-white/70">
              Experience the authentic flavors of South India. Every dish is prepared with 
              traditional methods and the finest spices to bring you a truly delicious dining experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-saffron">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-turmeric">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-paprika">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-saffron" />
                <span className="text-white/80">123 Marina Beach Road, Chennai, Tamil Nadu 600001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-turmeric" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-paprika" />
                <span className="text-white/80">info@rkskitchen.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-saffron" />
              Operating Hours
            </h4>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>10:00 AM - 11:00 PM</span>
              </div>
              <div className="mt-3 p-3 bg-white/10 rounded-lg">
                <p className="text-sm">We're open for lunch and dinner. Call ahead for reservations!</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Stay Updated</h4>
            <p className="text-white/70">
              Subscribe to our newsletter for special offers and new dish announcements.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-gradient-to-r from-saffron to-turmeric hover:from-turmeric hover:to-saffron text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70">
              © 2024 RK's Kitchen. All rights reserved. | Designed with ❤️ for authentic South Indian cuisine lovers.
            </div>
            <div className="flex space-x-6 text-white/70">
              <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-turmeric transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-paprika transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;