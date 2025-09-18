import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const EnglishGlobalCommunication = () => {
  const program = {
    ar: {
      name: "الإنجليزية والاتصال العالمي",
      pitch: "جسر التواصل مع العالم",
      about: "إعداد متخصصين في اللغة الإنجليزية والتواصل متعدد الثقافات لربط ليبيا بالعالم",
      core_courses: ["الأدب الإنجليزي", "الترجمة الفورية", "التواصل متعدد الثقافات", "الكتابة الأكاديمية", "تحليل الخطاب", "التواصل الرقمي"],
      careers: ["مترجم", "محرر محتوى", "مسؤول علاقات دولية", "معلم لغة إنجليزية"]
    },
    en: {
      name: "English & Global Communication",
      pitch: "Bridge communication with the world",
      about: "Prepare specialists in English language and multicultural communication to connect Libya with the world",
      core_courses: ["English Literature", "Simultaneous Translation", "Multicultural Communication", "Academic Writing", "Discourse Analysis", "Digital Communication"],
      careers: ["Translator", "Content Editor", "International Relations Officer", "English Language Teacher"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/english-communication.jpg"
    />
  );
};

export default EnglishGlobalCommunication;