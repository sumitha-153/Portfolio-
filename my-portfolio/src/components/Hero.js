import React, { useState, useEffect } from "react"
import "./Hero.css"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer | Passionate Programmer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setText("")
        setIndex(0)
      }, 5000)

      return () => clearTimeout(resetTimeout)
    }
  }, [index])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">
          <span className="wave">👋</span>
          <h1>
            Hi, I'm <span className="highlight">Sumitha Palanisamy</span>
          </h1>
        </div>
        <div className="typing-container">
          <div className="typing-wrapper">
            <h2 className="typing-text">
              {text}
              <span className="cursor">|</span>
            </h2>
          </div>
        </div>
        <p className="hero-description">
          Passionate about creating innovative and user-friendly web experiences with expertise in both frontend and
          backend technologies. Turning ideas into reality through elegant code.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button primary">
            Get in Touch
          </a>
          <a href="#projects" className="cta-button secondary">
            View My Work
          </a>
        </div>
        {/* <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div> */}
      </div>
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}

export default Hero

