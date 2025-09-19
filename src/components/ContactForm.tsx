import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    details: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I'd like to request a custom service:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Service Details:
${formData.details}

Please contact me to discuss this project further.`;

    const whatsappUrl = `https://wa.me/254701443181?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        budget: "",
        timeline: "",
        details: ""
      });
    }, 3000);
  };

  return (
    <div className="animate-fade-in [animation-delay:300ms]">
      <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
      
      <div className="glass-card p-6">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 712 345 678" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="hosting">Domain & Hosting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under KES 50,000</SelectItem>
                    <SelectItem value="50k-100k">KES 50,000 - 100,000</SelectItem>
                    <SelectItem value="100k-250k">KES 100,000 - 250,000</SelectItem>
                    <SelectItem value="250k-plus">KES 250,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="details">Service Details</Label>
              <Textarea 
                id="details" 
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..." 
                className="min-h-[150px]"
                required 
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Message Sent!</h4>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We'll get back to you soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}