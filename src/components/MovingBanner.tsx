import React from 'react';
import {
  Bot,
  Brain,
  BarChart,
  CircuitBoard,
  Cpu,
  Database,
  Globe,
  LineChart,
  Network,
  Radar,
  Server,
  Zap
} from 'lucide-react';

const icons = [
  { Icon: Bot, color: 'text-purple-600' },
  { Icon: Brain, color: 'text-purple-500' },
  { Icon: BarChart, color: 'text-purple-600' },
  { Icon: CircuitBoard, color: 'text-purple-500' },
  { Icon: Cpu, color: 'text-purple-600' },
  { Icon: Database, color: 'text-purple-500' },
  { Icon: Globe, color: 'text-purple-600' },
  { Icon: LineChart, color: 'text-purple-500' },
  { Icon: Network, color: 'text-purple-600' },
  { Icon: Radar, color: 'text-purple-500' },
  { Icon: Server, color: 'text-purple-600' },
  { Icon: Zap, color: 'text-purple-500' },
];

// Duplicate the icons to create a seamless loop
const scrollingIcons = [...icons, ...icons];

const MovingBanner = () => {
  return (
    <div className="w-full overflow-hidden bg-purple-50/80 border-y border-purple-100 py-8">
      <div className="scroll-container relative">
        <div className="flex animate-infinite-scroll">
          {scrollingIcons.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12"
            >
              <item.Icon className={`w-8 h-8 ${item.color}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;