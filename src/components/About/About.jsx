import { FiCode, FiCoffee, FiTarget, FiTerminal } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';
import './About.css';

const stats = [
  { icon: <FiCode />, value: '5+', label: 'Projects Shipped' },
  { icon: <FiCoffee />, value: '1 Yr', label: 'Internship Experience' },
  { icon: <FiTarget />, value: '3rd Yr', label: 'B.Tech IT Student' },
];

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className={`section-container fade-in-section ${isVisible ? 'in-view' : ''}`} ref={ref}>
        <span className="section-tag">About Me</span>
        <h2 className="section-title">
          Turning <span className="gradient-text">Ideas</span> Into Real Products
        </h2>

        <div className="about__grid">
          <div className="about__terminal">
            <div className="about__terminal-bar">
              <span className="about__dot about__dot--red"></span>
              <span className="about__dot about__dot--yellow"></span>
              <span className="about__dot about__dot--green"></span>
              <span className="about__terminal-title">
                <FiTerminal /> profile.js
              </span>
            </div>
            <div className="about__terminal-body">
              <p><span className="tok-keyword">const</span> <span className="tok-var">developer</span> = {'{'}</p>
              <p className="about__line">&nbsp;&nbsp;name: <span className="tok-string">'Krunal Unjiya'</span>,</p>
              <p className="about__line">&nbsp;&nbsp;role: <span className="tok-string">'Full Stack Developer'</span>,</p>
              <p className="about__line">&nbsp;&nbsp;stack: <span className="tok-string">'MERN'</span>,</p>
              <p className="about__line">&nbsp;&nbsp;education: <span className="tok-string">'B.Tech IT, 3rd Year'</span>,</p>
              <p className="about__line">&nbsp;&nbsp;experience: <span className="tok-string">'1 year internship'</span>,</p>
              <p className="about__line">&nbsp;&nbsp;currentlyLearning: [<span className="tok-string">'AWS'</span>, <span className="tok-string">'SQL'</span>, <span className="tok-string">'Django'</span>, <span className="tok-string">'Java'</span>],</p>
              <p className="about__line">&nbsp;&nbsp;status: <span className="tok-string">'Open to opportunities'</span>,</p>
              <p>{'}'};</p>
              <p className="about__cursor-line">
                <span className="tok-prompt">&gt;</span> <span className="about__cursor"></span>
              </p>
            </div>
          </div>

          <div className="about__content">
            <p className="about__text">
              I'm a 3rd-year B.Tech Information Technology student and a Full
              Stack Developer specializing in the MERN stack. Over the past
              year, I've gained hands-on internship experience building
              real-world web applications, working across the entire stack
              from database design to deployment.
            </p>
            <p className="about__text">
              My core toolkit includes React.js, Node.js, Express.js, and
              MongoDB, backed by strong fundamentals in JavaScript, HTML,
              CSS, Git, and GitHub. I care about writing clean, maintainable
              code and building interfaces that feel fast and intentional.
            </p>
            <p className="about__text">
              I'm currently expanding into cloud deployment, SQL-based
              backends, and ecosystems like Django/Python and Java, aiming to
              become a versatile engineer who can adapt to whatever stack a
              team needs.
            </p>

            <div className="about__stats">
              {stats.map((stat) => (
                <div className="about__stat-card" key={stat.label}>
                  <div className="about__stat-icon">{stat.icon}</div>
                  <div>
                    <h3 className="about__stat-value">{stat.value}</h3>
                    <p className="about__stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
