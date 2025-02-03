import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const roadmapItems = [
  {
    quarter: 'Q1 2024',
    title: 'Foundation',
    items: [
      { text: 'Launch Beta Platform', completed: true },
      { text: 'Multi-chain Integration', completed: true },
      { text: 'Basic AI Analytics', completed: true }
    ]
  },
  {
    quarter: 'Q2 2024',
    title: 'Enhancement',
    items: [
      { text: 'Advanced Trading Algorithms', completed: false },
      { text: 'Mobile App Release', completed: false },
      { text: 'Community Features', completed: false }
    ]
  },
  {
    quarter: 'Q3 2024',
    title: 'Expansion',
    items: [
      { text: 'Institutional Tools', completed: false },
      { text: 'Cross-chain Analytics', completed: false },
      { text: 'API Access', completed: false }
    ]
  },
  {
    quarter: 'Q4 2024',
    title: 'Innovation',
    items: [
      { text: 'Custom AI Models', completed: false },
      { text: 'DeFi Integration', completed: false },
      { text: 'Global Expansion', completed: false }
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-galaxy-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-galaxy-accent to-galaxy-accent-hover">
            Roadmap
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((phase, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 border border-galaxy-accent/20 hover:border-galaxy-accent/40 transition-all"
            >
              <div className="mb-4">
                <span className="text-galaxy-accent font-semibold">{phase.quarter}</span>
                <h3 className="text-xl font-bold mt-2">{phase.title}</h3>
              </div>
              <ul className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5 text-galaxy-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-galaxy-text-secondary flex-shrink-0 mt-0.5" />
                    )}
                    <span className={item.completed ? 'text-galaxy-text-primary' : 'text-galaxy-text-secondary'}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;