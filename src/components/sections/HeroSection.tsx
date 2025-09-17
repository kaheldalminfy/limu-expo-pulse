import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadBrochure = () => {
    // This would trigger a download of the main brochure
    window.open('/brochures/limu-main-brochure.pdf', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Language Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              {isRTL ? 'معرض التعليم العالي 2025' : 'Higher Education Expo 2025'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t('hero.headline')}
            </span>
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToPrograms}
              className="btn-hero group"
              aria-label={t('hero.cta_programs')}
            >
              <span>{t('hero.cta_programs')}</span>
              <ArrowDown className={`w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform ${isRTL ? 'ml-0 mr-2' : ''}`} />
            </button>
            
            <button
              onClick={downloadBrochure}
              className="btn-secondary group"
              aria-label={t('hero.cta_brochure')}
            >
              <Download className={`w-5 h-5 mr-2 group-hover:scale-110 transition-transform ${isRTL ? 'mr-0 ml-2' : ''}`} />
              <span>{t('hero.cta_brochure')}</span>
            </button>
          </div>

          {/* Quick Stats Preview */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="counter animate-counter">7</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'برامج متميزة' : 'Distinguished Programs'}
              </div>
            </div>
            <div className="text-center">
              <div className="counter animate-counter">15</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'مبادرة ابتكار' : 'Innovation Initiatives'}
              </div>
            </div>
            <div className="text-center">
              <div className="counter animate-counter">2,500+</div>
              <div className="text-sm text-muted-foreground">
                {isRTL ? 'خريج ناجح' : 'Successful Graduates'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};