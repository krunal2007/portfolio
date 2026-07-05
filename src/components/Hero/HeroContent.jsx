import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { fadeIn } from '../../lib/motion';
import useTypewriter from '../../hooks/useTypewriter';

function HeroContent() {
  const [typedName, isNameDone] = useTypewriter('Krunal Unjiya', 90, 600);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hero-content"
    >
      <div className="hero-content__left">
        <motion.div variants={fadeIn(0)} className="hero-content__badge">
          <HiSparkles className="hero-content__badge-icon" />
          <span>Fullstack Developer Portfolio</span>
        </motion.div>

        <motion.p variants={fadeIn(0.15)} className="hero-content__name">
          Hi, I'm{' '}
          <span className="hero-content__name-highlight">
            {typedName}
            <span className={`hero-content__caret ${isNameDone ? 'hero-content__caret--blink' : ''}`}>|</span>
          </span>
        </motion.p>

        <motion.div variants={fadeIn(0.3)} className="hero-content__heading-wrap">
          <h1 className="hero-content__heading">
            Providing{' '}
            <span className="hero-content__heading-gradient">the best</span>{' '}
            project experience.
          </h1>
        </motion.div>

        <motion.p variants={fadeIn(0.45)} className="hero-content__paragraph">
          I'm a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.div variants={fadeIn(0.6)} className="hero-content__actions">
          <a href="#about" className="hero-content__cta">
            <span>Learn more</span>
            <FiArrowRight className="hero-content__cta-icon" />
          </a>
          <a href="/resume.pdf" download className="hero-content__cta hero-content__cta--secondary">
            <span>Resume</span>
            <FiDownload className="hero-content__cta-icon" />
          </a>
        </motion.div>
      </div>

      <motion.div variants={fadeIn(0.4)} className="hero-content__right">
        <img
          src="/hero-bg.svg"
          alt="Tech stack icons"
          className="hero-content__image"
          draggable="false"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
