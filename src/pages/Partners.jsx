import { motion } from 'framer-motion'
import { FiLink, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const partners = [
  {
    name: 'CloudStack Solutions',
    type: 'Technology Partner',
    logo: 'CS',
    description: 'Strategic cloud infrastructure partner providing scalable hosting and DevOps solutions for our client projects.',
    benefits: ['Cloud Infrastructure', 'Auto-scaling', 'CDN Services', '24/7 Support'],
    color: '#00d4ff',
  },
  {
    name: 'DesignCraft Studio',
    type: 'Creative Partner',
    logo: 'DC',
    description: 'Collaborative design agency specializing in UI/UX, brand identity, and motion design for web projects.',
    benefits: ['UI/UX Design', 'Brand Identity', 'Motion Graphics', 'Prototyping'],
    color: '#7b2ff7',
  },
  {
    name: 'DataPulse Analytics',
    type: 'Data Partner',
    logo: 'DP',
    description: 'Advanced analytics and business intelligence partner for data-driven web applications.',
    benefits: ['Data Analytics', 'BI Dashboards', 'ML Integration', 'Real-time Reports'],
    color: '#00d4ff',
  },
  {
    name: 'SecureNet Pro',
    type: 'Security Partner',
    logo: 'SN',
    description: 'Cybersecurity partner ensuring all our web applications meet the highest security standards.',
    benefits: ['Penetration Testing', 'SSL/TLS', 'Compliance', 'Security Audits'],
    color: '#7b2ff7',
  },
  {
    name: 'ContentForge Media',
    type: 'Content Partner',
    logo: 'CF',
    description: 'Content strategy and production partner for educational content, blogs, and course materials.',
    benefits: ['Content Strategy', 'Video Production', 'Copywriting', 'SEO'],
    color: '#00d4ff',
  },
  {
    name: 'PayFlow Systems',
    type: 'Payment Partner',
    logo: 'PF',
    description: 'Payment processing partner integrating seamless checkout and subscription billing into our platforms.',
    benefits: ['Payment Gateway', 'Subscription Billing', 'Invoicing', 'Multi-currency'],
    color: '#7b2ff7',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Partners() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Partners</span>
            <h1 className="section-title">Strategic Partnerships</h1>
            <p className="section-subtitle">
              Working with industry leaders to deliver exceptional results
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                className="card partner-card"
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="partner-header">
                  <div className="partner-logo-box" style={{ borderColor: partner.color }}>
                    <span style={{ color: partner.color }}>{partner.logo}</span>
                  </div>
                  <span className="partner-type">{partner.type}</span>
                </div>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-desc">{partner.description}</p>
                <ul className="partner-benefits">
                  {partner.benefits.map((b) => (
                    <li key={b}>
                      <FiCheck className="check-icon" /> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Partners
