import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import programs from '@/data/programs.json';
import { Download, CheckCircle, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  program: string;
}

export const LeadFormSection: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    program: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, this would send to your API
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      toast({
        title: isRTL ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!',
        description: t('lead_form.success'),
      });

      // Trigger download of consolidated brochure
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/brochures/limu-consolidated-brochure.pdf';
        link.download = 'LIMU-Programs-Brochure.pdf';
        link.click();
      }, 1000);
      
    } catch (error) {
      toast({
        title: isRTL ? 'خطأ' : 'Error',
        description: isRTL ? 'حدث خطأ أثناء الإرسال' : 'An error occurred while submitting',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12 animate-scale-in">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-display font-bold mb-4">
                {isRTL ? 'شكراً لاهتمامك!' : 'Thank you for your interest!'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('lead_form.success')}
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-accent">
                <Download className="w-4 h-4" />
                <span>{isRTL ? 'يتم تحميل البروشور...' : 'Downloading brochure...'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">
                {isRTL ? 'احصل على معلومات مفصلة' : 'Get Detailed Information'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t('lead_form.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('lead_form.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                {t('lead_form.name_placeholder')} *
              </label>
              <div className="relative">
                <User className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full bg-surface border border-border rounded-lg py-3 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder={t('lead_form.name_placeholder')}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                {t('lead_form.email_placeholder')} *
              </label>
              <div className="relative">
                <Mail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-surface border border-border rounded-lg py-3 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                  placeholder={t('lead_form.email_placeholder')}
                  required
                />
              </div>
            </div>

            {/* Program Selection */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="program">
                {t('lead_form.program_placeholder')}
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="w-full bg-surface border border-border rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">{t('lead_form.program_placeholder')}</option>
                {programs.map((program) => (
                  <option key={program.slug} value={program.slug}>
                    {program[language].name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-hero w-full group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{isRTL ? 'جاري الإرسال...' : 'Submitting...'}</span>
                </>
              ) : (
                <>
                  <span>{t('lead_form.submit')}</span>
                  <Download className={`w-5 h-5 ml-2 group-hover:scale-110 transition-transform ${isRTL ? 'ml-0 mr-2' : ''}`} />
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              {isRTL 
                ? 'بإرسال هذا النموذج، أنت توافق على استخدام معلوماتك لإرسال المواد التعليمية ذات الصلة.'
                : 'By submitting this form, you agree to the use of your information for sending relevant educational materials.'
              }
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};