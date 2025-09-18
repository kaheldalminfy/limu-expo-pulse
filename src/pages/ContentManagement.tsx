import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoUploadForm } from '@/components/forms/VideoUploadForm';
import { ImageUploadForm } from '@/components/forms/ImageUploadForm';
import { NewsForm } from '@/components/forms/NewsForm';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/useLanguage';

interface Program {
  id: string;
  name: string;
  slug: string;
}

const ContentManagement = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const { data, error } = await supabase
        .from('law_t_programs')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setPrograms(data || []);
    } catch (error) {
      console.error('Error loading programs:', error);
    }
  };

  const content = {
    en: {
      title: "Content Management",
      description: "Upload videos, images and manage news for program pages",
      videos: "Videos",
      images: "Images", 
      news: "News",
      videosDesc: "Upload and manage videos for program galleries",
      imagesDesc: "Upload and manage images for program galleries",
      newsDesc: "Create and manage news articles for programs"
    },
    ar: {
      title: "إدارة المحتوى",
      description: "رفع الفيديوهات والصور وإدارة الأخبار لصفحات البرامج",
      videos: "الفيديوهات",
      images: "الصور",
      news: "الأخبار", 
      videosDesc: "رفع وإدارة الفيديوهات لألبومات البرامج",
      imagesDesc: "رفع وإدارة الصور لألبومات البرامج",
      newsDesc: "إنشاء وإدارة المقالات الإخبارية للبرامج"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            العودة للرئيسية
          </Button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {currentContent.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">{currentContent.title}</CardTitle>
            <CardDescription className="text-center">
              {currentContent.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="videos" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="videos">{currentContent.videos}</TabsTrigger>
                <TabsTrigger value="images">{currentContent.images}</TabsTrigger>
                <TabsTrigger value="news">{currentContent.news}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="videos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{currentContent.videos}</CardTitle>
                    <CardDescription>{currentContent.videosDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VideoUploadForm programs={programs} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="images" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{currentContent.images}</CardTitle>
                    <CardDescription>{currentContent.imagesDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ImageUploadForm programs={programs} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{currentContent.news}</CardTitle>
                    <CardDescription>{currentContent.newsDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NewsForm programs={programs} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentManagement;