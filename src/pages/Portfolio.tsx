
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HolidayBanner from "@/components/HolidayBanner";
import { useHolidayMode } from "@/hooks/useHolidayMode";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const galleryImages = [
  // Graphic Design - Attila Branding
  {
    id: 67,
    src: "/assets/images/attila-billboard-back.png",
    alt: "Attila Premium Chicken Billboard Back",
    category: "billboards",
    label: "Billboard Design"
  },
  {
    id: 68,
    src: "/assets/images/attila-billboard-front.png",
    alt: "Attila Chicken Billboard Front",
    category: "billboards",
    label: "Billboard Design"
  },
  {
    id: 69,
    src: "/assets/images/attila-business-card.png",
    alt: "Attila Poultry Farm Business Card",
    category: "business-cards",
    label: "Business Card"
  },
  {
    id: 70,
    src: "/assets/images/attila-caps.png",
    alt: "Attila Branded Caps",
    category: "merchandise",
    label: "Merchandise Design"
  },
  {
    id: 71,
    src: "/assets/images/attila-tshirts.png",
    alt: "Attila Branded T-Shirts",
    category: "merchandise",
    label: "Merchandise Design"
  },
  {
    id: 72,
    src: "/assets/images/attila-brochure.png",
    alt: "Attila Chicken Brochure Design",
    category: "flyers-brochures",
    label: "Brochure Design"
  },
  {
    id: 66,
    src: "/assets/images/attila-poster.png",
    alt: "Attila Premium Chicken Poster",
    category: "graphic-design",
    label: "Poster Design"
  },

  // Graphic Design - Posters
  {
    id: 5,
    src: "/assets/images/poster.jpg",
    alt: "Event Poster Design",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 19,
    src: "/assets/images/country-night-poster.jpg",
    alt: "Country Night Event Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 20,
    src: "/assets/images/kavini-poster-01.jpg",
    alt: "Kavini Event Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 21,
    src: "/assets/images/KHB-MEAT-UP.jpg",
    alt: "KHB Meet Up Event Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 22,
    src: "/assets/images/MAKUENI-MBUZI-RIDE.jpg",
    alt: "Makueni Mbuzi Ride Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 23,
    src: "/assets/images/MASHUJAA.jpg",
    alt: "Mashujaa Day Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 24,
    src: "/assets/images/tcr-OPEN-NOW.png",
    alt: "TCR Opening Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 52,
    src: "/assets/images/beer-room-poster.png",
    alt: "The Beer Room Opening Poster",
    category: "graphic-design",
    label: "Poster Design"
  },
  {
    id: 53,
    src: "/assets/images/gri-zimbabwe-flyer.jpg",
    alt: "GRI Zimbabwe Training Flyer",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 54,
    src: "/assets/images/icr-empower-women.jpg",
    alt: "ICR Empower Women Infographic",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 55,
    src: "/assets/images/kavini-biryani-poster.jpg",
    alt: "Kavini Kitchen Biryani Promo",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 56,
    src: "/assets/images/kcic-hiring-poster.jpg",
    alt: "KCIC Consulting Hiring Poster",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 57,
    src: "/assets/images/kcic-decision-making.jpg",
    alt: "KCIC Decision-Making Content",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 58,
    src: "/assets/images/kcic-welcome-grace.jpg",
    alt: "KCIC Welcome Team Member",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 59,
    src: "/assets/images/kcic-customer-service-week.jpg",
    alt: "KCIC Customer Service Week",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 60,
    src: "/assets/images/kcic-water-starters.jpg",
    alt: "KCIC WaterStarters Program",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 61,
    src: "/assets/images/kcic-hiring-bd-manager.jpg",
    alt: "KCIC Business Development Manager Hiring",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 62,
    src: "/assets/images/youth-adapt-challenge.jpg",
    alt: "YouthADAPT Challenge 2023",
    category: "graphic-design",
    label: "Social Media"
  },
  {
    id: 63,
    src: "/assets/images/escrowpayafricalinkedin_logo.jpeg",
    alt: "EscrowPay Africa Logo",
    category: "logo-design",
    label: "Logo Design"
  },

  // Logo Design
  {
    id: 8,
    src: "/assets/images/CLEM-GFX LOGO-01.png",
    alt: "Clem GFX Brand Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 25,
    src: "/assets/images/CURRENT-CRAFTERS-LOGO-01.png",
    alt: "Current Crafters Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 26,
    src: "/assets/images/GIGI-PIXELS-2-01.png",
    alt: "Gigi Pixels Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 27,
    src: "/assets/images/KAVINI-KITCHEN-LOGO-FIN-01.png",
    alt: "Kavini Kitchen Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 28,
    src: "/assets/images/mock-u-2-01.png",
    alt: "Brand Mockup Design",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 49,
    src: "/assets/images/mwendafx-capital-logo.png",
    alt: "MwendaFX Capital Trading Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 50,
    src: "/assets/images/softech-guru-sg-logo.png",
    alt: "Softech Guru SG Logo",
    category: "logo-design",
    label: "Logo Design"
  },
  {
    id: 51,
    src: "/assets/images/amazing-life-publishing-logo.png",
    alt: "Amazing Life Publishing House Logo",
    category: "logo-design",
    label: "Logo Design"
  },

  // Architectural Design
  {
    id: 31,
    src: "/assets/images/3d (1).jpg",
    alt: "Isometric Living Room Interior Design",
    category: "architectural-design",
    label: "3D Render"
  },
  {
    id: 32,
    src: "/assets/images/3d (2).jpg",
    alt: "Modern Multi-Story Villa Exterior",
    category: "architectural-design",
    label: "3D Render"
  },
  {
    id: 33,
    src: "/assets/images/3d (3).jpg",
    alt: "Isometric Living Room with Fireplace",
    category: "architectural-design",
    label: "3D Render"
  },
  {
    id: 34,
    src: "/assets/images/3d (4).jpg",
    alt: "4-Bedroom Apartment Floor Plan",
    category: "architectural-design",
    label: "Floor Plan"
  },
  {
    id: 35,
    src: "/assets/images/3d (5).jpg",
    alt: "Luxury Apartment Night View Floor Plan",
    category: "architectural-design",
    label: "Floor Plan"
  },
  {
    id: 36,
    src: "/assets/images/3d (6).png",
    alt: "Modern Two-Story House Exterior",
    category: "architectural-design",
    label: "3D Render"
  },
  {
    id: 37,
    src: "/assets/images/3d (7).jpg",
    alt: "Brick House Exterior Design",
    category: "architectural-design",
    label: "3D Render"
  },
  {
    id: 38,
    src: "/assets/images/3d (8).jpg",
    alt: "Modern Black Villa with Landscaping",
    category: "architectural-design",
    label: "3D Render"
  }
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "billboards", label: "Billboards" },
  { id: "merchandise", label: "Merchandise" },
  { id: "flyers-brochures", label: "Flyers & Brochures" },
  { id: "business-cards", label: "Business Cards" },
  { id: "logo-design", label: "Logo Design" },
  { id: "architectural-design", label: "Architectural 3D Renders" }
];

