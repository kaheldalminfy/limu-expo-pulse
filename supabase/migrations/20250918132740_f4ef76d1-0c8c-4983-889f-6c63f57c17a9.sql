-- Update RLS policies to allow anonymous uploads for videos and images

-- Drop existing policies for law_t_videos
DROP POLICY IF EXISTS "Authenticated users can create videos" ON public.law_t_videos;

-- Create new policy allowing anyone to create videos
CREATE POLICY "Anyone can create videos" 
ON public.law_t_videos
FOR INSERT
WITH CHECK (true);

-- Drop existing policies for law_t_images  
DROP POLICY IF EXISTS "Authenticated users can create images" ON public.law_t_images;

-- Create new policy allowing anyone to create images
CREATE POLICY "Anyone can create images"
ON public.law_t_images  
FOR INSERT
WITH CHECK (true);