import React, { useEffect, useRef } from "react"
import "./Experience.css"

const Experience = () => {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => observer.observe(item))

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="company-header">
                <div className="company-logo">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyc5EsDcSkOQe4ByMSdbwpRZBLQ2mLXa3B6pCW5AImmT0Jp6o--mxO3D7PaYmiV7PQeE0&usqp=CAU"
                    alt="Kovan Labs Logo"
                  />
                </div>
                <div className="company-info">
                  <h3>Kovan Labs</h3>
                  <h4>Software Intern</h4>
                  <p className="timeline-date">September 2024 - Present</p>
                </div>
              </div>
              <ul className="experience-details">
                <li>Developed and maintained web applications using React.js and Node.js</li>
                <li>
                  Collaborated with senior developers to implement new features and improve existing functionality
                </li>
                <li>Participated in code reviews and contributed to team discussions</li>
                <li>Worked with REST APIs and database management</li>
              </ul>
            </div>
          </div>
          {/* Add more timeline-item divs here for additional experiences */}
        </div>
      </div>
    </section>
  )
}

export default Experience

