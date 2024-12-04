import React from 'react';
import { FaChartBar, FaCode, FaBrain, FaRobot } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, gradient, icon: Icon }) => (
  <div 
    className={`relative p-6 rounded-xl transition-all duration-300 hover:scale-102
      bg-gradient-to-br ${gradient} bg-opacity-10 backdrop-blur-sm
      hover:shadow-card-hover group`}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>
    <div className="relative z-10">
      <Icon className="text-4xl mb-4 text-neon-purple" />
      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent 
        bg-gradient-to-r from-neon-blue to-neon-pink">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} 
            className="px-3 py-1 text-sm rounded-full bg-lavender-800 
            text-lavender-100 group-hover:animate-tag-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
      <a href="#" 
        className="inline-flex items-center text-neon-blue hover:text-neon-pink 
        transition-colors duration-300"
      >
        Read more <span className="ml-1">→</span>
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Paris Olympics Sentiment Analysis",
      description: "Real-time sentiment analysis of social media discussions about the 2024 Paris Olympics using advanced NLP techniques.",
      tags: ["Machine Learning", "NLP", "Real-time Analytics"],
      gradient: "from-purple-900/50 to-blue-900/50",
      icon: FaChartBar
    },
    {
      title: "Tech Product Sentiment Dashboard",
      description: "Interactive dashboard analyzing consumer sentiment for Apple & Google products across social platforms.",
      tags: ["Data Visualization", "Dashboard", "Social Media"],
      gradient: "from-pink-900/50 to-purple-900/50",
      icon: FaBrain
    },
    {
      title: "AI-Powered Code Assistant",
      description: "Developed an intelligent code completion system using transformer-based architecture.",
      tags: ["Deep Learning", "NLP", "Python"],
      gradient: "from-blue-900/50 to-cyan-900/50",
      icon: FaCode
    },
    {
      title: "Autonomous Trading Bot",
      description: "Created a cryptocurrency trading bot using reinforcement learning algorithms.",
      tags: ["Machine Learning", "Finance", "Python"],
      gradient: "from-orange-900/50 to-red-900/50",
      icon: FaRobot
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent 
          bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 