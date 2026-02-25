import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone, FiClock, FiCheck } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', type: 'general', message: '' })
  }

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// Contact Me</span>
            <h1 className="section-title">Let's Work Together</h1>
            <p className="section-subtitle">
              Have a project in mind? Want to collaborate? Drop me a message
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <motion.div className="contact-info-panel" {...fadeUp} transition={{ duration: 0.6 }}>
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-desc">
                I'm always open to discussing new projects, creative ideas, teaching opportunities,
                or partnerships. Feel free to reach out!
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiMail /></div>
                  <div>
                    <h4>Email</h4>
                    <span>mounir@example.com</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiMapPin /></div>
                  <div>
                    <h4>Location</h4>
                    <span>Algeria</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiPhone /></div>
                  <div>
                    <h4>Phone</h4>
                    <span>Available on request</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiClock /></div>
                  <div>
                    <h4>Availability</h4>
                    <span>Mon - Fri, 9am - 6pm CET</span>
                  </div>
                </div>
              </div>

              <div className="contact-services-list">
                <h4>I can help with:</h4>
                <ul>
                  <li><FiCheck /> Custom Web Development</li>
                  <li><FiCheck /> Course Creation & Teaching</li>
                  <li><FiCheck /> Technical Consulting</li>
                  <li><FiCheck /> Code Reviews & Mentorship</li>
                  <li><FiCheck /> UI/UX Design</li>
                </ul>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Inquiry Type</label>
                  <select id="type" name="type" value={formData.type} onChange={handleChange}>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project/Hire Me</option>
                    <option value="course">Course Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="mentorship">Mentorship</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={submitted}>
                {submitted ? (
                  <><FiCheck /> Message Sent!</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default ContactMe
