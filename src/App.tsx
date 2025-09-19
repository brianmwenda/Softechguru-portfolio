
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apartments from "./pages/Apartments";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "./components/Preloader";
import { usePreloader } from "./hooks/usePreloader";

// Create a react-query client
const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading, handlePreloaderComplete } = usePreloader();

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={`transition-opacity duration-500 dark ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Apartments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </CartProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
