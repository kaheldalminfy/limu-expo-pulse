import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Home } from 'lucide-react';

const HealthcareManagement = () => {
  const { language, t, isRTL } = useLanguage();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const program = {
    ar: {
      name: "إدارة الرعاية الصحية",
      pitch: "قيادة منظومات الصحة بكفاءة وابتكار",
      about: "برنامج يؤهل الطلبة لإدارة المستشفيات والمنشآت الصحية بأحدث المعايير العالمية مع التركيز على النظام الصحي الليبي",
      core_courses: ["سياسات صحية", "إدارة خدمات طبية", "اقتصاديات صحية", "تحليل بيانات صحية", "إدارة الجودة الصحية", "أخلاقيات الرعاية الصحية"],
      careers: ["مدير منشأة صحية", "محلل سياسات صحية", "منسق جودة طبية", "مستشار إداري صحي"]
    },
    en: {
      name: "Healthcare Management Program",
      pitch: "Lead healthcare systems with efficiency and innovation",
      about: "Prepares students to manage hospitals and healthcare facilities with the latest global standards with focus on the Libyan healthcare system",
      core_courses: ["Health Policy", "Medical Service Management", "Health Economics", "Health Data Analytics", "Healthcare Quality Management", "Healthcare Ethics"],
      careers: ["Healthcare Facility Manager", "Health Policy Analyst", "Medical Quality Coordinator", "Healthcare Administrative Consultant"]
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
      <section className="py-20 relative"
               style={{
                 backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 197, 253, 0.6) 50%, rgba(219, 234, 254, 0.4) 100%), url('/images/hero-blue-bg.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
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
      <section className="py-20 relative"
               style={{
                 backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 197, 253, 0.7) 50%, rgba(219, 234, 254, 0.5) 100%), url('/images/blue-section-bg.png')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
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
                {/* Video 1 */}
                <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.youtube.com/embed/ADB8E2TMi9o"
                      title="تجربة الطالب عبد الرحمن العربي"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-card-foreground mb-3 text-lg">
                      تجربة الطالب عبد الرحمن العربي
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      يشارك طالبنا عبد الرحمن العربي رؤى من رحلتهم في برنامج إدارة الرعاية الصحية في الجامعة الطبية الليبية الدولية.
                    </p>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.youtube.com/embed/pJiOjikohy8"
                      title="تجربة الطالبة Zaho"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-card-foreground mb-3 text-lg">
                      تجربة الطالبة Zaho
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      تؤكد طالبتنا Zaho على بيئة التعلم الداعمة وفرصة التفاعل مع أعضاء هيئة التدريس ذوي الخبرة.
                    </p>
                  </div>
                </div>

                {/* Instructor Video - Full Width */}
                <div className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 aspect-video lg:aspect-auto">
                      <iframe 
                        src="https://www.youtube.com/embed/tbGCTDEJuEw"
                        title="د. ابتسام ماضي"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                          مديرة البرنامج
                        </span>
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-3 text-xl">
                        د. ابتسام ماضي
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        تتحدث الدكتورة ابتسام ماضي، مديرة برنامج إدارة الرعاية الصحية، عن رؤية وأهداف البرنامج والمنهجية التعليمية المتطورة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareManagement;