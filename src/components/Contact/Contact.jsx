import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Contact.css';

function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:krunal@example.com?subject=Portfolio Contact from ${name}&body=${message} (Reply to: ${email})`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className={`section-container fade-in-section ${isVisible ? 'in-view' : ''}`} ref={ref}>
        <span className="section-tag">Contact</span>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Great Together</span>
        </h2>
        <p className="section-subtitle">
          Have an opportunity, a project, or just want to say hello? My inbox is always open.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card glass-panel">
              <div className="contact__info-icon"><FiMail /></div>
              <div>
                <h4>Email</h4>
                <p>krunal@example.com</p>
              </div>
            </div>

            <div className="contact__info-card glass-panel">
              <div className="contact__info-icon"><FiPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 00000 00000</p>
              </div>
            </div>

            <div className="contact__info-card glass-panel">
              <div className="contact__info-icon"><FiMapPin /></div>
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form className="contact__form glass-panel" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary contact__submit">
              Send Message <FiSend />
            </button>

            {submitted && (
              <p className="contact__success">Your email client should now be open. Thanks for reaching out!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
