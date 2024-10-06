import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaKaggle, FaEnvelope, FaBars, FaTimes, FaAward, FaBook, FaBriefcase, FaCode, FaChartBar, FaBrain, FaDatabase, FaChartLine } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// Remove the WatercolorBrushStroke component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Clean up the effect
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      // Close the mobile menu
      setIsMenuOpen(false);

      // Use setTimeout to ensure the menu closes before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300); // Adjust this delay if needed to match your menu closing animation duration
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <header className="bg-gradient-to-r from-lavender-800 to-lavender-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">Ivy Atieng</h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-lavender-300 transition-colors duration-200"
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-lavender-700 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-lavender-300 transition-colors duration-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Update the AnimatedGradientBackground component
const AnimatedGradientBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-lavender-800 via-lavender-600 to-purple-500 animate-gradient-background bg-[length:400%_400%]"></div>
)

const Home = () => (
  <section id="home" className="relative overflow-hidden">
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
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Ivy Atieng</h2>
        <p className="text-xl md:text-2xl mb-8 text-white">Data Scientist | Data Analyst | Machine Learning</p>
        <p className="text-lg mb-8 text-white">Nairobi, Kenya</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a 
            href="#" 
            className="bg-white text-lavender-800 px-6 py-2 rounded-full transition flex items-center hover:bg-lavender-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="mr-2" size={20} />
            LinkedIn
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-white text-lavender-800 px-6 py-2 rounded-full transition flex items-center hover:bg-lavender-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaKaggle className="mr-2" size={20} />
            Kaggle
          </motion.a>
          <motion.a 
            href="mailto:ivy.atieng@example.com" 
            className="bg-white text-lavender-800 px-6 py-2 rounded-full transition flex items-center hover:bg-lavender-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
        <div className="relative">
          <img src="https://www.datascienceportfol.io/static/profile_pics/pr0_AD3964876E6CB84DF1EB.png" alt="Ivy Atieng" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-600 to-lavender-400 opacity-40"></div>
        </div>
      </motion.div>
    </div>
  </section>
)

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-lavender-100 py-24">
      {/* Remove the WatercolorBrushStroke component */}
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-lavender-800 mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="md:flex items-center">
          <motion.div 
            className="md:w-1/3 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-xs mx-auto">
              <img 
                src="https://www.datascienceportfol.io/static/profile_pics/pr0_AD3964876E6CB84DF1EB.png" 
                alt="Ivy Atieng" 
                className="rounded-lg shadow-xl w-full h-auto hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-lavender-600 to-lavender-400 opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-2/3"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a passionate Data Scientist with expertise in Data Analysis and Machine Learning, I bring a
              unique blend of analytical skills and creative problem-solving to every project. My approach
              combines rigorous statistical methods with cutting-edge machine learning techniques to
              extract meaningful insights from complex datasets.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With a strong foundation in mathematics and computer science, I excel at translating data-driven
              insights into actionable strategies that drive business growth and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaAward />, title: "Expertise", description: "Data Analysis, Machine Learning, Visualization" },
                { icon: <FaBook />, title: "Education", description: "Data Science Bootcamp, Continuous Learning" },
                { icon: <FaBriefcase />, title: "Experience", description: "Emerging Data Scientist with Practical Projects" }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-lavender-600 text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-lavender-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Skills = () => {
  const skills = [
    { name: 'Data Analysis', icon: 'path/to/data-analysis-icon.svg', color: 'bg-blue-500' },
    { name: 'Machine Learning', icon: 'path/to/machine-learning-icon.svg', color: 'bg-green-500' },
    { name: 'Python', icon: <FaCode />, color: 'bg-yellow-500' },
    { name: 'R', icon: <FaCode />, color: 'bg-red-500' },
    { name: 'SQL', icon: <FaDatabase />, color: 'bg-purple-500' },
    { name: 'Tableau', icon: <FaChartBar />, color: 'bg-indigo-500' },
    { name: 'TensorFlow', icon: <FaBrain />, color: 'bg-pink-500' },
    { name: 'Data Visualization', icon: <FaChartLine />, color: 'bg-teal-500' },
  ]

  return (
    <section id="skills" className="relative bg-gradient-to-t from-white to-lavender-100 py-20">
      {/* Add Geometric Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img src="path/to/geometric-pattern.svg" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-lavender-800 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`${skill.color} p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 + 0.3 }}
              />
              <span className="text-lg text-white font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Paris Olympics Sentiment Analysis',
      description: 'Developed a machine learning model to analyze public sentiment around the 2024 Paris Olympics.',
      image: 'https://www.datascienceportfol.io/static/profile_pics/pr0_7DAF46B7ADE9E6FB2119.jpg',
      tags: ['Machine Learning', 'NLP', 'Sentiment Analysis'],
    },
    {
      title: 'Apple & Google Products Sentiment Analysis',
      description: 'Built a dashboard to analyze sentiment on Apple & Google products based on social media data.',
      image: 'https://www.datascienceportfol.io/static/profile_pics/pr1_99A62A9E986C25C9B7F0.jpg',
      tags: ['Data Visualization', 'Dashboard', 'Social Media Analysis'],
    },
  ]

  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-lavender-100 py-24">
      {/* Remove the WatercolorBrushStroke components */}
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-lavender-800 mb-16 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-lavender-100 text-lavender-800 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="inline-block text-lavender-600 hover:text-lavender-800 font-medium transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  Read more →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Education = () => {
  const education = [
    {
      degree: 'Data Science Bootcamp',
      institution: 'Moringa School',
      year: 'Feb 2024 - August 2024',
      description: 'Focused on machine learning and data manipulation.',
      icon: <FaBrain className="text-4xl text-lavender-600" />,
    },
    {
      degree: 'Data Visualization Course',
      institution: 'Coursera',
      year: 'Sep 2023 - Dec 2023',
      description: 'Learned advanced visualization techniques using Python and Tableau.',
      icon: <FaChartBar className="text-4xl text-lavender-600" />,
    },
  ]

  return (
    <section id="education" className="relative bg-gradient-to-t from-white to-lavender-100 py-20">
      {/* Remove the WatercolorBrushStroke components */}
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-lavender-800 mb-16 text-center">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{edu.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-lavender-800">{edu.degree}</h3>
                  <p className="text-lavender-600">{edu.institution}</p>
                </div>
              </div>
              <div className="ml-14">
                <p className="text-gray-600 mb-2">{edu.year}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-lavender-400 to-lavender-600 mt-4 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => (
  <section id="contact" className="relative bg-gradient-to-b from-white to-lavender-100 py-24">
    {/* Remove the WatercolorBrushStroke components */}
    
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-lavender-800 mb-12">Get in Touch</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="bg-lavender-600 text-white px-8 py-3 rounded-full hover:bg-lavender-700 transition-colors duration-300 flex items-center">
          <FaLinkedin className="mr-2" size={20} /> LinkedIn
        </a>
        <a href="#" className="bg-lavender-600 text-white px-8 py-3 rounded-full hover:bg-lavender-700 transition-colors duration-300 flex items-center">
          <FaKaggle className="mr-2" size={20} /> Kaggle
        </a>
        <a href="mailto:ivy.atieng@example.com" className="bg-lavender-600 text-white px-8 py-3 rounded-full hover:bg-lavender-700 transition-colors duration-300 flex items-center">
          <FaEnvelope className="mr-2" size={20} /> Email
        </a>
      </div>
    </div>
  </section>
)

const Footer = () => {
  return (
    <footer className="relative bg-lavender-800 text-white py-8">
      {/* Remove the WatercolorBrushStroke components */}
      
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Ivy Atieng. All rights reserved.</p>
        <div className="mt-4">
          <a href="#home" className="text-lavender-300 hover:text-white transition-colors duration-200">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

const Portfolio = () => (
  <div className="font-sans">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </div>
)

export default Portfolio