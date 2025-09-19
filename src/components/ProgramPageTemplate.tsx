import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight, ArrowLeft, Home, Calendar, Video, FileText, Users } from 'lucide-react';

interface ProgramData {
  ar: {
    name: string;
    pitch: string;
    about: string;
    core_courses: string[];
    careers: string[];
  };
  en: {
    name: string;
    pitch: string;
    about: string;
    core_courses: string[];
    careers: string[];
  };
}

interface ProgramPageTemplateProps {
  program: ProgramData;
  programImage: string;
  newsItems?: {
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
  }[];
  videos?: {
    title: string;
    description: string;
    thumbnail: string;
    date: string;
    category: string;
    videoUrl: string;
  }[];
}

export const ProgramPageTemplate: React.FC<ProgramPageTemplateProps> = ({
  program,
  programImage,
  newsItems = [],
  videos = []
}) => {
  const { language, isRTL } = useLanguage();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;
  const currentProgram = program[language];

  const defaultNews = [
    {
      title: isRTL ? 'ندوة متخصصة في البرنامج' : 'Specialized Program Seminar',
      description: isRTL ? 'نظم القسم ندوة متخصصة بمشاركة خبراء محليين ودوليين لتطوير مهارات الطلاب.' : 'The department organized a specialized seminar with local and international experts to develop student skills.',
      image: programImage,
      date: isRTL ? '1 يناير 2025' : 'January 1, 2025',
      category: isRTL ? 'ندوات' : 'Seminars'
    }
  ];

  const defaultVideos = [
    {
      title: isRTL ? `مقدمة عن برنامج ${currentProgram.name}` : `Introduction to ${currentProgram.name}`,
      description: isRTL ? 'تعرف على منهجية البرنامج وكيف يؤهل الطلاب للمستقبل المهني.' : 'Learn about the program methodology and how it prepares students for their professional future.',
      thumbnail: programImage,
      date: isRTL ? '22 يناير 2025' : 'January 22, 2025',
      category: isRTL ? 'ورش عمل' : 'Workshops',
      videoUrl: '#'
    }
  ];

  const displayNews = newsItems.length > 0 ? newsItems : defaultNews;
  const displayVideos = videos.length > 0 ? videos : defaultVideos;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Clean White Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <BackIcon className="w-5 h-5" />
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-gray-800 font-medium">
                  {isRTL ? 'كلية العلوم الإنسانية والاجتماعية' : 'Faculty of Humanities & Social Sciences'}
                </div>
                <div className="text-gray-600 text-sm">
                  {isRTL ? 'الجامعة الليبية الدولية' : 'Libyan International Medical University'}
                </div>
              </div>
              <img 
                src="/images/limu-logo-full.png" 
                alt="LIMU Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Template Style */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-6">
              {currentProgram.name}
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentProgram.pitch}
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview - Template Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
                  {isRTL ? 'نبذة عن البرنامج' : 'About the Program'}
                </h2>
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {currentProgram.about}
                </p>

                {/* Career Opportunities */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {isRTL ? 'الفرص المهنية' : 'Career Opportunities'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProgram.careers.map((career, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={programImage} 
                  alt={currentProgram.name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Core Courses */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 text-center">
                {isRTL ? 'المقررات المحورية' : 'Core Courses'}
              </h3>
              <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentProgram.core_courses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - Template Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
                {isRTL ? 'آخر الأخبار' : 'Latest News'}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {isRTL 
                  ? 'تابع آخر أخبار وفعاليات البرنامج'
                  : 'Follow the latest news and events of the program'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayNews.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {news.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {news.description}
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {isRTL ? 'اقرأ المزيد' : 'Read More'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Videos Section - Template Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                {isRTL ? 'فيديوهاتنا' : 'Our Videos'}
                <Video className="w-8 h-8 text-primary" />
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {isRTL 
                  ? 'استكشف ورش العمل والندوات التعليمية الخاصة بالبرنامج'
                  : 'Explore our educational workshops and seminars related to the program'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {displayVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                        <Video className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {video.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      {isRTL ? 'شاهد الفيديو' : 'Watch Video'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Watch All Videos Button */}
            <div className="text-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg font-semibold">
                {isRTL ? 'شاهد جميع الفيديوهات على يوتيوب' : 'Watch All Videos on YouTube'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};