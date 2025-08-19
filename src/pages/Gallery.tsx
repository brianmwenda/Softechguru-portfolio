
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample gallery images with logos section
const galleryImages = [
  {
    id: 1,
    src: "/assets/images/student4.PNG",
    alt: "Website development",
    category: "websites",
    link: "https://netlify.schoolmanagement.com"
  },
  {
    id: 2,
    src: "/assets/images/wireframe.png",
    alt: "Website Design",
    category: "websites"
  },
  // {
  //   id: 3,
  //   src: "/assets/images/product.jpg",
  //   alt: "Product photography",
  //   category: "photography"
  // },
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
  // {
  //   id: 6,
  //   src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  //   alt: "Corporate video",
  //   category: "video"
  // },
  {
    id: 7,
    src: "/assets/images/mobile.png",
    alt: "Mobile app design",
    category: "websites"
  },
  {
    id: 8,
    src: "/assets/images/CLEM-GFX LOGO-01.png",
    alt: "Clem GFX Logo",
    category: "logos"
  },
  // {
  //   id: 9,
  //   src: "/assets/images/wedding.jpg",
  //   alt: "Professional headshots",
  //   category: "photography"
  // },
  // {
  //   id: 10,
  //   src: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop",
  //   alt: "Marketing video",
  //   category: "video"
  // },
  // {
  //   id: 11,
  //   src: "/assets/images/wedding5.jpg",
  //   alt: "Wedding Photography",
  //   category: "photography"
  // },
  // {
  //   id: 12,
  //   src: "/assets/images/wedding1.jpg",
  //   alt: "Event photography",
  //   category: "photography"
  // },
  // {
  //   id: 13,
  //   src: "/assets/images/wedding2.jpg",
  //   alt: "Wedding photography",
  //   category: "photography"
  // },
  // {
  //   id: 14,
  //   src: "/assets/images/wedding3.jpg",
  //   alt: "Wedding photography",
  //   category: "photography"
  // },
  // {
  //   id: 15,
  //   src: "/assets/images/wedding4.jpg",
  //   alt: "Wedding photography",
  //   category: "photography"
  // },
  {
    id: 16,
    src: "/assets/images/uiux.jpg",
    alt: "UI/UX Design",
    category: "websites"
  },
  {
    id: 17,
    src: "/assets/images/mobile1.png",
    alt: "Mobile app design",
    category: "Mobile Application"
  },
  {
    id: 18,
    src: "/assets/images/coinlist.png",
    alt: "Flutter app",
    category: "Mobile Application"
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
    category: "logos"
  },
  {
    id: 26,
    src: "/assets/images/GIGI-PIXELS-2-01.png",
    alt: "Gigi Pixels Logo",
    category: "logos"
  },
  {
    id: 27,
    src: "/assets/images/KAVINI-KITCHEN-LOGO-FIN-01.png",
    alt: "Kavini Kitchen Logo",
    category: "logos"
  },
  {
    id: 28,
    src: "/assets/images/mock-u-2-01.png",
    alt: "Mock Up Design",
    category: "logos"
  },
  {
    id: 29,
    src: "/assets/images/wireframe1.png",
    alt: "Website Wireframe",
    category: "websites"
  },
  //   {
  //   id: 30,
  //   src: "/assets/images/grd.jpg",
  //   alt: "Graduation Photography",
  //   category: "photography"
  // }
  // ,
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
  // {
  //   id: 39,
  //   src: "/assets/images/mobile3.png",
  //   alt: "Flutter app",
  //   category: ""
  // }
  //  ,
  {
    id: 40,
    src: "/assets/images/coinlist1.png",
    alt: "Flutter app",
    category: "Mobile Application"
  }
   ,
  {
    id: 41,
    src: "/assets/images/notetaking app.webp",
    alt: "Flutter app",
    category: "Mobile Application"
  }
   ,
  {
    id: 42,
    src: "/assets/images/Go-ticketing-system.png",
    alt: "Golang app",
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
      case "Mobile Application":
        return "Mobile Application";
      case "design":
        return "Graphic Design";
      case "3D interior Design":
        return "3D interior Design";
      case "logos":
        return "Logos";
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
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "websites", "Mobile Application", "logos", "design", "3D interior Design"].map((category) => (
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
                    image.category === "logos" ? "aspect-square bg-white p-4" : "aspect-[4/3]"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={cn(
                      "w-full h-full transition-transform duration-700 group-hover:scale-110",
                      image.category === "logos" ? "object-contain" : "object-cover"
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
