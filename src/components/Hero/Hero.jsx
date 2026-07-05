import HeroContent from './HeroContent';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <video autoPlay muted loop playsInline className="hero__video">
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
}

export default Hero;
