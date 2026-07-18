import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export default function SEO({ title, description, keywords, image, type = 'website' }: SEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.divineprocurement.com${pathname}`;

  useEffect(() => {
    // 1. Document Title
    document.title = `${title} | Divine Design & Procurement`;

    // Helper to set or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', description);

    // 3. Meta Keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 4. Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // 5. Robots
    setMetaTag('name', 'robots', 'index, follow');

    // 6. Open Graph Tags
    setMetaTag('property', 'og:title', `${title} | Divine Design & Procurement`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    if (image) {
      const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
      setMetaTag('property', 'og:image', imageUrl);
    }

    // 7. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${title} | Divine Design & Procurement`);
    setMetaTag('name', 'twitter:description', description);
    if (image) {
      const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
      setMetaTag('name', 'twitter:image', imageUrl);
    }
  }, [title, description, keywords, image, type, canonicalUrl]);

  return null;
}
