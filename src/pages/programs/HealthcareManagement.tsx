import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const HealthcareManagement = () => {
  const program = {
    ar: {
      name: "إدارة الرعاية الصحية",
      pitch: "قيادة منظومات الصحة بكفاءة وابتكار",
      about: "برنامج يؤهل الطلبة لإدارة المستشفيات والمنشآت الصحية بأحدث المعايير العالمية مع التركيز على النظام الصحي الليبي",
      core_courses: ["سياسات صحية", "إدارة خدمات طبية", "اقتصاديات صحية", "تحليل بيانات صحية", "إدارة الجودة الصحية", "أخلاقيات الرعاية الصحية"],
      careers: ["مدير منشأة صحية", "محلل سياسات صحية", "منسق جودة طبية", "مستشار إداري صحي"]
    },
    en: {
      name: "Healthcare Management Program",
      pitch: "Lead healthcare systems with efficiency and innovation",
      about: "Prepares students to manage hospitals and healthcare facilities with the latest global standards with focus on the Libyan healthcare system",
      core_courses: ["Health Policy", "Medical Service Management", "Health Economics", "Health Data Analytics", "Healthcare Quality Management", "Healthcare Ethics"],
      careers: ["Healthcare Facility Manager", "Health Policy Analyst", "Medical Quality Coordinator", "Healthcare Administrative Consultant"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/healthcare-management.jpg"
    />
  );
};

export default HealthcareManagement;