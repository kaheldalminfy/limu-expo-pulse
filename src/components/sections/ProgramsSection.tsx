import React, { useState } from 'react';
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
  X,
  Download,
  ChevronRight
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

interface ProgramModalProps {
  program: typeof programs[0];
  isOpen: boolean;
  onClose: () => void;
}

const ProgramModal: React.FC<ProgramModalProps> = ({ program, isOpen, onClose }) => {
  const { language, t, isRTL } = useLanguage();
  
  if (!isOpen) return null;

  const currentProgram = program[language];
  const IconComponent = iconMap[program.icon as keyof typeof iconMap] || Briefcase;

  const downloadPDF = () => {
    window.open(program.pdf, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold">{currentProgram.name}</h2>
              <p className="text-muted-foreground">{currentProgram.pitch}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
            aria-label={isRTL ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">
            {isRTL ? 'نبذة عن البرنامج' : 'About the Program'}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{currentProgram.about}</p>
        </div>

        {/* Core Courses */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">
            {isRTL ? 'المقررات المحورية' : 'Core Courses'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentProgram.core_courses.map((course, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <ChevronRight className={`w-4 h-4 text-accent ${isRTL ? 'rotate-180' : ''}`} />
                <span className="text-sm">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">
            {isRTL ? 'فرص التوظيف' : 'Career Opportunities'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentProgram.careers.map((career, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-medium">{career}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={downloadPDF}
            className="btn-hero flex-1"
          >
            <Download className={`w-5 h-5 mr-2 ${isRTL ? 'mr-0 ml-2' : ''}`} />
            {isRTL ? 'تحميل بروشور البرنامج' : 'Download Program Brochure'}
          </button>
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            {isRTL ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProgramsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  return (
    <>
      <section id="programs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
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
                <div
                  key={program.slug}
                  className="program-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProgram(program)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProgram(program)}
                  aria-label={`${t('programs.learn_more')} ${currentProgram.name}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary program-icon" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-semibold mb-2 leading-tight">
                        {currentProgram.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {currentProgram.pitch}
                      </p>
                      
                      <div className="flex items-center text-primary text-sm font-medium">
                        <span>{t('programs.learn_more')}</span>
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          isOpen={!!selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}
    </>
  );
};