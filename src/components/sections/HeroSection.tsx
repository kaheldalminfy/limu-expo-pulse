import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ArrowLeft : ArrowRight;

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/NJX1_7khZ1w?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&playlist=NJX1_7khZ1w"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* Light overlay for better text readability - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 z-10" />
      </div>

      {/* Template-style Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Left side - Language Toggle */}
            <LanguageToggle />
            
            {/* Right side - University Logo and Name */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-white text-lg font-semibold">
                  {isRTL ? 'كلية العلوم الإنسانية والاجتماعية' : 'Faculty of Humanities & Social Sciences'}
                </div>
                <div className="text-white/80 text-sm">
                  {isRTL ? 'الجامعة الليبية الدولية' : 'Libyan International Medical University'}
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <img 
                  src="/images/limu-logo-full.png" 
                  alt="LIMU Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content - Template Style */}
      <div className="container mx-auto px-4 z-10 relative pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight text-white animate-fade-in">
            {isRTL ? (
              <>
                <span className="block">كلية العلوم الإنسانية</span>
                <span className="block">والاجتماعية</span>
              </>
            ) : (
              <>
                <span className="block">Faculty of Humanities</span>
                <span className="block">& Social Sciences</span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {isRTL ? "الجامعة الليبية الدولية" : "Libyan International Medical University"}
          </h2>
          
          {/* Main Description */}
          <p className="text-lg md:text-xl text-white/95 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {isRTL ? "بوابتك إلى مهن المستقبل" : "Your Gateway to Future Careers"}
          </p>
          
          {/* Supporting Description */}
          <p className="text-base md:text-lg text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {isRTL 
              ? "تعرّف بسرعة على برامجنا وفرص المسارات المهنية"
              : "Quickly discover our programs and career pathway opportunities"
            }
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <button 
              onClick={() => scrollToSection("programs")}
              className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>{isRTL ? "استكشاف البرامج" : "Explore Programs"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dark blue overlay for text contrast */}
      <div className="absolute inset-0 bg-blue-900/20" />

      {/* Optional: Minimal Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};