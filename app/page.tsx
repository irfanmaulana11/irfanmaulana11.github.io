'use client';

import { ExternalLink, Github, Linkedin, Mail, Code2, Briefcase, FolderOpen } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">IM</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div className="flex-shrink-0">
              <div className="w-60 h-60">
                <img 
                  src="/profile.png" 
                  alt="Irfan Maulana"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                M. Irfan Maulana
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Backend Engineer • Golang • .NET • PHP
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                5+ YOE. I build scalable backend systems and APIs. With expertise in Golang, .NET, and PHP. I deliver robust solutions for complex problems. Passionate about clean code, microservices, and system design.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-6 items-center">
                <a href="https://linkedin.com/in/irfanmaulana11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/irfanmaulana11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:ipann1297@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Technology Stack</p>
            <div className="flex flex-wrap gap-3">
              {['Golang', 'Gin', 'Echo', 'Gorilla Mux', '.NET', 'ASP.NET', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'gRPC', 'REST API', 'Bigquery' , 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default">
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
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
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
                  <span><strong className="text-foreground">Other</strong> - gRPC, Elasticsearch, Redis, Unit Testing</span>
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
            <Briefcase size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                company: 'Edufund',
                period: 'Nov 2023 - Present',
                role: 'Backend Engineer',
                description: 'Building and maintaining backend systems for fintech platform'
              },
              {
                company: 'Mister Aladin (MNC Group)',
                period: 'May 2022 - Nov 2023',
                role: 'Backend Engineer',
                description: 'Developed microservices and APIs for enterprise e-commerce platform'
              },
              {
                company: 'Blue Bird Group',
                period: 'Aug 2020 - May 2022',
                role: 'Backend Engineer',
                description: 'Engineered transport management systems and integrations'
              },
              {
                company: 'Blue Bird Group',
                period: 'May 2018 - Jun 2020',
                role: 'IT Helpdesk',
                description: 'Technical support and IT infrastructure management'
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:shadow-md hover:border-primary transition-all shadow-lg">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
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
            <h2 className="text-3xl font-bold">Notable Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Pandawara Group',
                description: 'Company profile, CMS, and payment system',
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
              <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors group shadow-lg">
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
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/irfanmaulana11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2"
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
          className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
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
