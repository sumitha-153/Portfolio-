import React from "react"
import "./Contact.css"
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaHandshake } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <div className="icon-wrapper">
            <FaHandshake className="handshake-icon" />
          </div>
          <h2>Let's Connect</h2>
          <p>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is
            always open!
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:sumitha05102003@gmail.com" className="contact-item email">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <span className="contact-label">Email Me At</span>
              <span className="contact-value">sumitha05102003@gmail.com</span>
            </div>
            <FaArrowRight className="arrow-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/sumitha-p-4a9667226/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item linkedin"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <span className="contact-label">Connect on LinkedIn</span>
              <span className="contact-value">Sumitha P</span>
            </div>
            <FaArrowRight className="arrow-icon" />
          </a>

          <a
            href="https://github.com/sumitha-153"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item github"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>
            <div className="contact-info">
              <span className="contact-label">Follow on GitHub</span>
              <span className="contact-value">sumitha-153</span>
            </div>
            <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        <div className="contact-footer">
          <p>
            Looking forward to connecting with you! <span className="wave-emoji">👋</span>
          </p>
        </div>
      </div>
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}

export default Contact

