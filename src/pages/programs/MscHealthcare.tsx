import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const MscHealthcare = () => {
  const program = {
    ar: {
      name: "ماجستير إدارة الرعاية الصحية",
      pitch: "برنامج دراسات عليا متقدم في إدارة الأنظمة الصحية",
      about: "برنامج ماجستير متقدم يؤهل القادة في إدارة الأنظمة الصحية المعقدة والسياسات الصحية على المستوى الوطني والإقليمي",
      core_courses: ["إدارة الأنظمة الصحية المتقدمة", "القيادة في الصحة", "السياسات الصحية", "اقتصاديات الصحة المتقدمة", "بحوث العمليات الصحية", "إدارة التغيير في المؤسسات الصحية"],
      careers: ["مدير نظام صحي", "مستشار سياسات صحية", "باحث في إدارة الصحة", "مدير تنفيذي للمؤسسات الصحية"]
    },
    en: {
      name: "Master in Healthcare Management",
      pitch: "Advanced graduate program in healthcare systems management",
      about: "An advanced master's program that prepares leaders in managing complex healthcare systems and health policies at national and regional levels",
      core_courses: ["Advanced Healthcare Systems Management", "Healthcare Leadership", "Health Policy", "Advanced Health Economics", "Health Operations Research", "Change Management in Healthcare Organizations"],
      careers: ["Healthcare System Director", "Health Policy Consultant", "Healthcare Management Researcher", "Healthcare Executive Director"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/msc-healthcare.jpg"
    />
  );
};

export default MscHealthcare;