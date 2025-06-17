
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Clock, Heart, Code, Palette, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { icon: <Users className="h-8 w-8" />, number: "50+", label: "Happy Clients" },
  { icon: <Award className="h-8 w-8" />, number: "100+", label: "Projects Completed" },
  { icon: <Clock className="h-8 w-8" />, number: "3+", label: "Years Experience" },
  { icon: <Heart className="h-8 w-8" />, number: "99%", label: "Client Satisfaction" }
];

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Graphic Design",
    description: "Beautiful and intuitive interfaces that provide exceptional user experiences."
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: "Photography",
    description: "Professional photography services for your business and brand storytelling."
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Videography",
    description: "High-quality video production for promotional and corporate content."
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Crafting Digital Excellence Since 2021
              </h1>
              <p className="text-muted-foreground">
                We are a passionate team of developers, designers, and creatives dedicated to bringing your digital vision to life.
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
                  Founded in 2021, our company emerged from a simple belief: that great digital experiences should be accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p className="text-muted-foreground mb-6">
                  We specialize in creating custom web solutions, stunning visual designs, and compelling multimedia content that helps our clients stand out in the digital landscape. Our approach combines technical expertise with creative vision to deliver results that exceed expectations.
                </p>
                <p className="text-muted-foreground mb-8">
                  Every project we undertake is a journey of collaboration, innovation, and attention to detail. We believe in building long-term partnerships with our clients, supporting their growth through exceptional digital solutions.
                </p>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team working together" 
                    className="w-full h-full object-cover"
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
                Our comprehensive suite of services covers every aspect of your digital presence.
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
                The principles that guide everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every project we deliver.
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
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
