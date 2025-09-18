-- Create programs table
CREATE TABLE public.law_t_programs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create videos table
CREATE TABLE public.law_t_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID NOT NULL REFERENCES law_t_programs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create images table
CREATE TABLE public.law_t_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID NOT NULL REFERENCES law_t_programs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create news table
CREATE TABLE public.law_t_news (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID NOT NULL REFERENCES law_t_programs(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  created_by UUID NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.law_t_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.law_t_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.law_t_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.law_t_news ENABLE ROW LEVEL SECURITY;

-- RLS policies for programs (readable by all, manageable by authenticated users)
CREATE POLICY "Programs are viewable by everyone" 
ON public.law_t_programs 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage programs" 
ON public.law_t_programs 
FOR ALL 
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- RLS policies for videos
CREATE POLICY "Videos are viewable by everyone" 
ON public.law_t_videos 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create videos" 
ON public.law_t_videos 
FOR INSERT 
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own videos" 
ON public.law_t_videos 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own videos" 
ON public.law_t_videos 
FOR DELETE 
USING (auth.uid() = created_by);

-- RLS policies for images
CREATE POLICY "Images are viewable by everyone" 
ON public.law_t_images 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create images" 
ON public.law_t_images 
FOR INSERT 
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own images" 
ON public.law_t_images 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own images" 
ON public.law_t_images 
FOR DELETE 
USING (auth.uid() = created_by);

-- RLS policies for news
CREATE POLICY "News are viewable by everyone" 
ON public.law_t_news 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create news" 
ON public.law_t_news 
FOR INSERT 
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own news" 
ON public.law_t_news 
FOR UPDATE 
USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own news" 
ON public.law_t_news 
FOR DELETE 
USING (auth.uid() = created_by);

-- Add triggers for updated_at columns
CREATE TRIGGER update_law_t_programs_updated_at
BEFORE UPDATE ON public.law_t_programs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_law_t_videos_updated_at
BEFORE UPDATE ON public.law_t_videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_law_t_images_updated_at
BEFORE UPDATE ON public.law_t_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_law_t_news_updated_at
BEFORE UPDATE ON public.law_t_news
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial program data
INSERT INTO public.law_t_programs (name, slug) VALUES 
('Business Administration', 'business-administration'),
('Finance & Banking', 'finance-banking'),
('Marketing', 'marketing'),
('Project Management', 'project-management'),
('English Global Communication', 'english-global-communication'),
('MSc Healthcare', 'msc-healthcare'),
('Law', 'law'),
('Healthcare Management', 'healthcare-management');