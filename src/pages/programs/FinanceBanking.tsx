import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const FinanceBanking = () => {
  const program = {
    ar: {
      name: "التمويل والمصارف",
      pitch: "خبراء التمويل والاستثمار",
      about: "إعداد متخصصين في النظم المصرفية والأسواق المالية العالمية مع التركيز على القطاع المصرفي الليبي",
      core_courses: ["النظم المصرفية", "إدارة المخاطر", "الاستثمار والتمويل", "الأسواق المالية", "التمويل الإسلامي", "التحليل الائتماني"],
      careers: ["مصرفي استثماري", "محلل مالي", "مدير مخاطر", "مستشار مالي"]
    },
    en: {
      name: "Finance and Banking Program",
      pitch: "Finance and investment experts",
      about: "Prepare specialists in banking systems and global financial markets with focus on the Libyan banking sector",
      core_courses: ["Banking Systems", "Risk Management", "Investment & Finance", "Financial Markets", "Islamic Finance", "Credit Analysis"],
      careers: ["Investment Banker", "Financial Analyst", "Risk Manager", "Financial Advisor"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/finance-banking.jpg"
    />
  );
};

export default FinanceBanking;