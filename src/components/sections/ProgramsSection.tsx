import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import programs from '@/data/programs.json';
import { 
  Stethoscope, 
  Briefcase, 
  Banknote, 
  Megaphone, 
  ClipboardList, 
  Scale, 
  Globe,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const iconMap = {
  stethoscope: Stethoscope,
  briefcase: Briefcase,
  banknote: Banknote,
  megaphone: Megaphone,
  clipboard: ClipboardList,
  scale: Scale,
  globe: Globe,
};


export const ProgramsSection: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const currentProgram = program[language];
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || Briefcase;
            
            return (
              <Link
                key={program.slug}
                to={`/${program.slug}`}
                className="program-card animate-fade-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-display font-semibold mb-2 leading-tight text-card-foreground">
                      {currentProgram.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {currentProgram.pitch}
                    </p>
                    
                    {/* Bullet chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentProgram.core_courses.slice(0, 3).map((course, courseIndex) => (
                        <span key={courseIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                      <span>{isRTL ? 'تفاصيل البرنامج' : 'Program Details'}</span>
                      <ChevronIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};