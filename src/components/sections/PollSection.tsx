import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import programs from '@/data/programs.json';
import { TrendingUp, Vote } from 'lucide-react';

interface PollData {
  [key: string]: number;
}

export const PollSection: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const [pollData, setPollData] = useState<PollData>({});
  const [hasVoted, setHasVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Initialize poll data
  useEffect(() => {
    const stored = localStorage.getItem('limu-poll-data');
    const votedFlag = localStorage.getItem('limu-poll-voted');
    
    if (stored) {
      setPollData(JSON.parse(stored));
      setShowResults(true);
    } else {
      // Initialize with zero votes
      const initialData: PollData = {};
      programs.forEach(program => {
        initialData[program.slug] = 0;
      });
      setPollData(initialData);
    }
    
    if (votedFlag) {
      setHasVoted(true);
    }
  }, []);

  const vote = (programSlug: string) => {
    if (hasVoted) return;
    
    const newData = {
      ...pollData,
      [programSlug]: (pollData[programSlug] || 0) + 1
    };
    
    setPollData(newData);
    setHasVoted(true);
    setShowResults(true);
    
    // Store in localStorage
    localStorage.setItem('limu-poll-data', JSON.stringify(newData));
    localStorage.setItem('limu-poll-voted', 'true');
    
    // TODO: Send to API in a real implementation
    // fetch('/api/poll', { method: 'POST', body: JSON.stringify({ program: programSlug }) });
  };

  const totalVotes = Object.values(pollData).reduce((sum, votes) => sum + votes, 0);

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  const sortedPrograms = [...programs].sort((a, b) => 
    (pollData[b.slug] || 0) - (pollData[a.slug] || 0)
  );

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <Vote className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">
              {isRTL ? 'استطلاع مباشر' : 'Live Poll'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('poll.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('poll.question')}
          </p>
          
          {totalVotes > 0 && (
            <div className="text-sm text-muted-foreground">
              {isRTL ? `إجمالي الأصوات: ${totalVotes}` : `Total votes: ${totalVotes}`}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            // Voting Interface
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programs.map((program) => {
                const currentProgram = program[language];
                return (
                  <button
                    key={program.slug}
                    onClick={() => vote(program.slug)}
                    disabled={hasVoted}
                    className="program-card text-left hover:scale-105 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <div className="font-display font-semibold mb-2">
                      {currentProgram.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentProgram.pitch}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            // Results Interface
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 mb-8">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">{t('poll.results')}</span>
              </div>
              
              {sortedPrograms.map((program, index) => {
                const currentProgram = program[language];
                const votes = pollData[program.slug] || 0;
                const percentage = getPercentage(votes);
                
                return (
                  <div key={program.slug} className="glass-card p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-accent text-accent-foreground' :
                          index === 1 ? 'bg-primary/20 text-primary' :
                          index === 2 ? 'bg-muted text-muted-foreground' :
                          'bg-surface-hover text-foreground'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-display font-semibold">
                            {currentProgram.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {votes} {isRTL ? 'صوت' : 'votes'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">
                          {percentage}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="poll-bar h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {hasVoted && !showResults && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowResults(true)}
                className="btn-secondary"
              >
                {t('poll.results')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};