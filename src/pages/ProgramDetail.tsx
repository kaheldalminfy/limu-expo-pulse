import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Home } from 'lucide-react';
import programs from '@/data/programs.json';

const ProgramDetail = () => {
  const { slug } = useParams();
  const { language, t, isRTL } = useLanguage();
  
  const program = programs.find(p => p.slug === slug);
  
  if (!program) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">
            {isRTL ? 'البرنامج غير موجود' : 'Program Not Found'}
          </h1>
          <Link 
            to="/" 
            className="btn-accent inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  const currentProgram = program[language];
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

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
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6">
              {currentProgram.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {currentProgram.pitch}
            </p>
            
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                {isRTL ? 'الرئيسية' : 'Home'}
              </Link>
              <span className={`mx-2 ${isRTL ? 'rotate-180' : ''}`}>→</span>
              <span>{isRTL ? 'البرامج الأكاديمية' : 'Academic Programs'}</span>
              <span className={`mx-2 ${isRTL ? 'rotate-180' : ''}`}>→</span>
              <span className="text-card-foreground">{currentProgram.name}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Area - Ready for expansion */}
      <section className="py-20">
        <div className="container mx-auto px-4 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-700/40 backdrop-blur-sm rounded-2xl">
          <div className="max-w-4xl mx-auto">
            
            {/* Program Overview */}
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border">
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                {isRTL ? 'نبذة عن البرنامج' : 'About the Program'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentProgram.about}
              </p>
            </div>

            {/* Core Courses */}
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border">
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
            <div className="bg-surface rounded-2xl p-8 mb-12 border border-border">
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

            {/* Placeholder for Additional Content */}
            <div className="bg-surface rounded-2xl p-8 border border-border border-dashed">
              <div className="text-center">
                <h3 className="text-xl font-display font-bold text-card-foreground mb-4">
                  {isRTL ? 'المحتوى الإضافي' : 'Additional Content'}
                </h3>
                <p className="text-muted-foreground">
                  {isRTL 
                    ? 'يمكن إضافة المزيد من المحتوى هنا مثل الفيديوهات والصور والوصف المفصل' 
                    : 'Additional content like videos, images, and detailed descriptions can be added here'
                  }
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;