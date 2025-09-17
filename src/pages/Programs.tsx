import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import programs from '@/data/programs.json';

const Programs: React.FC = () => {
  const { content, t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              {t('common.back_home')}
            </Link>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            {t('programs.title')}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {t('programs.subtitle')}
          </p>
        </div>
      </header>

      {/* Programs Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.slug} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="aspect-video bg-muted rounded-t-2xl"></div>
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground tracking-tight mb-2">
                  {program.ar.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {program.ar.pitch}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.ar.core_courses.slice(0, 3).map((course, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
                <Link to={`/program/${program.slug}`}>
                  <Button className="w-full">
                    {t('programs.view_details')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Programs;