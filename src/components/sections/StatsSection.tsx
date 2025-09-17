import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { GraduationCap, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="counter animate-counter">
        {count.toLocaleString()}
        {end >= 1000 ? '+' : ''}
      </div>
      <div className="text-sm text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: parseInt(t('stats.programs')),
      label: t('stats.programs_label'),
      icon: BookOpen,
      color: 'text-primary'
    },
    {
      value: parseInt(t('stats.students')),
      label: t('stats.students_label'),
      icon: Users,
      color: 'text-accent'
    },
    {
      value: parseInt(t('stats.graduates').replace(/[^\d]/g, '')),
      label: t('stats.graduates_label'),
      icon: GraduationCap,
      color: 'text-primary'
    },
    {
      value: parseInt(t('stats.research').replace(/[^\d]/g, '')),
      label: t('stats.research_label'),
      icon: Award,
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className="glass-card p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-surface-hover rounded-2xl flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                
                <Counter
                  end={stat.value}
                  label={stat.label}
                  duration={2000 + index * 200}
                />
              </div>
            );
          })}
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              معتمد دولياً
            </span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              تقنيات متطورة
            </span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              مجتمع متنوع
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};