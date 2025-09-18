import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const Marketing = () => {
  const program = {
    ar: {
      name: "التسويق",
      pitch: "إبداع التسويق الرقمي والتقليدي",
      about: "تكوين مسوقين محترفين في عالم التجارة الإلكترونية والتسويق المتكامل في السوق الليبي والإقليمي",
      core_courses: ["التسويق الرقمي", "سلوك المستهلك", "إدارة العلامة التجارية", "تحليل السوق", "التسويق عبر وسائل التواصل", "التسويق الدولي"],
      careers: ["مدير تسويق", "متخصص تسويق رقمي", "محلل سوق", "مدير علامة تجارية"]
    },
    en: {
      name: "Marketing Program",
      pitch: "Digital and traditional marketing creativity",
      about: "Train professional marketers in e-commerce and integrated marketing in the Libyan and regional market",
      core_courses: ["Digital Marketing", "Consumer Behavior", "Brand Management", "Market Analysis", "Social Media Marketing", "International Marketing"],
      careers: ["Marketing Manager", "Digital Marketing Specialist", "Market Analyst", "Brand Manager"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/marketing.jpg"
    />
  );
};

export default Marketing;