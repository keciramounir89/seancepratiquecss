import { Link } from 'react-router-dom'
import { FiGithub, FiInstagram, FiFacebook, FiLinkedin, FiCode, FiHeart } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FiCode className="footer-logo-icon" />
              <span>Mounir<span className="logo-accent">.dev</span></span>
            </Link>
            <p className="footer-desc">
              Full-stack web developer & course instructor. Building modern web
              experiences and empowering the next generation of developers.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/courses" className="footer-link">Courses</Link>
            <Link to="/clients" className="footer-link">Clients</Link>
            <Link to="/contact-me" className="footer-link">Contact</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <span className="footer-link">Web Development</span>
            <span className="footer-link">UI/UX Design</span>
            <span className="footer-link">Course Creation</span>
            <span className="footer-link">Consulting</span>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Tech Stack</h4>
            <span className="footer-link">React / Next.js</span>
            <span className="footer-link">Node.js / Express</span>
            <span className="footer-link">MongoDB / PostgreSQL</span>
            <span className="footer-link">Three.js / WebGL</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Mounir. Crafted with{' '}
            <FiHeart className="heart-icon" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
