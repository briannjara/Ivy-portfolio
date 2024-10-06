import React, { useState } from 'react'
import { FaLinkedin, FaKaggle, FaEnvelope, FaBars, FaTimes, FaAward, FaBook, FaBriefcase, FaCode, FaChartBar, FaBrain, FaDatabase, FaChartLine } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ivy Atieng</h1>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 p-4">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

const Home = () => (
  <section id="home" className="bg-gradient-to-br from-purple-800 to-purple-600 text-white">
    <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Ivy Atieng</h2>
        <p className="text-xl md:text-2xl mb-6">Data Scientist | Data Analyst | Machine Learning</p>
        <p className="text-lg mb-8">Nairobi, Kenya</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="bg-white text-purple-800 px-6 py-2 rounded-full transition flex items-center hover:bg-purple-100">
            <FaLinkedin className="mr-2" size={20} />
            LinkedIn
          </a>
          <a href="#" className="bg-white text-purple-800 px-6 py-2 rounded-full transition flex items-center hover:bg-purple-100">
            <FaKaggle className="mr-2" size={20} />
            Kaggle
          </a>
          <a href="mailto:ivy.atieng@example.com" className="bg-white text-purple-800 px-6 py-2 rounded-full transition flex items-center hover:bg-purple-100">
            <FaEnvelope className="mr-2" size={20} />
            Email
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="https://www.datascienceportfol.io/static/profile_pics/pr0_AD3964876E6CB84DF1EB.png" alt="Ivy Atieng" className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg" />
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/3">
          <img 
            src="https://www.datascienceportfol.io/static/profile_pics/pr0_AD3964876E6CB84DF1EB.png" 
            alt="Ivy Atieng" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-6 leading-relaxed">
            As a passionate Data Scientist with expertise in Data Analysis and Machine Learning, I bring a
            unique blend of analytical skills and creative problem-solving to every project. My approach
            combines rigorous statistical methods with cutting-edge machine learning techniques to
            extract meaningful insights from complex datasets.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            With a strong foundation in mathematics and computer science, I excel at translating data-driven
            insights into actionable strategies that drive business growth and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaAward className="text-purple-600 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2 text-center">Expertise</h3>
              <p className="text-purple-700 text-center">Data Analysis, Machine Learning, Visualization</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaBook className="text-purple-600 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2 text-center">Education</h3>
              <p className="text-purple-700 text-center">Data Science Bootcamp, Continuous Learning</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaBriefcase className="text-purple-600 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2 text-center">Experience</h3>
              <p className="text-purple-700 text-center">Emerging Data Scientist with Practical Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Skills = () => {
  const skills = [
    { name: 'Data Analysis', icon: <FaChartBar /> },
    { name: 'Machine Learning', icon: <FaBrain /> },
    { name: 'Python', icon: <FaCode /> },
    { name: 'R', icon: <FaCode /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Tableau', icon: <FaChartBar /> },
    { name: 'TensorFlow', icon: <FaBrain /> },
    { name: 'Data Visualization', icon: <FaChartLine /> },
  ]
  return (
    <section id="skills" className="bg-purple-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-600 text-4xl mb-4">{skill.icon}</div>
              <span className="text-lg text-gray-700">{skill.name}</span>
            </div>
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
    },
    {
      title: 'Apple & Google Products Sentiment Analysis',
      description: 'Built a dashboard to analyze sentiment on Apple & Google products based on social media data.',
      image: 'https://www.datascienceportfol.io/static/profile_pics/pr1_99A62A9E986C25C9B7F0.jpg',
    },
  ]

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-purple-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Read more →</a>
              </div>
            </div>
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
    },
    {
      degree: 'Data Visualization Course',
      institution: 'Coursera',
      year: 'Sep 2023 - Dec 2023',
      description: 'Learned advanced visualization techniques using Python and Tableau.',
    },
  ]

  return (
    <section id="education" className="bg-purple-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-800 mb-2">{edu.degree}</h3>
              <p className="text-purple-600">{edu.institution} | {edu.year}</p>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => (
  <section id="contact" className="bg-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12">Get in Touch</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center">
          <FaLinkedin className="mr-2" size={20} /> LinkedIn
        </a>
        <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center">
          <FaKaggle className="mr-2" size={20} /> Kaggle
        </a>
        <a href="mailto:ivy.atieng@example.com" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center">
          <FaEnvelope className="mr-2" size={20} /> Email
        </a>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-purple-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 Ivy Atieng. All rights reserved.</p>
      <div className="mt-4">
        <a href="#home" className="text-purple-300 hover:text-white transition-colors duration-200">Back to top</a>
      </div>
    </div>
  </footer>
)

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