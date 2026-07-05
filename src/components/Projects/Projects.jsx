import { FiGithub, FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'MERN Stack',
    description:
      'A full-featured e-commerce web application with user authentication, product catalog, cart management, and order processing built on the MERN stack.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Chat Application',
    category: 'MERN Stack',
    description:
      'A real-time messaging application supporting instant one-to-one and group conversations, built with a Node.js and Express backend and a React frontend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management Dashboard',
    category: 'MERN Stack',
    description:
      'A productivity dashboard for creating, assigning, and tracking tasks across projects, with authentication and role-based access control.',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    live: '#',
  },
  {
    title: 'Blog Publishing Platform',
    category: 'MERN Stack',
    description:
      'A full-stack blogging platform allowing users to write, edit, and publish articles with a rich text editor and comment system.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Content Assistant',
    category: 'AI Development',
    description:
      'An AI-powered writing assistant that integrates a language model API into a React frontend to generate and refine content in real time.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Image Recognition Tool',
    category: 'AI Development',
    description:
      'A web application that uses a trained machine learning model to classify and analyze uploaded images, with results rendered instantly in the UI.',
    tech: ['React', 'Python', 'ML Model'],
    github: '#',
    live: '#',
  },
];

function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="projects" id="projects">
      <div className={`section-container fade-in-section ${isVisible ? 'in-view' : ''}`} ref={ref}>
        <span className="section-tag">Projects</span>
        <h2 className="section-title">
          Things I Have <span className="gradient-text">Built</span>
        </h2>
        <p className="section-subtitle">
          A collection of MERN stack and AI-integrated projects showcasing my
          full-stack development skills.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <div className="projects__card glass-panel" key={project.title}>
              <div className="projects__card-top">
                <span className="projects__category">{project.category}</span>
                <div className="projects__links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__description">{project.description}</p>

              <div className="projects__tech">
                {project.tech.map((tech) => (
                  <span className="projects__tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
