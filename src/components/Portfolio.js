import React, { useState, useEffect, useRef } from 'react'
import { FaLinkedin, FaKaggle, FaEnvelope, FaBars, FaTimes, FaAward, FaBook, FaBriefcase, FaCode, FaChartBar, FaBrain, FaDatabase, FaChartLine, FaFilter, FaChartPie, FaTable } from 'react-icons/fa'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Projects from './Projects';

// Add this custom hook at the top of your file, after the imports
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.documentElement.style.scrollBehavior = 'smooth';
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      setIsMenuOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Contact'];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1120]/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            whileHover={{ scale: 1.05 }}
          >
            Ivy Atieng
          </motion.h1>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg group"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>r

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 rounded-xl bg-[#0B1120]/95 backdrop-blur-lg border border-white/10"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Update the AnimatedGradientBackground component
const AnimatedGradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1F2937] animate-gradient-background bg-[length:400%_400%]">
    {/* Add subtle animated overlay */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-emerald-500/5 to-transparent"></div>
    </div>
  </div>
)

const Home = () => (
  <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
    <div className="absolute inset-0">
      <AnimatedGradientBackground />
    </div>
    <div className="container mx-auto px-4 py-32 md:py-48 flex flex-col md:flex-row items-center justify-between relative z-10">
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
          Ivy Atieng
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Data Scientist | Data Analyst | Machine Learning
        </p>
        <p className="text-lg mb-8 text-gray-400">Nairobi, Kenya</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="https://www.linkedin.com/in/ivy-atieng/"
            className="bg-white/5 backdrop-blur-sm text-white px-6 py-2 rounded-full transition flex items-center hover:bg-white/10 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            target='_blank'
          >
            <FaLinkedin className="mr-2" size={20} />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://www.kaggle.com/elynevn"
            className="bg-white/5 backdrop-blur-sm text-white px-6 py-2 rounded-full transition flex items-center hover:bg-white/10 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            target='_blank'
          >
            <FaKaggle className="mr-2" size={20} />
            Kaggle
          </motion.a>
          <motion.a
            href="mailto:atiengivylisa@gmail.com"
            className="bg-white/5 backdrop-blur-sm text-white px-6 py-2 rounded-full transition flex items-center hover:bg-white/10 border border-white/10 hover:border-white/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            target='_blank'
          >
            <FaEnvelope className="mr-2" size={20} />
            Email
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          <img 
            src="/ivy.png" 
            alt="Ivy Atieng" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  </section>
)

