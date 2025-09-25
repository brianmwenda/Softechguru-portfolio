import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonical?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/og-image.png',
  type = 'website',
  canonical,
  structuredData
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://softechguru.com${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords || '');
    
    // Open Graph tags
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('og:type', type);
    updateMetaProperty('og:site_name', 'Softech Guru');
    
    // Twitter Card tags
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);
    updateMetaName('twitter:image', image);
    
    // Additional SEO meta tags
    updateMetaName('robots', 'index, follow');
    updateMetaName('author', 'Softech Guru');
    updateMetaName('language', 'English');
    updateMetaName('revisit-after', '7 days');
    
    // Update canonical link
    updateCanonical(canonicalUrl);
    
    // Add structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, keywords, image, type, canonicalUrl, currentUrl, structuredData]);

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element && content) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    if (element && content) {
      element.setAttribute('content', content);
    } else if (element && !content) {
      element.remove();
    }
  };

  const updateMetaProperty = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateMetaName = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateCanonical = (url: string) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      document.head.appendChild(element);
    }
    element.setAttribute('href', url);
  };

  const updateStructuredData = (data: object) => {
    // Remove existing structured data
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null;
}