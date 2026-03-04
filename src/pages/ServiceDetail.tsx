
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const servicesData = {
  "website-design": {
    title: "Website Design",
    subtitle: "Beautiful, responsive websites that captivate and convert",
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    description: "We create stunning, user-friendly websites that not only look great but also drive results. Our web design process combines creative aesthetics with strategic thinking to deliver digital experiences that engage visitors and convert them into customers.",
    process: [
      { step: "Discovery", description: "We learn about your business, goals, target audience, and competitors to create a strategic foundation." },
      { step: "Planning", description: "Information architecture, sitemap creation, and wireframing to establish the structure and flow." },
      { step: "Design", description: "Visual design concepts, UI/UX design, and interactive prototypes for your approval." },
      { step: "Development", description: "Clean, responsive code built with modern technologies like React, ensuring fast performance." },
      { step: "Launch", description: "Testing, optimization, deployment, and training to ensure a smooth launch." }
    ],
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading Speed",
      "Mobile-First Approach",
      "Content Management System",
      "Analytics Integration",
      "Security Best Practices",
      "Cross-Browser Compatibility"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "WordPress", "Shopify"],
    partners: [
      { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
      { name: "Netlify", logo: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
      { name: "Cloudflare", logo: "https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" },
      { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" }
    ]
  },
  "architectural-design": {
    title: "Architectural 3D Renders",
    subtitle: "Bringing your building projects to life before construction",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    description: "Transform your architectural visions into photorealistic 3D visualizations. Our architectural design services help architects, real estate developers, and homeowners visualize their projects with stunning accuracy and detail.",
    process: [
      { step: "Brief", description: "Understanding your project requirements, style preferences, and technical specifications." },
      { step: "Modeling", description: "Creating accurate 3D models based on your plans, sketches, or concepts." },
      { step: "Texturing", description: "Applying realistic materials, textures, and lighting to bring the model to life." },
      { step: "Rendering", description: "High-quality photorealistic renders from multiple angles and perspectives." },
      { step: "Revisions", description: "Refinements based on your feedback to achieve the perfect result." }
    ],
    features: [
      "Photorealistic Renders",
      "Interior Visualizations",
      "Exterior Visualizations",
      "Floor Plan Design",
      "Virtual Walkthroughs",
      "Day/Night Scenes",
      "Landscape Integration",
      "Material Selection"
    ],
    technologies: ["Blender", "SketchUp", "AutoCAD", "3ds Max", "Lumion", "V-Ray"],
    partners: [
      { name: "Autodesk", logo: "https://cdn.worldvectorlogo.com/logos/autodesk-2.svg" },
      { name: "Chaos Group", logo: "https://cdn.worldvectorlogo.com/logos/v-ray-5.svg" },
      { name: "Trimble", logo: "https://cdn.worldvectorlogo.com/logos/sketchup-2.svg" },
      { name: "Blender", logo: "https://cdn.worldvectorlogo.com/logos/blender-2.svg" }
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Visual storytelling that makes your brand unforgettable",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    description: "From logos to complete brand identities, our graphic design services help you stand out in a crowded marketplace. We create visual assets that communicate your brand's personality and values effectively.",
    process: [
      { step: "Research", description: "Understanding your brand, industry, competitors, and target audience." },
      { step: "Concept", description: "Developing initial concepts and creative directions for your approval." },
      { step: "Design", description: "Creating polished designs with attention to every detail." },
      { step: "Refinement", description: "Iterating based on your feedback to perfect the design." },
      { step: "Delivery", description: "Providing all files in multiple formats for print and digital use." }
    ],
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Poster & Flyer Design",
      "Business Cards",
      "Packaging Design",
      "Merchandise Design"
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "InDesign"],
    partners: [
      { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
      { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
      { name: "Pantone", logo: "https://cdn.worldvectorlogo.com/logos/pantone-2.svg" }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Strategic marketing to grow your online presence",
    heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
    description: "Reach your target audience and grow your business with our comprehensive digital marketing services. We combine data-driven strategies with creative content to deliver measurable results.",
    process: [
      { step: "Audit", description: "Analyzing your current online presence and identifying opportunities." },
      { step: "Strategy", description: "Developing a customized marketing plan aligned with your goals." },
      { step: "Implementation", description: "Executing campaigns across relevant channels and platforms." },
      { step: "Optimization", description: "Continuous monitoring and optimization for better performance." },
      { step: "Reporting", description: "Regular reports with insights and recommendations." }
    ],
    features: [
      "Social Media Management",
      "SEO Optimization",
      "Content Marketing",
      "Email Campaigns",
      "PPC Advertising",
      "Analytics & Reporting",
      "Influencer Marketing",
      "Brand Strategy"
    ],
    technologies: ["Google Analytics", "Meta Business Suite", "Hootsuite", "Mailchimp", "SEMrush"],
    partners: [
      { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-icon.svg" },
      { name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
      { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
      { name: "X", logo: "https://cdn.worldvectorlogo.com/logos/x-2.svg" }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  const handleBackToServices = () => {
    navigate('/', { replace: false });
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Hello! I'm interested in your ${service.title} service. Please provide me with more information and a quote.`;
    window.open(`https://wa.me/254701443181?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.title} | Softech Guru`}
        description={service.description}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <button 
            onClick={handleBackToServices}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{service.subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.step}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What's Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card/90 backdrop-blur-xl border border-border/50 rounded-lg shadow-md">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Partners */}
      <section className="section bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Our Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {service.partners.map((partner, index) => (
                  <div key={index} className="p-4 bg-card border border-border/50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-10 w-auto object-contain"
                      title={partner.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <div className="container relative z-10">
          <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Button size="lg" onClick={handleWhatsAppContact} className="btn-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