export default function Gallery() {
  const { t } = useLanguage();
  const holidayMode = useHolidayMode();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Softech Guru Design Portfolio",
    "creator": {
      "@type": "Organization",
      "name": "Softech Guru"
    },
    "description": "Portfolio showcasing website design, graphic design, logo design, and architectural visualization projects by Softech Guru",
    "url": "https://softechguru.com/Portfolio"
  };

  return (
    <>
      {holidayMode !== "none" && <HolidayBanner mode={holidayMode} />}
      <SEO
        title="Design Portfolio - Softech Guru | Digital Marketing, Graphic Design, Web Design & Architecture"
        description="Explore our portfolio of stunning website designs, digital marketing campaigns, logos, posters, and 3D architectural visualizations. Professional creative work by Softech Guru Kenya."
        keywords="design portfolio Kenya, digital marketing portfolio, website design portfolio, graphic design portfolio, logo design portfolio, architectural visualization, 3D renders Nairobi, web design Kenya"
        structuredData={portfolioStructuredData}
      />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className={`flex-1 ${holidayMode !== "none" ? "pt-[74px] sm:pt-28" : "pt-20"}`}>
        {/* Header Section */}
        <header className="relative py-16 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Design <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
                Showcasing our best work in website design, graphic design, logo creation, and architectural visualization.
              </p>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </header>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => filterGallery(category.id)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={cn(
                    "relative overflow-hidden rounded-xl cursor-pointer group animate-fade-in",
                    image.category === "logo-design" ? "aspect-square bg-white p-4" : "aspect-[4/3]"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={`${image.alt} - Professional ${image.label} by Softech Guru`}
                    className={cn(
                      "w-full h-full transition-transform duration-700 group-hover:scale-110",
                      image.category === "logo-design" ? "object-contain" : "object-cover"
                    )}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-xs text-primary font-medium mb-1">{image.label}</span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
    </>
  );
}
