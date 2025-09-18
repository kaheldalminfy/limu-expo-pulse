import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Home } from 'lucide-react';

const EnglishGlobalCommunication = () => {
  const { language, t, isRTL } = useLanguage();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const program = {
    ar: {
      name: "الإنجليزية والاتصال العالمي",
      pitch: "جسر التواصل مع العالم",
      about: "إعداد متخصصين في اللغة الإنجليزية والتواصل متعدد الثقافات لربط ليبيا بالعالم",
      core_courses: ["الأدب الإنجليزي", "الترجمة الفورية", "التواصل متعدد الثقافات", "الكتابة الأكاديمية", "تحليل الخطاب", "التواصل الرقمي"],
      careers: ["مترجم", "محرر محتوى", "مسؤول علاقات دولية", "معلم لغة إنجليزية"]
    },
    en: {
      name: "English & Global Communication Program",
      pitch: "Bridge communication with the world",
      about: "Prepare specialists in English language and multicultural communication to connect Libya with the world",
      core_courses: ["English Literature", "Simultaneous Translation", "Multicultural Communication", "Academic Writing", "Discourse Analysis", "Digital Communication"],
      careers: ["Translator", "Content Editor", "International Relations Officer", "English Language Teacher"]
    }
  };

  const currentProgram = program[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-surface-foreground hover:text-primary transition-colors"
          >
            <BackIcon className="w-5 h-5" />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6">
              {currentProgram.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {currentProgram.pitch}
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Program Overview */}
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border shadow-sm">
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                {isRTL ? 'نبذة عن البرنامج' : 'About the Program'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentProgram.about}
              </p>
            </div>

            {/* Core Courses */}
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border shadow-sm">
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                {isRTL ? 'المقررات المحورية' : 'Core Courses'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProgram.core_courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-card-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border shadow-sm">
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                {isRTL ? 'فرص التوظيف' : 'Career Opportunities'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProgram.careers.map((career, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-card-foreground font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishGlobalCommunication;