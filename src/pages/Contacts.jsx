import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiYoutube, FiTwitter, FiMail, FiGlobe, FiExternalLink, FiMessageCircle } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const socials = [
  {
    platform: 'GitHub',
    icon: <FiGithub />,
    handle: '@mounirdev',
    url: 'https://github.com',
    description: 'Check out my open-source projects, code snippets, and contributions to the developer community.',
    color: '#f0f6fc',
    bgColor: 'rgba(240, 246, 252, 0.1)',
  },
  {
    platform: 'LinkedIn',
    icon: <FiLinkedin />,
    handle: 'Mounir Developer',
    url: 'https://linkedin.com',
    description: 'Connect with me professionally. Let\'s discuss opportunities, collaborations, and industry insights.',
    color: '#0a66c2',
    bgColor: 'rgba(10, 102, 194, 0.1)',
  },
  {
    platform: 'YouTube',
    icon: <FiYoutube />,
    handle: 'MounirDev',
    url: 'https://youtube.com',
    description: 'Subscribe for web development tutorials, coding tips, project walkthroughs, and tech reviews.',
    color: '#ff0000',
    bgColor: 'rgba(255, 0, 0, 0.1)',
  },
  {
    platform: 'Twitter / X',
    icon: <FiTwitter />,
    handle: '@mounirdev',
    url: 'https://twitter.com',
    description: 'Follow for daily dev tips, tech news, and behind-the-scenes of my development workflow.',
    color: '#1da1f2',
    bgColor: 'rgba(29, 161, 242, 0.1)',
  },
  {
    platform: 'Instagram',
    icon: <FiInstagram />,
    handle: '@mounir.develops',
    url: 'https://instagram.com',
    description: 'Follow my coding journey, workspace setups, and developer lifestyle content.',
    color: '#e4405f',
    bgColor: 'rgba(228, 64, 95, 0.1)',
  },
  {
    platform: 'Facebook',
    icon: <FiFacebook />,
    handle: 'Mounir Develops',
    url: 'https://facebook.com',
    description: 'Join our Facebook community group for discussions, Q&A, and exclusive content.',
    color: '#1877f2',
    bgColor: 'rgba(24, 119, 242, 0.1)',
  },
  {
    platform: 'Email',
    icon: <FiMail />,
    handle: 'mounir@example.com',
    url: 'mailto:mounir@example.com',
    description: 'For business inquiries, course questions, and collaboration proposals.',
    color: '#00d4ff',
    bgColor: 'rgba(0, 212, 255, 0.1)',
  },
  {
    platform: 'Website',
    icon: <FiGlobe />,
    handle: 'mounirdevelops.vercel.app',
    url: 'https://mounirdevelops.vercel.app',
    description: 'My official portfolio showcasing all my projects, courses, and professional work.',
    color: '#7b2ff7',
    bgColor: 'rgba(123, 47, 247, 0.1)',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Contacts() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Contacts</span>
            <h1 className="section-title">Connect With Me</h1>
            <p className="section-subtitle">
              Find me across the web - follow, subscribe, and join the developer community
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card contact-link-card"
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="contact-link-header">
                  <div className="contact-link-icon" style={{ background: social.bgColor, color: social.color }}>
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="contact-link-platform">{social.platform}</h3>
                    <span className="contact-link-handle" style={{ color: social.color }}>{social.handle}</span>
                  </div>
                  <FiExternalLink className="contact-link-arrow" />
                </div>
                <p className="contact-link-desc">{social.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contacts
