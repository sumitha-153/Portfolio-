import React, { useState } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "QR Code Generator",
      demoLink: "https://sumitha-153.github.io/QR_Generator-/",
      codeLink: "https://github.com/sumitha-153/QR_Generator-",
      description: "A modern web application that generates QR codes instantly from text or URLs. Features an intuitive interface for seamless QR code creation and download functionality.",
      techStack: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Blog Application",
      demoLink: "https://blog-application-cyan-nu.vercel.app/",
      codeLink: "https://github.com/sumitha-153/BlogApplication",
      description: "A full-stack blog platform built with modern technologies. Features user authentication, blog post creation, editing, and real-time updates with a clean and responsive interface.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Git", "Vercel"]
    },
    {
      title: "Shop With Buddy",
      demoLink: "https://shop-with-buddy.vercel.app/",
      codeLink: "https://github.com/sumitha-153/Shop_With_Buddy",
      description: "A modern e-commerce platform with a sleek user interface, secure authentication, product management, shopping cart functionality, and seamless checkout process.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Git", "Vercel"]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevProject}>
            <FaChevronLeft />
          </button>
          
          <div className="project-card">
            <div className="project-info">
              <div className="project-header">
                <h3>{projects[currentIndex].title}</h3>
              </div>
              <div className="project-buttons">
                <a 
                  href={projects[currentIndex].demoLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <FiExternalLink className="link-icon" />
                  <span>View Demo</span>
                </a>
                <a 
                  href={projects[currentIndex].codeLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="code-link"
                >
                  <FiGithub className="link-icon" />
                  <span>Code</span>
                </a>
              </div>
              <p>{projects[currentIndex].description}</p>
              <div className="tech-stack">
                {projects[currentIndex].techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <button className="carousel-button next" onClick={nextProject}>
            <FaChevronRight />
          </button>
        </div>
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 