import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Wallet,
  Brain,
  TrendingUp,
  Scale as Whale,
  Newspaper,
  ArrowUpRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import MovingBanner from '../components/MovingBanner';

const stats = [
  {
    icon: DollarSign,
    value: "$2.5B+",
    label: "Trading Volume Analyzed"
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Active Traders"
  },
  {
    icon: Award,
    value: "89%",
    label: "Success Rate"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Real-time Analysis"
  }
];

const features = [
  {
    icon: Wallet,
    title: "Multi-Chain Portfolio Tracking",
    description: "Connect and analyze multiple wallets across different blockchains with real-time performance metrics."
  },
  {
    icon: Brain,
    title: "AI Trading Strategies",
    description: "Get personalized trading strategies powered by advanced machine learning algorithms."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Deep dive into your portfolio's performance with advanced technical analysis."
  },
  {
    icon: Whale,
    title: "Whale Activity Monitoring",
    description: "Track large wallet movements and smart money flows in real-time."
  },
  {
    icon: Newspaper,
    title: "AI Sentiment Analysis",
    description: "Stay ahead with AI-powered news and social media sentiment analysis."
  },
  {
    icon: LineChart,
    title: "Automated Backtesting",
    description: "Test your strategies against historical data before deploying them."
  }
];

const steps = [
  {
    icon: Wallet,
    title: "Set Your Preferences",
    description: "Configure your trading preferences and risk tolerance levels."
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes market conditions to generate personalized insights."
  },
  {
    icon: TrendingUp,
    title: "Execute Strategies",
    description: "Implement AI-recommended strategies and track your performance in real-time."
  }
];

const plans = [
  {
    name: "Basic",
    price: 29,
    features: [
      "Multi-chain portfolio tracking",
      "Basic AI insights",
      "Daily market analysis",
      "Email alerts",
      "Community access"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Everything in Basic",
      "Advanced AI strategies",
      "Whale tracking",
      "Custom alerts",
      "Priority support",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Everything in Pro",
      "Custom AI models",
      "Dedicated account manager",
      "Custom reporting",
      "White-label solution",
      "24/7 phone support"
    ],
    popular: false
  }
];

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimeoutRef = useRef<number>();
  const scrollTimeoutRef = useRef<number>();

  const stopVideoAfterDelay = () => {
    const video = videoRef.current;
    if (video) {
      // Clear any existing timeout
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }
      
      // Set new timeout to stop video after 3 seconds
      playTimeoutRef.current = window.setTimeout(() => {
        video.pause();
        setIsPlaying(false);
      }, 3000); // Changed to 3 seconds
    }
  };

  useEffect(() => {
    // Initial play when component mounts
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
      stopVideoAfterDelay();
    }

    // Cleanup
    return () => {
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      // Clear any existing scroll timeout
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      // Start playing if not already playing
      if (!isPlaying) {
        video.play();
        setIsPlaying(true);
      }

      // Reset the play timeout
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }

      // Set new scroll timeout
      scrollTimeoutRef.current = window.setTimeout(() => {
        // When scrolling stops, start the 2-second countdown to pause
        stopVideoAfterDelay();
      }, 150); // Adjust this value to change how quickly it reacts to scroll stopping
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      if (playTimeoutRef.current) {
        window.clearTimeout(playTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* AI Grid Background */}
      <div className="ai-grid"></div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            muted
            playsInline
            loop
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.9)' }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="px-4 py-2 rounded-full bg-purple-100 backdrop-blur-sm border border-purple-200 text-purple-800 text-sm font-medium">
                Powered by Advanced AI
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-indigo-800 drop-shadow-lg">
                Neural Network Trading Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 backdrop-blur-sm bg-white/60 p-6 rounded-lg mx-auto shadow-lg">
              Harness the power of our advanced neural networks for real-time market analysis, predictive modeling, and automated portfolio optimization.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/docs" 
                className="group relative px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white rounded-lg transition-all overflow-hidden shadow-lg"
              >
                <span className="relative flex items-center gap-2 font-semibold">
                  Get Started <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
              <a 
                href="mailto:contact@primetrader.ai"
                className="px-8 py-4 bg-gray-900/80 hover:bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg font-semibold text-white transition-all flex items-center gap-2 shadow-lg"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Banner */}
      <MovingBanner />

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card rounded-xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
            Powered by Advanced AI Technology
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card rounded-xl p-6">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
            How It Works
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card glass rounded-xl p-6 relative">
              <div className="step-number absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                {index + 1}
              </div>
              <step.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Roadmap />
      <Team />

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
            Simple, Transparent Pricing
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card rounded-xl p-8 ${plan.popular ? 'border-2 border-purple-500' : ''}`}>
              {plan.popular && (
                <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:sales@primetrader.ai"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                Contact Sales
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;