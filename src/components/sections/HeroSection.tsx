import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ChevronDown, Download, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <LanguageToggle />
      
      {/* Floating LIMU Logos */}
      <img src="/images/limu-main-logo.png" alt="LIMU Logo" className="floating-logo floating-logo-1" />
      <img src="/images/limu-main-logo.png" alt="LIMU Logo" className="floating-logo floating-logo-2" />
      <img src="/images/limu-main-logo.png" alt="LIMU Logo" className="floating-logo floating-logo-3" />
      <img src="/images/limu-main-logo.png" alt="LIMU Logo" className="floating-logo floating-logo-4" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Contest Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-scale-in">
            <Sparkles className="w-5 h-5 text-white animate-glow" />
            <span className="text-sm font-medium text-white">
              {isRTL ? 'برعاية الجامعة الليبية الدولية' : 'Sponsored by Libyan International University'}
            </span>
          </div>

          {/* Main Contest Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
            <span className="block animate-slide-up">
              كلية العلوم الإنسانية والاجتماعية
            </span>
          </h1>
          
          {/* Contest Details */}
          <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg md:text-xl text-white/90 mb-2">
              بوابتك إلى مهن المستقبل
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              تعرّف بسرعة على برامجنا وفرص المسارات المهنية
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {isRTL ? 
                'دع طفلك يرسم ما يحب في مدينته أو يتخيله في المستقبل: شارع، حديقة، ناس، أو أي مشهد يحبه' : 
                'Let your child draw what they love about their city or imagine in the future: street, park, people, or any scene they love'
              }
            </p>
          </div>
          
          {/* Contest CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('lead-form')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto animate-float"
            >
              <span>سجل الان</span>
            </button>
            
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span>استكشاف البرامج</span>
            </button>
          </div>

          {/* Contest Deadline Banner */}
          <div className="contest-banner max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <img src="/images/letex-logo.jpg" alt="LETEX III Logo" className="w-20 h-20 mx-auto mb-4 rounded-full" />
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">📅</span>
              <span className="text-lg font-bold">
                ملتقى ومعرض ليبيا الدولي للتعليم والتدريب
              </span>
            </div>
            <div className="text-2xl font-bold">
              {isRTL ? '30 أغسطس 2025' : 'August 30, 2025'}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16" style={{ animationDelay: '1.2s' }}>
            <ChevronDown 
              className="w-8 h-8 text-white mx-auto cursor-pointer hover:scale-110 transition-transform animate-glow" 
              onClick={() => scrollToSection('programs')}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary-glow/15 to-transparent rounded-full blur-3xl animate-pulse animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tl from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-primary-glow/3 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};