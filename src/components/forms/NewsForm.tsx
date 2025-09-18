import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

interface Program {
  id: string;
  name: string;
  slug: string;
}

interface NewsFormProps {
  programs: Program[];
}

export const NewsForm: React.FC<NewsFormProps> = ({ programs }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    image_url: '',
    program_id: ''
  });
  const { toast } = useToast();
  const { language } = useLanguage();

  const content = {
    en: {
      title: "News Title",
      content: "News Content",
      excerpt: "Brief Summary (optional)",
      imageUrl: "News Image URL (optional)",
      program: "Select Program",
      submit: "Publish News",
      success: "News published successfully!",
      error: "Error publishing news"
    },
    ar: {
      title: "عنوان الخبر",
      content: "محتوى الخبر",
      excerpt: "ملخص مختصر (اختياري)",
      imageUrl: "رابط صورة الخبر (اختياري)",
      program: "اختر البرنامج",
      submit: "نشر الخبر",
      success: "تم نشر الخبر بنجاح!",
      error: "خطأ في نشر الخبر"
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get user if authenticated, otherwise use default value
      const { data: { user } } = await supabase.auth.getUser();
      const created_by = user?.id || '00000000-0000-0000-0000-000000000000';

      const { error } = await supabase
        .from('law_t_news')
        .insert([
          {
            ...formData,
            created_by: created_by
          }
        ]);

      if (error) throw error;

      toast({
        title: currentContent.success,
      });

      setFormData({
        title: '',
        content: '',
        excerpt: '',
        image_url: '',
        program_id: ''
      });
    } catch (error) {
      console.error('Error publishing news:', error);
      toast({
        title: currentContent.error,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">{currentContent.title}</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="excerpt">{currentContent.excerpt}</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="content">{currentContent.content}</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={6}
              required
            />
          </div>

          <div>
            <Label htmlFor="image_url">{currentContent.imageUrl}</Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div>
            <Label htmlFor="program">{currentContent.program}</Label>
            <Select value={formData.program_id} onValueChange={(value) => setFormData({ ...formData, program_id: value })}>
              <SelectTrigger>
                <SelectValue placeholder={currentContent.program} />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program.id} value={program.id}>
                    {program.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? '...' : currentContent.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};