import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const ProjectManagement = () => {
  const program = {
    ar: {
      name: "إدارة المشاريع",
      pitch: "قيادة المشاريع الكبرى بنجاح",
      about: "إعداد مديري مشاريع معتمدين دولياً بأحدث المنهجيات مع التركيز على مشاريع التطوير في ليبيا",
      core_courses: ["تخطيط المشاريع", "إدارة المخاطر", "إدارة الجودة", "إدارة الفرق", "منهجيات أجايل", "تحليل التكلفة والعائد"],
      careers: ["مدير مشاريع", "مستشار إدارة مشاريع", "محلل مشاريع", "منسق برامج"]
    },
    en: {
      name: "Project Management Program",
      pitch: "Successfully lead major projects",
      about: "Prepare internationally certified project managers with the latest methodologies with focus on development projects in Libya",
      core_courses: ["Project Planning", "Risk Management", "Quality Management", "Team Management", "Agile Methodologies", "Cost-Benefit Analysis"],
      careers: ["Project Manager", "Project Management Consultant", "Project Analyst", "Program Coordinator"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/project-management.jpg"
    />
  );
};

export default ProjectManagement;