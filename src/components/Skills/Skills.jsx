import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaAws,
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiJavascript, SiDjango, SiMysql, SiPython,
} from 'react-icons/si';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
    ],
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'AWS / Cloud', icon: <FaAws />, color: '#ff9900' },
      { name: 'SQL', icon: <SiMysql />, color: '#4479a1' },
      { name: 'Django / Python', icon: <SiDjango />, color: '#092e20' },
      { name: 'Python', icon: <SiPython />, color: '#3776ab' },
      { name: 'Java', icon: <FaJava />, color: '#f89820' },
    ],
  },
];

function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills__galaxy" aria-hidden="true"></div>

      <div className={`section-container fade-in-section ${isVisible ? 'in-view' : ''}`} ref={ref}>
        <span className="section-tag">Skills</span>
        <h2 className="section-title">
          My <span className="gradient-text">Technical Arsenal</span>
        </h2>
        <p className="section-subtitle">
          Technologies I use to build reliable, end-to-end web applications,
          along with the stacks I am actively expanding into.
        </p>

        <div className="skills__categories">
          {skillCategories.map((category) => (
            <div className="skills__category" key={category.title}>
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__grid">
                {category.skills.map((skill) => (
                  <div className="skills__card glass-panel" key={skill.name}>
                    <div className="skills__icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
