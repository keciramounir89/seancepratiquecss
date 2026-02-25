import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiMonitor, FiServer, FiDatabase, FiLayout, FiCloud, FiBook, FiUsers, FiAward } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import HeroScene from '../components/HeroScene'
import './Home.css'

const services = [
  { icon: <FiMonitor />, title: 'Frontend Development', desc: 'Building modern, responsive UIs with React, Next.js, Vue.js, and cutting-edge CSS frameworks.' },
  { icon: <FiServer />, title: 'Backend Development', desc: 'Scalable APIs and server-side solutions with Node.js, Express, and Python.' },
  { icon: <FiDatabase />, title: 'Database Design', desc: 'Efficient data architecture with MongoDB, PostgreSQL, MySQL, and Redis.' },
  { icon: <FiLayout />, title: 'UI/UX Design', desc: 'User-centered design with Figma, creating intuitive and beautiful interfaces.' },
  { icon: <FiCloud />, title: 'DevOps & Deployment', desc: 'CI/CD pipelines, Docker, cloud deployment on AWS, Vercel, and more.' },
  { icon: <FiCode />, title: '3D Web Experiences', desc: 'Immersive 3D graphics with Three.js, React Three Fiber, and WebGL.' },
]

const stats = [
  { icon: <FiUsers />, number: '500+', label: 'Students Taught' },
  { icon: <FiCode />, number: '120+', label: 'Projects Completed' },
  { icon: <FiBook />, number: '25+', label: 'Courses Created' },
  { icon: <FiAward />, number: '50+', label: 'Happy Clients' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
}

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
}

function Home() {
  return (
    <PageTransition>
      <section className="hero">
        <div className="hero-bg-scene">
          <HeroScene />
        </div>
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="hero-greeting">
              <span className="code-bracket">&lt;</span> Hello World <span className="code-bracket">/&gt;</span>
            </span>
            <h1 className="hero-title">
              I'm <span className="gradient-text">Mounir</span>
            </h1>
            <h2 className="hero-subtitle">
              Full-Stack Developer <span className="amp">&</span> Course Instructor
            </h2>
            <p className="hero-desc">
              I build modern web experiences and teach the next generation of developers.
              Specializing in MERN, MEVN, MEAN stacks with a passion for 3D web and creative coding.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses <FiArrowRight />
              </Link>
              <Link to="/contact-me" className="btn btn-outline">
                Hire Me
              </Link>
            </div>
            <div className="hero-tech-tags">
              {['React', 'Node.js', 'Three.js', 'MongoDB', 'TypeScript', 'Next.js'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <motion.div className="stats-grid" {...stagger}>
            {stats.map((stat, i) => (
              <motion.div key={i} className="stat-card" {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <span className="section-label">// What I Do</span>
            <h2 className="section-title">Services & Expertise</h2>
            <p className="section-subtitle">
              From frontend magic to backend architecture, I deliver full-stack solutions
            </p>
          </motion.div>
          <div className="grid-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card service-card"
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div className="cta-box" {...fadeUp}>
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-desc">
              Whether you need a stunning website, want to learn web development,
              or have a project idea - let's make it happen.
            </p>
            <div className="cta-actions">
              <Link to="/contact-me" className="btn btn-primary">
                Get in Touch <FiArrowRight />
              </Link>
              <Link to="/clients" className="btn btn-outline">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
