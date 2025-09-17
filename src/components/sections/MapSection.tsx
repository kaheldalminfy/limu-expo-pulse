import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { BookOpen, Users, Laptop, Trophy, X } from 'lucide-react';

const locations = [
  {
    id: 'classrooms',
    icon: BookOpen,
    position: { top: '30%', left: '25%' },
    image: '/images/classrooms.jpg'
  },
  {
    id: 'library',
    icon: BookOpen,
    position: { top: '45%', left: '60%' },
    image: '/images/library.jpg'
  },
  {
    id: 'labs',
    icon: Laptop,
    position: { top: '65%', left: '40%' },
    image: '/images/labs.jpg'
  },
  {
    id: 'clubs',
    icon: Users,
    position: { top: '25%', left: '70%' },
    image: '/images/clubs.jpg'
  }
];

interface LocationModalProps {
  location: typeof locations[0] | null;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  const { t, isRTL } = useLanguage();
  
  if (!location) return null;

  const locationData = t(`map.locations.${location.id}.name`);
  const IconComponent = location.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-surface border border-border rounded-2xl overflow-hidden max-w-md w-full animate-scale-in">
        <div className="relative h-48 bg-muted">
          <img 
            src={location.image} 
            alt={t(`map.locations.${location.id}.name`)}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%236b7280"%3EImage%3C/text%3E%3C/svg%3E';
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-surface transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-display font-semibold">
              {t(`map.locations.${location.id}.name`)}
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {t(`map.locations.${location.id}.description`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MapSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  return (
    <>
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t('map.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('map.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-surface border border-border rounded-2xl p-8 md:p-12 h-96 md:h-[500px] overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  {/* Building outline */}
                  <rect x="100" y="150" width="200" height="120" fill="currentColor" rx="8" />
                  <rect x="350" y="100" width="180" height="160" fill="currentColor" rx="8" />
                  <rect x="580" y="180" width="150" height="100" fill="currentColor" rx="8" />
                  <rect x="200" y="320" width="220" height="140" fill="currentColor" rx="8" />
                  
                  {/* Pathways */}
                  <path d="M300 210 L350 180 L530 240 L580 240" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M200 300 L300 270 L580 280" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>

              {/* Interactive Hotspots */}
              {locations.map((location) => {
                const IconComponent = location.icon;
                return (
                  <button
                    key={location.id}
                    className="map-hotspot"
                    style={location.position}
                    onClick={() => setSelectedLocation(location)}
                    aria-label={t(`map.locations.${location.id}.name`)}
                  >
                    <IconComponent className="w-3 h-3 text-white absolute inset-0 m-auto" />
                  </button>
                );
              })}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4">
                <div className="text-sm font-medium mb-2 text-foreground">
                  {t('map.title')}
                </div>
                <div className="space-y-2">
                  {locations.map((location) => {
                    const IconComponent = location.icon;
                    return (
                      <div key={location.id} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0" />
                        {t(`map.locations.${location.id}.name`)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationModal 
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </>
  );
};