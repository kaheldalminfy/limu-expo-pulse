import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Home } from 'lucide-react';

const Law = () => {
  const { language, t, isRTL } = useLanguage();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const program = {
    ar: {
      name: "القانون",
      pitch: "خبراء القانون والعدالة",
      about: "تأهيل قانونيين متميزين في النظم القانونية المحلية والدولية مع التركيز على القانون الليبي والشريعة الإسلامية",
      core_courses: ["القانون المدني", "القانون التجاري", "القانون الدولي", "القانون الجنائي", "قانون العمل", "أصول المحاكمات"],
      careers: ["محامي", "مستشار قانوني", "قاضي", "محكم قانوني"]
    },
    en: {
      name: "Law Program",
      pitch: "Law and justice experts",
      about: "Qualify distinguished lawyers in local and international legal systems with focus on Libyan law and Islamic jurisprudence",
      core_courses: ["Civil Law", "Commercial Law", "International Law", "Criminal Law", "Labor Law", "Legal Procedures"],
      careers: ["Lawyer", "Legal Consultant", "Judge", "Legal Arbitrator"]
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

            {/* Video Album Section */}
            <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/20 rounded-3xl p-8 mb-8 border border-blue-200/50 dark:border-blue-800/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground">
                  {isRTL ? 'ألبوم الفيديوهات' : 'Video Gallery'}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="مقدمة عن برنامج القانون"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-card-foreground mb-3 text-lg">
                      {isRTL ? 'مقدمة عن برنامج القانون' : 'Introduction to Law Program'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isRTL ? 'تعرف على منهجية برنامج القانون وكيف يؤهل الطلاب ليكونوا خبراء في العدالة.' : 'Learn about the Law program methodology and how it prepares students to be experts in justice.'}
                    </p>
                  </div>
                </div>
                <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="تجربة طلاب القانون"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-card-foreground mb-3 text-lg">
                      {isRTL ? 'تجربة طلاب القانون' : 'Law Students Experience'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isRTL ? 'استمع لتجارب طلابنا وكيف يطبقون المبادئ القانونية في الحياة العملية.' : 'Listen to our students\' experiences and how they apply legal principles in practical life.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Album Section */}
            <div className="bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/30 dark:to-green-900/20 rounded-3xl p-8 mb-8 border border-green-200/50 dark:border-green-800/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground">
                  {isRTL ? 'ألبوم الصور' : 'Photo Gallery'}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="aspect-square bg-muted rounded-xl overflow-hidden group cursor-pointer">
                  <img src="/images/law.jpg" alt={isRTL ? 'فعاليات برنامج القانون' : 'Law Program Activities'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="aspect-square bg-muted rounded-xl overflow-hidden group cursor-pointer">
                  <img src="/images/classrooms.jpg" alt={isRTL ? 'قاعات الدراسة' : 'Study Halls'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="aspect-square bg-muted rounded-xl overflow-hidden group cursor-pointer">
                  <img src="/images/bg-graduation.jpg" alt={isRTL ? 'حفل التخرج' : 'Graduation Ceremony'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/30 dark:to-purple-900/20 rounded-3xl p-8 mb-8 border border-purple-200/50 dark:border-purple-800/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H4.5a1.5 1.5 0 010-3H11V7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground">
                  {isRTL ? 'آخر الأخبار' : 'Latest News'}
                </h3>
              </div>
              <div className="space-y-6">
                <article className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    <time dateTime="2024-01-26">26 يناير 2024</time>
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-3">
                    {isRTL ? 'ندوة القانون التجاري الليبي' : 'Libyan Commercial Law Seminar'}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {isRTL ? 'نظم قسم القانون ندوة متخصصة حول تطوير القانون التجاري الليبي بمشاركة خبراء قانونيين محليين ودوليين.' : 'The Law department organized a specialized seminar on developing Libyan commercial law with participation of local and international legal experts.'}
                  </p>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Law;