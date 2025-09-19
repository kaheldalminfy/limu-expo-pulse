import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';
import programsData from '@/data/programs.json';

const HealthcareManagement = () => {
  // Find healthcare management program from the data
  const programInfo = programsData.find(p => p.slug === 'healthcare-management');
  
  const program = {
    ar: {
      name: programInfo?.ar.name || "إدارة الرعاية الصحية",
      pitch: programInfo?.ar.pitch || "قيادة منظومات الصحة بكفاءة وابتكار",
      about: programInfo?.ar.about || "برنامج يؤهل الطلبة لإدارة المستشفيات والمنشآت الصحية بأحدث المعايير العالمية مع التركيز على النظام الصحي الليبي",
      core_courses: programInfo?.ar.core_courses || ["سياسات صحية", "إدارة خدمات طبية", "اقتصاديات صحية", "تحليل بيانات صحية", "إدارة الجودة الصحية", "أخلاقيات الرعاية الصحية"],
      careers: programInfo?.ar.careers || ["مدير منشأة صحية", "محلل سياسات صحية", "منسق جودة طبية", "مستشار إداري صحي"]
    },
    en: {
      name: programInfo?.en.name || "Healthcare Management Program",
      pitch: programInfo?.en.pitch || "Lead healthcare systems with efficiency and innovation",
      about: programInfo?.en.about || "Prepares students to manage hospitals and healthcare facilities with the latest global standards with focus on the Libyan healthcare system",
      core_courses: programInfo?.en.core_courses || ["Health Policy", "Medical Service Management", "Health Economics", "Health Data Analytics", "Healthcare Quality Management", "Healthcare Ethics"],
      careers: programInfo?.en.careers || ["Healthcare Facility Manager", "Health Policy Analyst", "Medical Quality Coordinator", "Healthcare Administrative Consultant"]
    }
  };

  // Prepare videos data
  const videos = programInfo?.videos?.map(video => ({
    title: video.title,
    description: video.description,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    date: '22 يناير 2025',
    category: video.isInstructor ? video.instructorRole : 'تجربة الطالب',
    videoUrl: `https://www.youtube.com/watch?v=${video.id}`
  })) || [];

  // Prepare news data
  const newsItems = programInfo?.news?.map(item => ({
    title: item.title,
    description: item.summary,
    image: programInfo.image,
    date: new Date(item.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: item.isNew ? 'جديد' : 'أخبار'
  })) || [];

  return (
    <ProgramPageTemplate 
      program={program}
      programImage={programInfo?.image || "/images/healthcare-management.jpg"}
      videos={videos}
      newsItems={newsItems}
    />
  );
};

export default HealthcareManagement;