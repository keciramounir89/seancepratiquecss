import { motion } from 'framer-motion'
import { FiExternalLink, FiStar, FiGlobe } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const clients = [
  {
    name: 'TechVision Labs',
    industry: 'SaaS Platform',
    logo: 'TV',
    description: 'Built a full-stack SaaS dashboard with real-time analytics, user management, and payment integration using React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    rating: 5,
    testimonial: '"Mounir delivered an exceptional product that exceeded our expectations. His attention to detail is remarkable."',
  },
  {
    name: 'GreenLeaf Organics',
    industry: 'E-Commerce',
    logo: 'GL',
    description: 'Developed a modern e-commerce platform with inventory management, order tracking, and a beautiful storefront.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'AWS'],
    rating: 5,
    testimonial: '"Our online sales increased by 300% after the new platform launch. Highly recommended!"',
  },
  {
    name: 'MedConnect Health',
    industry: 'Healthcare',
    logo: 'MC',
    description: 'Created a patient portal with appointment scheduling, telemedicine integration, and secure medical records.',
    tech: ['React', 'Express', 'MongoDB', 'WebRTC'],
    rating: 5,
    testimonial: '"The platform has transformed how we interact with patients. Seamless and secure."',
  },
  {
    name: 'EduSphere Academy',
    industry: 'EdTech',
    logo: 'ES',
    description: 'Designed and built an LMS with video streaming, progress tracking, quizzes, and certificate generation.',
    tech: ['Vue.js', 'Node.js', 'Redis', 'Docker'],
    rating: 5,
    testimonial: '"Our students love the new learning platform. The UX is intuitive and engaging."',
  },
  {
    name: 'UrbanNest Realty',
    industry: 'Real Estate',
    logo: 'UN',
    description: 'Built a property listing platform with 3D virtual tours, map integration, and lead management system.',
    tech: ['React', 'Three.js', 'Node.js', 'PostgreSQL'],
    rating: 4,
    testimonial: '"The 3D virtual tours feature set us apart from competitors. Brilliant work!"',
  },
  {
    name: 'ByteForge Studios',
    industry: 'Creative Agency',
    logo: 'BF',
    description: 'Developed an interactive portfolio and project showcase with animations, CMS integration, and client portal.',
    tech: ['Next.js', 'GSAP', 'Sanity', 'Vercel'],
    rating: 5,
    testimonial: '"Mounir brought our creative vision to life with stunning web experiences."',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Clients() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Clients</span>
            <h1 className="section-title">Trusted by Leading Brands</h1>
            <p className="section-subtitle">
              I've partnered with amazing businesses to deliver high-quality web solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                className="card client-card"
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="client-header">
                  <div className="client-logo-box">
                    <span className="client-logo-text">{client.logo}</span>
                  </div>
                  <div className="client-info">
                    <h3 className="client-name">{client.name}</h3>
                    <span className="client-industry">
                      <FiGlobe /> {client.industry}
                    </span>
                  </div>
                  <div className="client-rating">
                    {[...Array(client.rating)].map((_, j) => (
                      <FiStar key={j} className="star-filled" />
                    ))}
                  </div>
                </div>
                <p className="client-desc">{client.description}</p>
                <div className="client-tags">
                  {client.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <blockquote className="client-quote">{client.testimonial}</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Clients
