
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample gallery images with logo Design section
const galleryImages = [
  {
    id: 1,
    src: "/assets/images/student4.PNG",
    alt: "School Management System",
    category: "websites",
    link: "https://netlify.schoolmanagement.com"
  },


  {
    id: 4,
    src: "/assets/images/web.png",
    alt: "E-commerce platform",
    category: "websites"
  },
  {
    id: 5,
    src: "/assets/images/poster.jpg",
    alt: "Brand design",
    category: "design"
  },
  
  {
    id: 8,
    src: "/assets/images/CLEM-GFX LOGO-01.png",
    alt: "Clem GFX Logo",
    category: "logo Design"
  }, 
  {
    id: 19,
    src: "/assets/images/country-night-poster.jpg",
    alt: "Country Night Poster",
    category: "design"
  }, 
  {
    id: 20,
    src: "/assets/images/kavini-poster-01.jpg",
    alt: "Kavini Poster",
    category: "design"
  }, 
  {
    id: 21,
    src: "/assets/images/KHB-MEAT-UP.jpg",
    alt: "KHB Meet Up Poster",
    category: "design"
  }, 
  {
    id: 22,
    src: "/assets/images/MAKUENI-MBUZI-RIDE.jpg",
    alt: "Makueni Mbuzi Ride Poster",
    category: "design"
  }, 
  {
    id: 23,
    src: "/assets/images/MASHUJAA.jpg",
    alt: "Mashujaa Poster",
    category: "design"
  },
  {
    id: 24,
    src: "/assets/images/tcr-OPEN-NOW.png",
    alt: "TCR Open Now Poster",
    category: "design"
  },
  {
    id: 25,
    src: "/assets/images/CURRENT-CRAFTERS-LOGO-01.png",
    alt: "Current Crafters Logo",
    category: "logo Design"
  },
  {
    id: 26,
    src: "/assets/images/GIGI-PIXELS-2-01.png",
    alt: "Gigi Pixels Logo",
    category: "logo Design"
  },
  {
    id: 27,
    src: "/assets/images/KAVINI-KITCHEN-LOGO-FIN-01.png",
    alt: "Kavini Kitchen Logo",
    category: "logo Design"
  },
  {
    id: 28,
    src: "/assets/images/mock-u-2-01.png",
    alt: "Mock Up Design",
    category: "logo Design"
  },


  {
    id: 31,
    src: "/assets/images/3d (1).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 32,
    src: "/assets/images/3d (2).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 33,
    src: "/assets/images/3d (3).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 34,
    src: "/assets/images/3d (4).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 35,
    src: "/assets/images/3d (5).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 36,
    src: "/assets/images/3d (6).png",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 37,
    src: "/assets/images/3d (7).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
  ,
  {
    id: 38,
    src: "/assets/images/3d (8).jpg",
    alt: "Interior Design floor plans",
    category: "3D interior Design"
  }
   ,
  {
    id: 42,
    src: "/assets/images/Go-ticketing-system.png",
    alt: "Conference Booking System in Go",
    category: "websites"
  }
  ,
  {
    id: 43,
    src: "/assets/images/go book management system.png",
    alt: "Book Management System in Go",
    category: "websites"
  }
 
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
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
  
  // Handle keyboard navigation for lightbox
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

  // Map categories to their translations
  const getFilterLabel = (category: string) => {
    switch (category) {
      case "all":
        return t.gallery.allProjects;
      case "websites":
        return t.gallery.webApps;
      
      case "design":
        return "Poster Design";
      case "3D interior Design":
        return "3D interior Design";
      case "logo Design":
        return "logo Design";
      // case "photography":
      //   return "Photography";
      // case "video":
      //   return "Video";
      default:
        return category;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-16 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary text-sm font-medium">🎨 Our Work</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Creative <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
                Showcasing our latest work and creative projects that drive results for our clients.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "websites", "logo Design", "design", "3D interior Design"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {getFilterLabel(category)}
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
                    image.category === "logo Design" ? "aspect-square bg-white p-4" : "aspect-[4/3]"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={cn(
                      "w-full h-full transition-transform duration-700 group-hover:scale-110",
                      image.category === "logo Design" ? "object-contain" : "object-cover"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                    
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
  );
}
