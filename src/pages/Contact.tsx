
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.contact.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-purple-500/50 blur-3xl" />
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h2 className="text-2xl font-bold mb-6">{t.contact.getInTouch}</h2>
                
                <div className="glass-card p-6 space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                      <p className="text-muted-foreground">+(254) 701-443-181</p>
                     
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                      <p className="text-muted-foreground">info@softechguru.com</p>
                  
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.businessHours}</h3>
                      <p className="text-muted-foreground">
                        {t.contact.mondayFriday}<br />
                        {t.contact.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Custom Service Request Form */}
              <div className="animate-fade-in [animation-delay:300ms]">
                <h2 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h2>
                
                <div className="glass-card p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.fullName}</Label>
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
                          <Label htmlFor="email">{t.contact.email}</Label>
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
                          <Label htmlFor="phone">{t.contact.phoneNumber}</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 234 567 8900" 
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
                              <SelectItem value="under-1000">Under $1,000</SelectItem>
                              <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                              <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10000-plus">$10,000+</SelectItem>
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
                          placeholder={t.contact.tellUsAboutProject} 
                          className="min-h-[150px]"
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full btn-primary">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {t.contact.send}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{t.contact.messageSent}</h3>
                      <p className="text-muted-foreground mb-6">
                        {t.contact.thankYou}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
