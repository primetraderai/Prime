import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Former Quantitative Trader with 10+ years experience in algorithmic trading and AI.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'AI researcher and blockchain expert with PhD in Machine Learning from MIT.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Zhang',
    role: 'Head of AI',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    bio: 'Led AI development at major crypto exchanges. Expert in predictive modeling.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-galaxy-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-galaxy-accent to-galaxy-accent-hover">
            Meet the Founders
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 border border-galaxy-accent/20 hover:border-galaxy-accent/40 transition-all"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-galaxy-accent"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-galaxy-text-primary mb-1">{member.name}</h3>
                <p className="text-galaxy-accent mb-3">{member.role}</p>
                <p className="text-galaxy-text-secondary mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.twitter} className="text-galaxy-text-secondary hover:text-galaxy-accent transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-galaxy-text-secondary hover:text-galaxy-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-galaxy-text-secondary hover:text-galaxy-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;