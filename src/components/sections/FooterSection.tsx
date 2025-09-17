import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">L</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">LIMU</div>
                <div className="text-sm text-muted-foreground">
                  {isRTL ? 'كلية العلوم الإنسانية والاجتماعية' : 'Faculty of Humanities & Social Sciences'}
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {isRTL 
                ? 'نحن نقدم تعليماً عالي الجودة يهدف إلى إعداد قادة المستقبل في مختلف مجالات العلوم الإنسانية والاجتماعية.'
                : 'We provide high-quality education aimed at preparing future leaders in various fields of humanities and social sciences.'
              }
            </p>

            {/* Social Links */}
            <div>
              <div className="text-sm font-semibold mb-3">{t('footer.social')}</div>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-surface-hover border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-foreground">{t('footer.address')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a 
                  href={`tel:${t('footer.phone')}`}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {t('footer.phone')}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <a 
                  href={`mailto:${t('footer.email')}`}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <div className="space-y-3">
              <a 
                href="#programs" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{isRTL ? 'البرامج الأكاديمية' : 'Academic Programs'}</span>
              </a>
              
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{t('footer.map')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              
              <a 
                href="/privacy" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{t('footer.privacy')}</span>
              </a>
              
              <a 
                href="/terms" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{t('footer.terms')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 LIMU. {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{isRTL ? 'مصمم بـ' : 'Built with'}</span>
              <span className="text-accent">♥</span>
              <span>{isRTL ? 'للتعليم الرقمي' : 'for digital education'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};