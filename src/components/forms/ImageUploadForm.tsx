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

interface ImageUploadFormProps {
  programs: Program[];
}

export const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ programs }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    program_id: ''
  });
  const { toast } = useToast();
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Image Title",
      description: "Image Description",
      imageUrl: "Image URL",
      program: "Select Program",
      submit: "Upload Image",
      success: "Image uploaded successfully!",
      error: "Error uploading image"
    },
    ar: {
      title: "عنوان الصورة",
      description: "وصف الصورة",
      imageUrl: "رابط الصورة",
      program: "اختر البرنامج",
      submit: "رفع الصورة",
      success: "تم رفع الصورة بنجاح!",
      error: "خطأ في رفع الصورة"
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('law_t_images')
        .insert([
          {
            ...formData,
            created_by: '00000000-0000-0000-0000-000000000000'
          }
        ]);

      if (error) throw error;

      toast({
        title: currentContent.success,
      });

      setFormData({
        title: '',
        description: '',
        image_url: '',
        program_id: ''
      });
    } catch (error) {
      console.error('Error uploading image:', error);
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
            <Label htmlFor="image_url">{currentContent.imageUrl}</Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://..."
              required
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