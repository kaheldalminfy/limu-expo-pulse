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

// Color mapping for each program - matching template style
const programColors = [
  'program-card-purple',
  'program-card-green', 
  'program-card-blue',
  'program-card-orange',
  'program-card-teal',
  'program-card-red',
  'program-card-purple', // For 7th program if exists
];

export const ProgramsSection: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Template Style */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            {t('programs.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Programs Grid - Practice Areas Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const currentProgram = program[language];
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || Briefcase;
            const colorClass = programColors[index % programColors.length];
            
            return (
              <Link
                key={program.slug}
                to={`/${program.slug}`}
                className={`program-card ${colorClass} animate-fade-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.1"/>
                    <circle cx="30" cy="30" r="20" fill="currentColor" opacity="0.1"/>
                    <circle cx="70" cy="70" r="15" fill="currentColor" opacity="0.1"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Abbreviation */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium bg-white/10 px-2 py-1 rounded">
                      ({program.icon.toUpperCase()})
                    </span>
                  </div>
                  
                  {/* Program Title */}
                  <h3 className="text-xl font-display font-bold mb-3 text-white leading-tight">
                    {currentProgram.name}
                  </h3>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center text-white/90 font-medium group-hover:text-white transition-colors">
                    <ChevronIcon className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span>{isRTL ? 'تعرف أكثر' : 'Learn More'}</span>
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