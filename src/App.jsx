function App() {
  const projects = [
    {
      title: "Coffee Ordering App UI",
      description:
        "A modern coffee ordering application interface designed using Figma.",
      technology: "Figma / UI/UX Design",
    },
    {
      title: "Email Newsletter Design",
      description:
        "A clean and modern email newsletter interface designed for better user engagement.",
      technology: "Figma / UI Design",
    },
    {
      title: "Modern E-commerce Website UI",
      description:
        "A modern e-commerce website interface designed with a focus on usability and user experience.",
      technology: "Figma / UI/UX Design",
    },
    {
      title: "Food Ordering App UI",
      description:
        "A user-friendly food ordering application interface designed with a simple and modern experience.",
      technology: "Figma / UI/UX Design",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Figma",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Android Development",
    "Web Technologies",
    "Data Analytics",
  ];

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">PRIYA P</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">HELLO, I'M</p>

          <h1>PRIYA P</h1>

          <h2>
            B.Tech Information Technology Student | UI/UX Designer |
            App Developer | Python Enthusiast
          </h2>

          <p>
            Welcome to my portfolio. I am a B.Tech Information Technology
            student interested in UI/UX design, app development and Python.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/priya47029-coder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/priya-p-dce-chennai-302059342"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

       
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            I am a B.Tech Information Technology student at Dhanalakshmi
            College of Engineering, Chennai.
          </p>

          <p>
            I am interested in UI/UX Design, Mobile Application Development,
            Python Programming and Web Technologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section light-section">
        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>Project {index + 1}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <small>{project.technology}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section light-section">
        <p className="section-label">EDUCATION</p>

        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Bachelor of Technology – Information Technology</h3>

          <p>Dhanalakshmi College of Engineering, Chennai</p>

          <p>2024 – 2028</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <p className="section-label">CERTIFICATIONS</p>

        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          <div className="certificate-card">
            <h3>CSS, HTML, Javascript</h3>
          </div>

          <div className="certificate-card">
            <h3>Android Development</h3>
          </div>

          <div className="certificate-card">
            <h3>UI and UX Certification</h3>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section light-section">
        <p className="section-label">EXPERIENCE</p>

        <h2 className="section-title">Experience</h2>

        <div className="experience-card">
          <h3>Android Development Intern</h3>

          <p>
            Internship experience focused on Android application development.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-content">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:7305427492">7305427492</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:priya47029@gmail.com">
              priya47029@gmail.com
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/priya-p-dce-chennai-302059342"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/priya47029-coder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 PRIYA P. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
