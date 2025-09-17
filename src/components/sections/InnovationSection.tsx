import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Archive, Headset, Bot, Play, ExternalLink } from 'lucide-react';

const innovations = [
  {
    id: 'smart-archive',
    icon: Archive,
    cta_type: 'video'
  },
  {
    id: 'vr-court',
    icon: Headset,
    cta_type: 'link'
  },
  {
    id: 'ai-assistant',
    icon: Bot,
    cta_type: 'demo'
  }
];

export const InnovationSection: React.FC = () => {
  const { content, t, isRTL } = useLanguage();
  
  const innovationData = content.innovation?.items || [];

  const handleCTA = (innovation: typeof innovations[0], index: number) => {
    switch (innovation.cta_type) {
      case 'video':
        // Open video modal/lightbox
        console.log('Opening video for', innovation.id);
        break;
      case 'link':
        // Navigate to detailed page
        console.log('Opening link for', innovation.id);
        break;
      case 'demo':
        // Launch demo
        console.log('Starting demo for', innovation.id);
        break;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Headset className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              {isRTL ? 'تقنيات متطورة' : 'Advanced Technology'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('innovation.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('innovation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            const data = innovationData[index];
            
            return (
              <div
                key={innovation.id}
                className="innovation-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-2">
                      {data?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {data?.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {data?.features?.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTA(innovation, index)}
                  className="btn-accent w-full group"
                >
                  <span>{data?.cta}</span>
                  {innovation.cta_type === 'video' && (
                    <Play className={`w-4 h-4 ml-2 group-hover:scale-110 transition-transform ${isRTL ? 'ml-0 mr-2' : ''}`} />
                  )}
                  {innovation.cta_type === 'link' && (
                    <ExternalLink className={`w-4 h-4 ml-2 group-hover:scale-110 transition-transform ${isRTL ? 'ml-0 mr-2' : ''}`} />
                  )}
                  {innovation.cta_type === 'demo' && (
                    <Bot className={`w-4 h-4 ml-2 group-hover:scale-110 transition-transform ${isRTL ? 'ml-0 mr-2' : ''}`} />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>{isRTL ? 'وأكثر من ذلك بكثير في انتظاركم' : 'And much more awaiting you'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};