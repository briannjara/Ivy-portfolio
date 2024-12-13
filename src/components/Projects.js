import React from 'react';
import { FaChartBar, FaCode, FaChartLine, FaPlane, FaChartPie, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, gradient, icon: Icon, githubLink, liveLink }) => (
  <div
    className={`relative p-4 sm:p-6 rounded-xl transition-all duration-300 hover:scale-102
      bg-gradient-to-br ${gradient} bg-opacity-10 backdrop-blur-sm
      hover:shadow-card-hover group w-full`}
  >
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>

    {/* Content */}
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        {/* Project Icon */}
        <Icon className="text-3xl sm:text-4xl text-neon-purple" />

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          {/* GitHub Link */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300 p-1"
              title="View Source Code"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>
          )}

          {/* Live Link */}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-1"
              title="View Live Demo"
            >
              <FaExternalLinkAlt className="text-lg sm:text-xl" />
            </a>
          ) : (
            <span
              className="text-gray-600 cursor-not-allowed opacity-50 relative group/tooltip p-1"
              title="Live Demo Coming Soon"
            >
              <FaExternalLinkAlt className="text-lg sm:text-xl" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 
                group-hover/tooltip:opacity-100 whitespace-nowrap transition-opacity
                hidden sm:block">
                Coming Soon
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent 
        bg-gradient-to-r from-neon-blue to-neon-pink leading-tight"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-lavender-800 
            text-lavender-100 group-hover:animate-tag-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Real-time Olympics Sentiment Analysis",
      description:
        "Advanced sentiment analysis system tracking and analyzing social media discussions about the 2024 Paris Olympics in real-time.",
      tags: ["Machine Learning", "NLP", "Real-time Analytics", "Python"],
      gradient: "from-purple-900/50 to-blue-900/50",
      icon: FaChartBar,
      githubLink: "https://github.com/Atieng/sentiment-analysis-2024-olympics",
      liveLink: "https://public.tableau.com/app/profile/ivy.atieng/viz/2024PARISOLYMPICSVISUALIZATIONS/Dashboard2"
    },
    {
      title: "ProcureGuard AI",
      description:
        "Machine learning system for detecting fraudulent activities in contracts, enhancing procurement security and compliance.",
      tags: ["Fraud Detection", "ML", "Security", "Data Analysis"],
      gradient: "from-red-900/50 to-orange-900/50",
      icon: FaChartLine,
      githubLink: "https://github.com/ProcureGuardAI/Fraud-Detection-Machine-Learning",
      liveLink: null
    },
    {
      title: "Data Visualization Portfolio",
      description:
        "Comprehensive collection of interactive data visualizations showcasing insights from various datasets and industries.",
      tags: ["Data Visualization", "Analytics", "Dashboard"],
      gradient: "from-blue-900/50 to-cyan-900/50",
      icon: FaChartPie,
      githubLink: "https://github.com/Atieng/Work",
      liveLink: "https://public.tableau.com/app/profile/ivy.atieng"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent 
          bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-4"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
