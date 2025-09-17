import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { content, t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = content.testimonials?.quotes || [];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="testimonial-card min-h-[300px] flex flex-col justify-center">
              <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-lg md:text-xl text-center leading-relaxed mb-8 font-body">
                "{testimonials[currentIndex]?.text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-display font-semibold">
                    {testimonials[currentIndex]?.author?.charAt(0)}
                  </span>
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex]?.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex]?.program}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} p-3 bg-surface border border-border rounded-full hover:bg-surface-hover transition-colors`}
              aria-label={isRTL ? 'الشهادة السابقة' : 'Previous testimonial'}
            >
              {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} p-3 bg-surface border border-border rounded-full hover:bg-surface-hover transition-colors`}
              aria-label={isRTL ? 'الشهادة التالية' : 'Next testimonial'}
            >
              {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`${isRTL ? 'اذهب إلى الشهادة' : 'Go to testimonial'} ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isPlaying 
                ? (isRTL ? 'إيقاف التشغيل التلقائي' : 'Pause auto-play')
                : (isRTL ? 'تشغيل تلقائي' : 'Resume auto-play')
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};