const AnimatedSection = ({ children, animationType = 'fade' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: animationType === 'slide' ? 50 : 0,
      scale: animationType === 'scale' ? 0.8 : 1,
      rotate: animationType === 'rotate' ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { 
      number: "2+", 
      label: "Years Experience",
      icon: <FaBriefcase className="text-2xl" />,
      gradient: "from-neon-blue to-neon-purple"
    },
    { 
      number: "10+", 
      label: "Projects Completed",
      icon: <FaCode className="text-2xl" />,
      gradient: "from-neon-purple to-neon-pink"
    },
    { 
      number: "5+", 
      label: "ML Models Deployed",
      icon: <FaBrain className="text-2xl" />,
      gradient: "from-neon-pink to-neon-orange"
    }
  ];

  return (
    <section id="about" className="relative bg-black py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1F2937]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-emerald-500/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
            bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[1fr,auto] gap-12 max-w-6xl mx-auto">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio Cards */}
            <div className="space-y-6">
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent 
                    bg-gradient-to-r from-neon-blue to-neon-purple">
                    Data Science Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    As a passionate Data Scientist with expertise in Data Analysis and Machine Learning, 
                    I bring a unique blend of analytical skills and creative problem-solving to every project. 
                    My approach combines rigorous statistical methods with cutting-edge machine learning 
                    techniques to extract meaningful insights from complex datasets.
                  </p>
                </div>
              </div>

              <div className="relative p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent 
                    bg-gradient-to-r from-neon-pink to-neon-purple">
                    Technical Expertise
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    With a strong foundation in mathematics and computer science, I excel at translating 
                    data-driven insights into actionable strategies that drive business growth and innovation. 
                    My expertise spans across machine learning, statistical analysis, and data visualization.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10
                    hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-2xl font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r ${stat.gradient}`}>
                    {stat.number}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                    <span className="text-neon-purple">{stat.icon}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
        
            
            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 
              blur-2xl -z-10 rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Update the Skills component
const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  const skills = [
    { 
      name: 'Data Analysis', 
      icon: <FaChartBar />, 
      gradient: 'from-orange-400 to-pink-600',
      glow: 'hover:shadow-orange-500/50'
    },
    { 
      name: 'Machine Learning', 
      icon: <FaBrain />, 
      gradient: 'from-blue-400 to-purple-600',
      glow: 'hover:shadow-blue-500/50'
    },
    { 
      name: 'Python', 
      icon: <FaCode />, 
      gradient: 'from-green-400 to-teal-600',
      glow: 'hover:shadow-green-500/50'
    },
    { 
      name: 'Data Cleaning', 
      icon: <FaFilter />, 
      gradient: 'from-red-400 to-rose-600',
      glow: 'hover:shadow-red-500/50'
    },
    { 
      name: 'PowerBI', 
      icon: <FaChartPie />, 
      gradient: 'from-purple-400 to-indigo-600',
      glow: 'hover:shadow-purple-500/50'
    },
    { 
      name: 'Tableau', 
      icon: <FaTable />, 
      gradient: 'from-indigo-400 to-cyan-600',
      glow: 'hover:shadow-indigo-500/50'
    },
    { 
      name: 'Data Mining', 
      icon: <FaDatabase />, 
      gradient: 'from-pink-400 to-rose-600',
      glow: 'hover:shadow-pink-500/50'
    },
    { 
      name: 'Data Visualization', 
      icon: <FaChartLine />, 
      gradient: 'from-cyan-400 to-blue-600',
      glow: 'hover:shadow-cyan-500/50'
    },
  ];

  return (
    <section id="skills" className="relative bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1F2937] py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-emerald-500/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`
                relative bg-gray-800/50 backdrop-blur-sm 
                rounded-xl p-6 
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                ${skill.glow}
                border border-transparent
                hover:border-opacity-50
                hover:border-white/20
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className={`
                relative w-16 h-16 mx-auto mb-4
                before:content-[''] before:absolute before:inset-0 
                before:bg-gradient-to-br ${skill.gradient}
                before:rounded-full before:opacity-20
                before:transform before:scale-150
                before:blur-xl
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${skill.gradient}
                  rounded-full opacity-75
                `}/>
                <div className="relative flex items-center justify-center w-full h-full text-white text-3xl">
                  {skill.icon}
                </div>
              </div>
              <h3 className={`
                text-lg font-bold text-center text-white
                bg-clip-text bg-gradient-to-br ${skill.gradient}
              `}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const education = [
    {
      degree: 'Data Science Bootcamp',
      institution: 'Moringa School',
      institutionLink: 'https://moringaschool.com/',
      year: 'Feb 2024 - August 2024',
      description: 'Experienced data scientist skilled in data manipulation, statistical analysis, and machine learning. Proficient in Python, SQL, and data visualization tools, with a strong ability to drive actionable insights and strategic decision',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
      icon: <FaBrain className="text-3xl" />,
      gradient: "from-purple-900/50 to-blue-900/50"
    },
    {
      degree: 'Data Visualization Course',
      institution: 'Coursera',
      institutionLink: 'https://www.coursera.org/',
      year: 'Sep 2023 - Dec 2023',
      description: 'Skilled in data visualization and analysis, adept at using tools like Python, Tableau, and SQL to transform complex data into actionable insights through clear, compelling visualizations and detailed analytical techniques.',
      skills: ['Tableau', 'PowerBI', 'Data Visualization', 'Analytics'],
      icon: <FaChartBar className="text-3xl" />,
      gradient: "from-blue-900/50 to-cyan-900/50"
    },
  ];

  return (
    <section id="education" className="relative bg-black py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1F2937]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-emerald-500/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
          bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
          Education Journey
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-6 rounded-xl transition-all duration-300
                bg-gradient-to-br ${edu.gradient} bg-opacity-10 backdrop-blur-sm
                hover:shadow-card-hover group`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>
              
              <div className="relative z-10 grid md:grid-cols-[auto,1fr] gap-6">
                {/* Icon Column */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple 
                    flex items-center justify-center text-white">
                    {edu.icon}
                  </div>
                  <div className="h-full w-0.5 bg-gradient-to-b from-neon-purple to-transparent 
                    hidden md:block"></div>
                </div>

                {/* Content Column */}
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent 
                    bg-gradient-to-r from-neon-blue to-neon-pink">
                    {edu.degree}
                  </h3>
                  
                  <a href={edu.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:text-neon-pink transition-colors duration-300">
                    {edu.institution}
                  </a>
                  
                  <p className="text-gray-400 mt-1 mb-4">{edu.year}</p>
                  <p className="text-gray-300 mb-6">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-lavender-800 
                          text-lavender-100 group-hover:animate-tag-bounce"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="relative bg-black py-24">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1F2937]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-emerald-500/5 to-transparent"></div>
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent 
          bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
          Get in Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Let's connect and explore how we can work together to bring your data science projects to life.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaLinkedin size={24} />,
              title: "LinkedIn",
              description: "Connect professionally",
              link: "https://www.linkedin.com/in/ivy-atieng/",
              gradient: "from-blue-600 to-blue-400"
            },
            {
              icon: <FaKaggle size={24} />,
              title: "Kaggle",
              description: "Check my competitions",
              link: "https://www.kaggle.com/elynevn",
              gradient: "from-cyan-600 to-cyan-400"
            },
            {
              icon: <FaEnvelope size={24} />,
              title: "Email",
              description: "Direct message",
              link: "mailto:atiengivylisa@gmail.com",
              gradient: "from-purple-600 to-pink-400"
            }
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 
                transition-all duration-300 group-hover:border-white/20
                hover:shadow-card-hover"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} 
                  opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} 
                    flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  
                  {/* Animated arrow */}
                  <motion.span 
                    className="text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#0B1120] text-white py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-white/10">
            <motion.h2 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-neon-blue to-neon-purple mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              Ivy Atieng
            </motion.h2>
            
            <nav className="flex gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Ivy Atieng. All rights reserved.</p>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <motion.a
                href="#"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio