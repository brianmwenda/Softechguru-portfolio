
import { Shield, Zap, Users, Target, Code, Rocket } from "lucide-react";

const whyUsCards = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Reliable & Secure",
    description: "We build robust websites with top-notch security measures and reliable hosting solutions that keep your business running 24/7."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Our optimized code and modern technologies ensure your website loads instantly, keeping your customers engaged and improving SEO rankings."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Business Focused",
    description: "Every feature we build is designed to help grow your business, from e-commerce integration to lead generation systems."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Modern Technology",
    description: "We use cutting-edge technologies and frameworks to ensure your website is future-proof and easily maintainable."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Our streamlined development process ensures quick turnaround times without compromising on quality or functionality."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Dedicated Support",
    description: "Get ongoing support and maintenance to keep your website updated, secure, and performing at its best."
  }
];

export default function AboutSection() {
  return (
    <section id="why-us" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10 animate-fade-in">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
            Why Businesses Trust Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just build websites - we create digital solutions that help your business thrive in the competitive online marketplace.
          </p>
        </div>
        
        {/* Why Us Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsCards.map((card, index) => (
            <div 
              key={index} 
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
