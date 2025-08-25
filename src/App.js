import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Навигация */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Bekastan</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Hello, I'm Bekastan</span>
            <span className="hero-subtitle">Python Backend Developer</span>
          </h1>
          <p className="hero-description">
            I build robust and scalable backend systems using Python, Django, and modern technologies. 
            Passionate about creating efficient APIs and solving complex problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-snippet">
            <div className="code-header">
              <span className="red-dot"></span>
              <span className="yellow-dot"></span>
              <span className="green-dot"></span>
              <span className="code-filename">backend.py</span>
            </div>
            <pre className="code-content">
{`from django.db import models
from rest_framework import serializers

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technology = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'`}
            </pre>
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Python backend developer with experience in building web applications, 
              RESTful APIs, and database design. My expertise lies in Django, Django REST Framework, 
              PostgreSQL, and Docker.
            </p>
            <p>
              I enjoy tackling complex problems and creating efficient, maintainable solutions. 
              When I'm not coding, I'm continuously learning about new technologies and best practices 
              in software development.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">2+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Technologies Mastered</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-placeholder">
                  <img src={require('./images/bekastan.png')} alt="Telegram Bot" />
            </div>
          </div>
        </div>
      </section>

      {/* Навыки с акцентом на Python */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Django</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Django REST Framework</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">FastAPI</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">PostgreSQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">Docker</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Linux</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Опыт работы */}
      <section id="experience" className="section">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Sep 2023 - Feb 2024</div>
            <div className="timeline-content">
              <h3>Viind GmbH - Fullstack Developer</h3>
              <p>Worked on developing chatbot solutions to help digitize societies around the world, using AI technologies such as ChatGPT to enhance services in cities. Focused on creating user interfaces and backend APIs, utilizing a range of technologies with the goal of contributing to global digital transformation.</p>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">DRF</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проекты с акцентом на Python */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">

          <div className="project-card">
            <div className="project-image">
                  <img src={require('./images/telegram.png')} alt="Telegram Bot" />
            </div>
            <div className="project-content">
              <h3>Telegram Notification Bot</h3>
              <p>A Telegram bot that sends automated notifications and alerts, integrated with various APIs for monitoring and reporting purposes.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Telegram API</span>
                <span>Pyogram</span>
                <span>Docker</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/5ekastanx/Pyrogram-bot" className="project-link">Code</a>
                <a href="https://github.com/5ekastanx/Pyrogram-bot" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
                  <img src={require('./images/altyn.png')} alt="Telegram Bot" />
            </div>
            <div className="project-content">
              <h3>Altyn Danek</h3>
              <p>🥭 Altyn Danek - fresh fruits and vegetables online 🛒We care about the quality of our products and offer only natural, selected and tasty fruits directly from trusted suppliers.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>FastAPI</span>
                <span>WebSockets</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/5ekastanx/AltynDanek" className="project-link">Code</a>
                <a href="https://altyn-danek.vercel.app/" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
                  <img src={require('./images/api.png')} alt="Telegram Bot" />
            </div>
            <div className="project-content">
              <h3>Voice-Synthesis</h3>
              <p>Speech synthesis project using fish-speech/xtts models. Time to get started.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Django</span>
                <span>DRF</span>
                <span>PostgreSQL</span>
                <span>fish-speech</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/5ekastanx/Voice-Synthesis" className="project-link">Code</a>
                <a href="https://github.com/5ekastanx/Voice-Synthesis" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently available for freelance work and new opportunities. 
            If you have a project that you want to get started or think you need my help with something, 
            then get in touch.
          </p>
          <a href="https://about-me-chi-taupe.vercel.app/" className="btn btn-primary">Contact Me</a>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Bekastan. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://github.com/5ekastanx" target="_blank" rel="noopener noreferrer">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="5ekastannasirov@gmail.com">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/bekastan-nasirov-a37258301/">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;