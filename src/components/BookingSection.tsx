import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: Date | undefined;
  time: string;
  guests: string;
  specialRequests: string;
}

const BookingSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    date: undefined,
    time: "",
    guests: "",
    specialRequests: ""
  });

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  const handleInputChange = (field: keyof BookingFormData, value: string | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateBookingPDF = (bookingData: BookingFormData, bookingId: string) => {
    const bookingDetails = `
RK'S KITCHEN - TABLE RESERVATION
================================

Booking Details:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}
- Date: ${bookingData.date ? format(bookingData.date, "PPP") : ""}
- Time: ${bookingData.time}
- Guests: ${bookingData.guests}
- Special Requests: ${bookingData.specialRequests || "None"}

Booking ID: ${bookingId}
Booking Time: ${new Date().toLocaleString()}

Thank you for choosing RK's Kitchen!
A Really Delicious Experience Awaits You.

Please arrive 15 minutes before your reservation time.
For any changes or cancellations, please contact us at:
Phone: +91 98765 43210
Email: reservations@rkskitchen.com
    `;

    // Create a downloadable text file (in real app, this would be a PDF)
    const blob = new Blob([bookingDetails], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RKs-Kitchen-Booking-${bookingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Convert time from 12-hour to 24-hour format for database storage
      const convertTo24Hour = (time12h: string) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
          hours = '00';
        }
        if (modifier === 'PM') {
          hours = (parseInt(hours, 10) + 12).toString();
        }
        return `${hours}:${minutes}`;
      };

      // Insert booking data into Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          booking_date: format(formData.date!, 'yyyy-MM-dd'),
          booking_time: convertTo24Hour(formData.time),
          guests: parseInt(formData.guests === '10+' ? '10' : formData.guests),
          special_requests: formData.specialRequests || null
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Generate booking ID from the database response
      const bookingId = `RK${data.id.slice(-8).toUpperCase()}`;
      
      // Generate and download PDF with booking ID
      generateBookingPDF(formData, bookingId);
      
      toast({
        title: "Booking Confirmed! 🎉",
        description: `Your table has been reserved (ID: ${bookingId}). Booking confirmation has been downloaded.`,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: undefined,
        time: "",
        guests: "",
        specialRequests: ""
      });
    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-saffron/10 text-saffron border-saffron/20">
              Reservations
            </Badge>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Don't Wait —{" "}
              <span className="bg-gradient-to-r from-saffron to-paprika bg-clip-text text-transparent">
                Book Now!
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins leading-relaxed">
              Reserve your table at RK's Kitchen and experience the authentic flavors of South India. 
              Book now to avoid disappointment and enjoy our delicious cuisine in a warm, welcoming atmosphere.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-saffron/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-saffron" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-turmeric/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-turmeric" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">reservations@rkskitchen.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-paprika/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-paprika" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">123 Marina Beach Road, Chennai, Tamil Nadu 600001</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 p-6 bg-gradient-to-r from-saffron/5 to-turmeric/5 rounded-2xl border border-saffron/10">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-saffron" />
                Operating Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>10:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="animate-slide-in-right shadow-warm border-border/50">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground">Reserve Your Table</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Reservation Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => handleInputChange('date', date)}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Number of Guests *</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((count) => (
                          <SelectItem key={count} value={count}>
                            <Users className="h-4 w-4 mr-2 inline" />
                            {count} {count === "1" ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Textarea
                    id="requests"
                    placeholder="Any dietary restrictions, allergies, or special occasions?"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-saffron to-turmeric hover:from-turmeric hover:to-saffron text-white font-semibold py-3 rounded-full shadow-warm transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Processing..." : "Reserve Table & Download Confirmation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;