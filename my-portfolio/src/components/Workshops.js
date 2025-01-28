import React from 'react';
import './Workshops.css';
import { FaCertificate, FaCode, FaPalette, FaCalendarAlt, FaClock, FaGraduationCap } from 'react-icons/fa';

const Workshops = () => {
  const workshops = [
    {
      title: "MERN Stack Development",
      organizer: "The Better Tomorrow",
      icon: <FaCode />,
      description: "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js. Implemented user authentication and database management. Learned modern web development practices and deployment strategies.",
      certificate: true,
      date: " June 2022",
      duration: "3 weeks"
    },
    {
      title: "UI/UX Designing",
      organizer: "UX Design Institute",
      icon: <FaPalette />,
      description: "Mastered user interface and user experience design principles. Created wireframes and interactive prototypes. Studied user research and design thinking methodologies.",
      certificate: true,
      date: "December 2023",
      duration: "3 Weeks"
    }
  ];

  return (
    <section id="workshops" className="workshops">
      <div className="workshops-container">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2 className="section-title">
            Workshops & Training
          </h2>
          <p className="section-subtitle">Continuous learning and skill development through professional workshops</p>
        </div>

        <div className="workshops-grid">
          {workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <div className="workshop-header">
                <div className="workshop-icon">
                  {workshop.icon}
                </div>
                <h3>{workshop.title}</h3>
                <h4>{workshop.organizer}</h4>
              </div>

              <div className="workshop-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{workshop.date}</span>
                </div>
                <div className="meta-item">
                  <FaClock />
                  <span>{workshop.duration}</span>
                </div>
              </div>

              <div className="workshop-content">
                <p className="workshop-description">{workshop.description}</p>
                {workshop.certificate && (
                  <div className="certificate-badge">
                    <FaCertificate className="certificate-icon" />
                    <span>Certificate Awarded</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops; 