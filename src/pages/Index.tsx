import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { MapSection } from '@/components/sections/MapSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PollSection } from '@/components/sections/PollSection';
import { InnovationSection } from '@/components/sections/InnovationSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { LeadFormSection } from '@/components/sections/LeadFormSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    // Set page title and meta tags
    const title = language === 'ar' 
      ? 'كلية العلوم الإنسانية والاجتماعية - LIMU'
      : 'Faculty of Humanities & Social Sciences - LIMU';
    
    const description = language === 'ar'
      ? 'اكتشف برامجنا الأكاديمية المتميزة وابدأ رحلتك المهنية مع كلية العلوم الإنسانية والاجتماعية'
      : 'Discover our distinguished academic programs and start your career journey with the Faculty of Humanities & Social Sciences';

    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Set lang and dir attributes on html element
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Add Open Graph meta tags for better social sharing
    const updateOrCreateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateOrCreateMetaTag('og:title', title);
    updateOrCreateMetaTag('og:description', description);
    updateOrCreateMetaTag('og:type', 'website');
    updateOrCreateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_US');
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Faculty of Humanities & Social Sciences - LIMU",
      "alternateName": "كلية العلوم الإنسانية والاجتماعية",
      "description": description,
      "url": window.location.origin,
      "sameAs": [
        "https://facebook.com/limu.edu",
        "https://twitter.com/limu_edu",
        "https://instagram.com/limu_edu",
        "https://linkedin.com/school/limu-edu"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressLocality": "Riyadh"
      },
      "offers": {
        "@type": "EducationalOccupationalProgram",
        "name": "Academic Programs",
        "description": "7 distinguished undergraduate programs in humanities and social sciences"
      }
    };

    // Add or update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

  }, [language, isRTL]);

  return (
    <main className="min-h-screen animated-bg text-foreground relative overflow-hidden">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        {isRTL ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div id="main-content" className="relative z-10">
        {/* Programs Section */}
        <div className="relative">
          <ProgramsSection />
          {/* Floating background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl animate-float" />
          </div>
        </div>

        {/* Interactive Map Section */}
        <MapSection />

        {/* Student Testimonials */}
        <TestimonialsSection />

        {/* Live Poll */}
        <PollSection />

        {/* Innovation Corner */}
        <div className="relative">
          <InnovationSection />
          {/* More floating elements */}
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Lead Capture Form */}
        <LeadFormSection />
      </div>

      {/* Footer */}
      <FooterSection />

      {/* Performance optimization: Preload critical images */}
      <div className="hidden">
        <link rel="preload" as="image" href="/images/classrooms.jpg" />
        <link rel="preload" as="image" href="/images/library.jpg" />
        <link rel="preload" as="image" href="/images/labs.jpg" />
        <link rel="preload" as="image" href="/images/clubs.jpg" />
      </div>
    </main>
  );
};

export default Index;