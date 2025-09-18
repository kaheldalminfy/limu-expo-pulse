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

interface VideoUploadFormProps {
  programs: Program[];
}

export const VideoUploadForm: React.FC<VideoUploadFormProps> = ({ programs }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video_url: '',
    thumbnail_url: '',
    program_id: ''
  });
  const { toast } = useToast();
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Video Title",
      description: "Video Description",
      videoUrl: "Video URL",
      thumbnailUrl: "Thumbnail URL (optional)",
      program: "Select Program",
      submit: "Upload Video",
      success: "Video uploaded successfully!",
      error: "Error uploading video"
    },
    ar: {
      title: "عنوان الفيديو",
      description: "وصف الفيديو",
      videoUrl: "رابط الفيديو",
      thumbnailUrl: "رابط الصورة المصغرة (اختياري)",
      program: "اختر البرنامج",
      submit: "رفع الفيديو",
      success: "تم رفع الفيديو بنجاح!",
      error: "خطأ في رفع الفيديو"
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { error } = await supabase
        .from('law_t_videos')
        .insert([
          {
            ...formData,
            created_by: user.id
          }
        ]);

      if (error) throw error;

      toast({
        title: currentContent.success,
      });

      setFormData({
        title: '',
        description: '',
        video_url: '',
        thumbnail_url: '',
        program_id: ''
      });
    } catch (error) {
      console.error('Error uploading video:', error);
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
            <Label htmlFor="description">{currentContent.description}</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="video_url">{currentContent.videoUrl}</Label>
            <Input
              id="video_url"
              type="url"
              value={formData.video_url}
              onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
          </div>

          <div>
            <Label htmlFor="thumbnail_url">{currentContent.thumbnailUrl}</Label>
            <Input
              id="thumbnail_url"
              type="url"
              value={formData.thumbnail_url}
              onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
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