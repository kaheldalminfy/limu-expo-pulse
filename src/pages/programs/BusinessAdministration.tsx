import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const BusinessAdministration = () => {
  const program = {
    ar: {
      name: "إدارة الأعمال",
      pitch: "ريادة الأعمال في العصر الرقمي",
      about: "تأهيل قادة أعمال المستقبل بالمهارات الإدارية والتقنية المتطورة في البيئة الليبية والإقليمية",
      core_courses: ["إدارة استراتيجية", "ريادة الأعمال", "التحليل المالي", "إدارة الموارد البشرية", "التسويق الرقمي", "إدارة العمليات"],
      careers: ["مدير عام", "رائد أعمال", "مستشار إداري", "محلل أعمال"]
    },
    en: {
      name: "Business Administration",
      pitch: "Entrepreneurship in the digital age",
      about: "Prepare future business leaders with advanced managerial and technical skills in the Libyan and regional environment",
      core_courses: ["Strategic Management", "Entrepreneurship", "Financial Analysis", "Human Resource Management", "Digital Marketing", "Operations Management"],
      careers: ["General Manager", "Entrepreneur", "Management Consultant", "Business Analyst"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/business-administration.jpg"
    />
  );
};

export default BusinessAdministration;