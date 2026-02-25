import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiGlobe, FiTarget, FiZap, FiLayers, FiBookOpen } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const businesses = [
  {
    name: 'MounirDev Academy',
    type: 'Online Education',
    icon: <FiBookOpen />,
    description: 'My flagship online coding academy offering comprehensive web development courses, bootcamps, and mentorship programs for aspiring developers across North Africa and beyond.',
    highlights: ['25+ Courses', '500+ Students', 'Live Mentorship', 'Job Placement Support'],
    status: 'Active',
    year: '2021',
  },
  {
    name: 'WebCraft Studio',
    type: 'Web Development Agency',
    icon: <FiLayers />,
    description: 'A boutique web development agency specializing in custom full-stack solutions, e-commerce platforms, and creative web experiences for businesses of all sizes.',
    highlights: ['120+ Projects', 'Full-Stack Team', 'Agile Process', 'Ongoing Support'],
    status: 'Active',
    year: '2020',
  },
  {
    name: 'DevConnect Consulting',
    type: 'Tech Consulting',
    icon: <FiTarget />,
    description: 'Technology consulting firm helping startups and enterprises with tech stack selection, architecture design, code reviews, and digital transformation strategies.',
    highlights: ['Strategy & Planning', 'Architecture Review', 'Team Training', 'Technical Audits'],
    status: 'Active',
    year: '2022',
  },
  {
    name: 'CodeLab Coworking',
    type: 'Community Space',
    icon: <FiUsers />,
    description: 'A developer-focused coworking space and community hub hosting meetups, hackathons, workshops, and networking events for the local tech ecosystem.',
    highlights: ['Weekly Meetups', 'Hackathons', 'Workshop Space', 'Networking Events'],
    status: 'Growing',
    year: '2023',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Businesses() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Businesses</span>
            <h1 className="section-title">Entrepreneurial Ventures</h1>
            <p className="section-subtitle">
              Building businesses that empower developers and transform the web industry
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="businesses-list">
            {businesses.map((biz, i) => (
              <motion.div
                key={i}
                className="card business-card"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="business-header">
                  <div className="business-icon-box">{biz.icon}</div>
                  <div className="business-meta">
                    <h3 className="business-name">{biz.name}</h3>
                    <div className="business-info-row">
                      <span className="business-type">{biz.type}</span>
                      <span className="business-year">Est. {biz.year}</span>
                      <span className={`business-status ${biz.status.toLowerCase()}`}>
                        <FiZap /> {biz.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="business-desc">{biz.description}</p>
                <div className="business-highlights">
                  {biz.highlights.map((h) => (
                    <span key={h} className="tag">{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Businesses
