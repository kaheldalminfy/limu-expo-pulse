import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Download, Briefcase, BookOpen } from 'lucide-react';
import programs from '@/data/programs.json';

const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, t, isRTL } = useLanguage();
  
  const program = programs.find(p => p.slug === slug);
  
  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const handleDownload = () => {
    // Handle PDF download
    const link = document.createElement('a');
    link.href = program.pdf;
    link.download = `${program.ar.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <header className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              {t('common.home')}
            </Link>
            <span>/</span>
            <Link to="/programs" className="hover:text-foreground transition-colors">
              {t('programs.title')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{program.ar.name}</span>
          </nav>
          
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-3">
                {program.ar.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {program.ar.pitch}
              </p>
              <Button onClick={handleDownload} className="gap-2">
                <Download className="w-4 h-4" />
                {t('programs.download_brochure')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="font-display font-bold text-2xl text-foreground tracking-tight mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary-foreground" />
                </div>
                {t('programs.about_program')}
              </h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-foreground text-lg leading-relaxed">
                    {program.ar.about}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Core Courses */}
            <section>
              <h2 className="font-display font-bold text-2xl text-foreground tracking-tight mb-6">
                {t('programs.core_courses')}
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.ar.core_courses.map((course, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Career Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  {t('programs.career_opportunities')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {program.ar.careers.map((career, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <span className="text-foreground font-medium">{career}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('programs.quick_actions')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleDownload} variant="outline" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  {t('programs.download_brochure')}
                </Button>
                <Link to="/programs">
                  <Button variant="ghost" className="w-full gap-2">
                    {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                    {t('programs.back_to_programs')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgramDetail;