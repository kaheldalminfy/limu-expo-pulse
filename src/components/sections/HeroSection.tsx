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
      
      {/* Floating Background Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 mb-8 animate-scale-in">
            <Sparkles className="w-5 h-5 text-primary animate-glow" />
            <span className="text-sm font-medium text-surface-foreground">
              {isRTL ? 'معرض التعليم العالي 2025' : 'Higher Education Expo 2025'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="block animate-slide-up">{t('hero.headline')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent animate-slide-up animate-glow" style={{ animationDelay: '0.2s' }}>
              {isRTL ? 'بوابتك إلى مهن المستقبل' : 'Your Gateway to Future Careers'}
            </span>
          </h1>
          
          {/* Subline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.subline')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('programs')}
              className="btn-hero w-full sm:w-auto animate-float"
            >
              <span>{t('hero.cta_programs')}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('lead-form')}
              className="btn-secondary w-full sm:w-auto"
            >
              <Download className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t('hero.cta_brochure')}</span>
            </button>
          </div>

          {/* Quick Stats Preview */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="counter animate-counter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">7</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'برامج متميزة' : 'Distinguished Programs'}
              </div>
            </div>
            <div className="text-center">
              <div className="counter animate-counter text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-primary" style={{ animationDelay: '0.5s' }}>15</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'مبادرة ابتكار' : 'Innovation Initiatives'}
              </div>
            </div>
            <div className="text-center">
              <div className="counter animate-counter text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-glow" style={{ animationDelay: '1s' }}>2,500+</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'خريج ناجح' : 'Successful Graduates'}
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16" style={{ animationDelay: '1.2s' }}>
            <ChevronDown 
              className="w-8 h-8 text-primary mx-auto cursor-pointer hover:scale-110 transition-transform animate-glow" 
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