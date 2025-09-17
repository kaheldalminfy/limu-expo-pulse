import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import programs from '@/data/programs.json';

export const ProgramsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-tight">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('programs.subtitle')}
          </p>
          <Link to="/programs">
            <Button size="lg" className="gap-2">
              {t('programs.view_all')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.slice(0, 6).map((program) => (
            <Card 
              key={program.slug} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden bg-surface"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-md" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2 tracking-tight">
                  {program.ar.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {program.ar.pitch}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {program.ar.core_courses.slice(0, 3).map((course, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
                <Link to={`/program/${program.slug}`}>
                  <Button variant="outline" className="w-full text-sm">
                    تفاصيل البرنامج
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};