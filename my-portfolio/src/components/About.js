import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const skillsRef = useRef(null);
  const aboutTextRef = useRef(null);
  const educationRef = useRef(null);

  const skills = [
    { name: 'HTML', level: 90, color: '#E34F26' },
    { name: 'CSS', level: 85, color: '#1572B6' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Java', level: 70, color: '#007396' },
    { name: 'React', level: 80, color: '#61DAFB' },
    { name: 'Next.js', level: 75, color: '#000000' },
    { name: 'MongoDB', level: 75, color: '#47A248' },
    { name: 'Git', level: 80, color: '#F05032' }
  ];

  const education = [
    {
      degree: "B.E Computer Science and Engineering",
      institution: "Sri Eshwar College of Engineering",
      year: "2021 - 2025",
      score: "CGPA: 8.450"
    },
    {
      degree: "HSC",
      institution: "Vigneshwar Vidya Matric Higher Secondary School",
      year: "2020 - 2021",
      score: "Percentage: 95%"
    },
    {
      degree: "SSLC",
      institution: "Vigneshwar Vidyalaya Matric Hr Sec School",
      year: "2018 - 2019",
      score: "Percentage: 94%"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target === skillsRef.current) {
            entry.target.classList.add('animate-skills');
          }
        }
      });
    }, observerOptions);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text" ref={aboutTextRef}>
            <p>
              Hello! I'm Sumitha Palanisamy, a passionate Full Stack Developer with expertise 
              in both frontend and backend technologies. I enjoy creating seamless web applications 
              that deliver exceptional user experiences while maintaining robust backend functionality.
            </p>
            <p>
              With a strong foundation in modern web technologies, I specialize in building 
              responsive and scalable applications using React, Next.js, and MongoDB. My experience 
              with Java adds depth to my backend capabilities, allowing me to create comprehensive 
              full-stack solutions.
            </p>
          </div>
          {/* <div className="profile-image">
            <img src="/placeholder.svg?height=300&width=300" alt="Sumitha Palanisamy" />
          </div> */}
        </div>
        
        <div className="education-section" ref={educationRef}>
          <h3 className="education-title">Education</h3>
          <div className="education-container">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-details">
                  <span className="education-year">{edu.year}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section" ref={skillsRef}>
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ 
                      '--progress-width': `${skill.level}%`,
                      '--skill-color': skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
