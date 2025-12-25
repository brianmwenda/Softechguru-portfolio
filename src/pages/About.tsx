
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HolidayBanner from "@/components/HolidayBanner";
import { useHolidayMode } from "@/hooks/useHolidayMode";
import { Users, Award, Clock, Heart, Monitor, Palette, PenTool, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: <Users className="h-8 w-8" />, number: "80+", label: "Happy Clients" },
  { icon: <Award className="h-8 w-8" />, number: "150+", label: "Projects Completed" },
  { icon: <Clock className="h-8 w-8" />, number: "5+", label: "Years Experience" },
  { icon: <Heart className="h-8 w-8" />, number: "98%", label: "Client Satisfaction" }
];

const services = [
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Website Design",
    description: "Beautiful, responsive websites that captivate visitors and drive conversions."
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Architectural Design",
    description: "3D visualizations and floor plans that bring your building projects to life."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Graphic Design",
    description: "Logos, posters, and branding materials that tell your brand's story with impact."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Website Care & Support",
    description: "Ongoing maintenance and support to keep your website running smoothly."
  }
];

export default function About() {
  const holidayMode = useHolidayMode();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Softech Guru",
      "foundingDate": "2020",
      "description": "Creative design agency specializing in website design, graphic design, architectural visualization, and ongoing website support"
    }
  };

  return (
    <>
      {holidayMode !== "none" && <HolidayBanner mode={holidayMode} />}
      <SEO
        title="About Us - Softech Guru | Professional Design Team"
        description="Learn about Softech Guru's journey in creative design. Professional website design, graphic design, architectural visualization, and branding services."
        keywords="about Softech Guru, design agency Kenya, creative team Nairobi, professional designers, branding experts"
        structuredData={aboutStructuredData}
      />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className={`container relative z-10 ${holidayMode !== "none" ? "pt-[74px] sm:pt-28" : "pt-20"}`}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Crafting Creative Excellence Since 2020
              </h1>
              <p className="text-muted-foreground">
                We are a passionate team of designers and creatives dedicated to bringing your visual ideas to life with precision and artistry.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main About Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2020, Softech Guru emerged from a passion for exceptional design. What started as a one-person creative studio has grown into a full-service design agency serving clients across Kenya and beyond.
                </p>
                <p className="text-muted-foreground mb-6">
                  We specialize in creating stunning website designs, powerful brand identities, eye-catching graphic designs, and immersive architectural visualizations. Our approach combines technical expertise with creative vision to deliver results that exceed expectations.
                </p>
                <p className="text-muted-foreground mb-8">
                  Every project we undertake is a journey of collaboration, innovation, and attention to detail. We believe in building long-term partnerships with our clients, supporting their growth through exceptional design solutions.
                </p>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
                    alt="Softech Guru creative design workspace with design tools and projects" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground">
                Our comprehensive suite of design services covers every aspect of your creative needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 rounded-xl border bg-card animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every design we deliver.
                </p>
              </div>
              
              <div className="text-center animate-fade-in [animation-delay:100ms]">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality and always strive for excellence.
                </p>
              </div>
              
              <div className="text-center animate-fade-in [animation-delay:200ms]">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients as partners in their success.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your design project and see how we can bring your creative vision to life.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <a href="https://wa.me/254701443181" target="_blank" rel="noopener noreferrer">Get In Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
}
