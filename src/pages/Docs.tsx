import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Book,
  Search,
  ChevronRight,
  Menu,
  X,
  Terminal,
  Code,
  Cpu,
  Zap,
  Shield,
  Bot
} from 'lucide-react';
import { marked } from 'marked';

const DocsContent = {
  'getting-started': {
    title: 'Getting Started',
    content: `
# Getting Started with PrimeTrader AI

Welcome to PrimeTrader AI's documentation. This guide will help you get started with our AI-powered trading platform.

## Quick Start

1. Create an account
2. Connect your wallet
3. Set up your trading preferences
4. Start using AI-powered insights

## Key Features

- Real-time market analysis
- AI-powered trading signals
- Portfolio optimization
- Risk management tools

## Requirements

- Web3 wallet (MetaMask recommended)
- Minimum balance for trading
- Basic understanding of crypto trading
    `
  },
  'api-reference': {
    title: 'API Reference',
    content: `
# API Reference

Our REST API lets you access PrimeTrader AI's features programmatically.

## Authentication

All API requests require authentication using your API key.

\`\`\`javascript
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY'
};
\`\`\`

## Endpoints

### GET /api/v1/signals

Get latest trading signals.

\`\`\`javascript
fetch('https://api.primetrader.ai/v1/signals', { headers })
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`
    `
  },
  'trading-strategies': {
    title: 'Trading Strategies',
    content: `
# Trading Strategies

Learn about the different trading strategies available in PrimeTrader AI.

## AI-Powered Strategies

Our AI analyzes multiple data points to generate trading strategies:

- Technical indicators
- Market sentiment
- Whale movements
- Historical patterns

## Risk Management

Each strategy includes built-in risk management:

- Stop-loss recommendations
- Position sizing
- Portfolio diversification
- Risk-reward ratios
    `
  }
};

function Docs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<keyof typeof DocsContent>('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'getting-started' as const, icon: Bot, label: 'Getting Started' },
    { id: 'api-reference' as const, icon: Code, label: 'API Reference' },
    { id: 'trading-strategies' as const, icon: Cpu, label: 'Trading Strategies' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-[#1A1F2E] rounded-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-[#1A1F2E] transform transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Bot className="w-8 h-8 text-[#7C3AED]" />
            <span className="text-xl font-bold">PrimeTrader AI</span>
          </Link>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full bg-[#0B0F1A] text-white placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>

          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                  ${activeSection === section.id 
                    ? 'bg-[#7C3AED] text-white' 
                    : 'text-gray-400 hover:bg-[#2A2F3E] hover:text-white'}
                `}
              >
                <section.icon className="w-5 h-5" />
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ 
              __html: marked(DocsContent[activeSection].content) 
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;