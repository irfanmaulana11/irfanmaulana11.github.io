'use client';

import { useState, useEffect } from 'react'
import { ExternalLink, Github, Linkedin, Mail, Code2, Briefcase, FolderOpen, Moon, Sun } from 'lucide-react'

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo.webp" alt="Logo" className="h-8" />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60">
                <img
                  src={isDark ? "/profile-dark.webp" : "/profile.webp"}
                  alt="Irfan Maulana"
                />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left w-full">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight whitespace-nowrap">
                M. Irfan Maulana
              </h1>
              <p className="text-sm md:text-2xl text-muted-foreground mb-6 md:mb-8 md:whitespace-nowrap">
                <span className="text-primary">Backend Engineer</span> • Golang • .NET • PHP
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6 md:mb-8 mx-auto md:mx-0">
                5+ YOE. I build scalable backend systems and APIs. With expertise in Golang, .NET, and PHP. I deliver robust solutions for complex problems. Passionate about clean code, microservices, and system design.
              </p>

              {/* Social Links */}
              <div className="flex gap-6 items-center justify-center md:justify-start">
                <a href="https://linkedin.com/in/irfanmaulana11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/irfanmaulana11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                  <Github size={24} />
                </a>
                <a href="mailto:ipann1297@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Technology Stack</p>
            <div className="flex flex-wrap gap-3">
              {['Golang', 'Gin', 'Echo', 'Gorilla Mux', '.NET', 'ASP.NET', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'gRPC', 'REST API', 'Bigquery', 'Docker'].map((tech, index) => (
                <span key={tech} className={`px-3 md:px-4 py-2 bg-card border border-border rounded-lg text-xs md:text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default ${index >= 10 ? 'hidden md:inline-block' : ''}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 size={28} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Languages & Frameworks</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Go/Golang</strong> - GIN, Echo, Gorilla Mux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">.NET</strong> - ASP.NET Core, RESTful APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">PHP</strong> - Laravel Framework</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Databases & Tools</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Databases</strong> - PostgreSQL, MySQL, MongoDB, BigQuery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Message Queues</strong> - RabbitMQ, NSQ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Other</strong> - gRPC, Elasticsearch, Redis, Unit Testing, Docker</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={28} className="text-primary flex-shrink-0" />
            <h2 className="text-xl md:text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                company: 'Edufund',
                period: 'Nov 2023 - Present',
                role: 'Backend Engineer',
                description: [
                  'Developed and maintained REST API–based backend services and cron jobs.',
                  'Implemented data pipelines with DBT for analytics, reporting, and transactional workflows.',
                  'Develop web application using Appsmith.',
                  'Authored and maintained technical documentation using Docusaurus.',
                  '<strong>Tech stack:</strong> Golang, MySQL, PostgreSQL, NSQ, GraphQL, Metabase, SFTP, DBT, n8n, Appsmith, Docker.'
                ]
              },
              {
                company: 'Mister Aladin (MNC Group)',
                period: 'May 2022 - Nov 2023',
                role: 'Backend Engineer',
                description: [
                  'Developing REST API for mobile and web consumption.',
                  'Develop ticketing system.',
                  'Integrate with external service like payment gateway and other OTA.',
                  '<strong>Tech stack:</strong> Golang, MySql, Algolia, MongoDB'
                ]
              },
              {
                company: 'Blue Bird Group',
                period: 'Aug 2020 - May 2022',
                role: 'Backend Engineer',
                description: [
                  'Developed Go gRPC microservices and REST API for system along with unit testing.',
                  'Maintained .NET desktop and ASP .NET web applications.',
                  '<strong>Tech stack:</strong> Golang, gRPC, PostgreSQL, RabbitMQ, Elasticsearch, Redis, Google Pub/Sub, ASP .NET MVC, SQL Server, IIS.'
                ]
              },
              {
                company: 'Blue Bird Group',
                period: 'May 2018 - Jun 2020',
                role: 'IT Helpdesk',
                description: [
                  'Create a ticket for the incoming system problem report',
                  'First Hendling on Computer issue',
                  'Ensure all daily transaction reports are entered into the system'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:shadow-md hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: desc }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FolderOpen size={28} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Notable Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Pandawara Group',
                description: 'Company profile, CMS, HR system and payment system',
                role: 'Backend',
                tech: ['GO', 'Gin', 'MySQL', 'REST API']
              },
              {
                name: 'Bijak Gadai Dashboard',
                description: 'Financial dashboard and management system',
                role: 'Fullstack',
                tech: ['PHP', 'Laravel', 'MySQL']
              },
              {
                name: 'IKD Company Profile',
                description: 'Corporate website and content management',
                role: 'Fullstack',
                tech: ['CodeIgniter', 'MySQL']
              },
              {
                name: 'Hijab\'s Ecommerce',
                description: 'Full-featured online store with payment processing',
                role: 'Fullstack',
                tech: ['WordPress', 'WooCommerce', 'MySQL']
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:scale-105 group shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong className="text-primary">{project.role}</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-card text-xs text-accent rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaborating or have a project in mind? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ipann1297@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/irfanmaulana11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
            <p>© 2024 Irfan Maulana. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
