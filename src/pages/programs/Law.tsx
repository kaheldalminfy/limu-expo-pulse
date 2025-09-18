import React from 'react';
import { ProgramPageTemplate } from '@/components/ProgramPageTemplate';

const Law = () => {
  const program = {
    ar: {
      name: "القانون",
      pitch: "خبراء القانون والعدالة",
      about: "تأهيل قانونيين متميزين في النظم القانونية المحلية والدولية مع التركيز على القانون الليبي والشريعة الإسلامية",
      core_courses: ["القانون المدني", "القانون التجاري", "القانون الدولي", "القانون الجنائي", "قانون العمل", "أصول المحاكمات"],
      careers: ["محامي", "مستشار قانوني", "قاضي", "محكم قانوني"]
    },
    en: {
      name: "Law Program",
      pitch: "Law and justice experts",
      about: "Qualify distinguished lawyers in local and international legal systems with focus on Libyan law and Islamic jurisprudence",
      core_courses: ["Civil Law", "Commercial Law", "International Law", "Criminal Law", "Labor Law", "Legal Procedures"],
      careers: ["Lawyer", "Legal Consultant", "Judge", "Legal Arbitrator"]
    }
  };

  return (
    <ProgramPageTemplate 
      program={program}
      programImage="/images/law.jpg"
    />
  );
};

export default Law;