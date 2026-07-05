import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'MERN Stack Internship',
    duration: '1 Year',
    description:
      'Worked on end-to-end feature development using the MERN stack, building and consuming REST APIs, designing MongoDB schemas, and implementing responsive React interfaces.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
  },
  {
    role: 'B.Tech Information Technology',
    company: '3rd Year, Undergraduate',
    duration: 'Ongoing',
    description:
      'Pursuing a Bachelor of Technology in Information Technology while building practical, real-world projects and continuously expanding into new backend ecosystems and cloud technologies.',
    tags: ['Data Structures', 'Algorithms', 'Web Development', 'AI Integration'],
  },
];

function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="experience" id="experience">
      <div className={`section-container fade-in-section ${isVisible ? 'in-view' : ''}`} ref={ref}>
        <span className="section-tag">Experience</span>
        <h2 className="section-title">
          My <span className="gradient-text">Journey So Far</span>
        </h2>
        <p className="section-subtitle">
          A snapshot of my professional and academic path as a developer.
        </p>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div
              className={`experience__item ${index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              key={exp.role}
            >
              <div className="experience__col">
                <div className="experience__card">
                  <span className="experience__ghost-number">0{index + 1}</span>

                  <div className="experience__card-header">
                    <div className="experience__icon">
                      <FiBriefcase />
                    </div>
                    <div>
                      <h3 className="experience__role">{exp.role}</h3>
                      <p className="experience__company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="experience__duration">
                    <FiCalendar />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="experience__description">{exp.description}</p>

                  <div className="experience__tags">
                    {exp.tags.map((tag) => (
                      <span className="experience__tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="experience__node-col">
                <div className="experience__node"></div>
              </div>

              <div className="experience__col experience__col--empty"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
