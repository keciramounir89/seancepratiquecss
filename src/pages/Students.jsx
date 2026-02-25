import { motion } from 'framer-motion'
import { FiAward, FiMapPin, FiBookOpen, FiTrendingUp } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const students = [
  {
    name: 'Ahmed Benali',
    avatar: 'AB',
    course: 'Full-Stack MERN Bootcamp',
    location: 'Algiers, Algeria',
    outcome: 'Junior Developer at TechCorp',
    testimonial: '"Mounir\'s teaching style made complex concepts easy to understand. I went from zero to landing my first dev job in 4 months!"',
    rating: 5,
  },
  {
    name: 'Sara Hadid',
    avatar: 'SH',
    course: 'React & Next.js Masterclass',
    location: 'Casablanca, Morocco',
    outcome: 'Frontend Engineer at StartupHub',
    testimonial: '"The hands-on projects were incredible. I built a real portfolio that impressed recruiters."',
    rating: 5,
  },
  {
    name: 'Youssef El Amrani',
    avatar: 'YA',
    course: 'Node.js Backend Development',
    location: 'Tunis, Tunisia',
    outcome: 'Backend Developer at CloudSoft',
    testimonial: '"The API design patterns and database optimization techniques I learned were exactly what the industry needs."',
    rating: 5,
  },
  {
    name: 'Fatima Zahra',
    avatar: 'FZ',
    course: 'Advanced CSS & Three.js',
    location: 'Rabat, Morocco',
    outcome: 'Creative Developer at DesignLab',
    testimonial: '"Learning Three.js opened a whole new world for me. I now create immersive web experiences daily."',
    rating: 5,
  },
  {
    name: 'Karim Mansour',
    avatar: 'KM',
    course: 'Full-Stack MEVN Bootcamp',
    location: 'Oran, Algeria',
    outcome: 'Full-Stack Dev at WebAgency',
    testimonial: '"The course was well-structured, from basics to advanced deployment. Best investment in my career."',
    rating: 5,
  },
  {
    name: 'Nour Cherif',
    avatar: 'NC',
    course: 'TypeScript & Testing Masterclass',
    location: 'Constantine, Algeria',
    outcome: 'Software Engineer at FinTech Co',
    testimonial: '"Mounir taught us production-grade practices. My code quality improved dramatically after this course."',
    rating: 4,
  },
  {
    name: 'Leila Bouzid',
    avatar: 'LB',
    course: 'UI/UX & Frontend Development',
    location: 'Sfax, Tunisia',
    outcome: 'UI/UX Developer at AgencyX',
    testimonial: '"The design-to-code workflow Mounir taught us is exactly how top agencies work. Game-changer!"',
    rating: 5,
  },
  {
    name: 'Omar Taha',
    avatar: 'OT',
    course: 'DevOps & Cloud Deployment',
    location: 'Marrakech, Morocco',
    outcome: 'DevOps Engineer at ScaleUp',
    testimonial: '"From Docker to CI/CD to AWS - this course covered everything I needed for my DevOps career."',
    rating: 5,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Students() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Students</span>
            <h1 className="section-title">Student Success Stories</h1>
            <p className="section-subtitle">
              Empowering developers worldwide to launch their tech careers
            </p>
          </motion.div>

          <motion.div className="student-stats" {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="mini-stat">
              <FiBookOpen className="mini-stat-icon" />
              <div>
                <strong>500+</strong>
                <span>Students Enrolled</span>
              </div>
            </div>
            <div className="mini-stat">
              <FiTrendingUp className="mini-stat-icon" />
              <div>
                <strong>92%</strong>
                <span>Employment Rate</span>
              </div>
            </div>
            <div className="mini-stat">
              <FiAward className="mini-stat-icon" />
              <div>
                <strong>4.9/5</strong>
                <span>Avg. Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {students.map((student, i) => (
              <motion.div
                key={i}
                className="card student-card"
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="student-header">
                  <div className="student-avatar">{student.avatar}</div>
                  <div className="student-info">
                    <h3 className="student-name">{student.name}</h3>
                    <span className="student-location">
                      <FiMapPin /> {student.location}
                    </span>
                  </div>
                </div>
                <div className="student-course">
                  <FiBookOpen /> {student.course}
                </div>
                <blockquote className="student-quote">{student.testimonial}</blockquote>
                <div className="student-outcome">
                  <FiTrendingUp className="outcome-icon" />
                  <span>{student.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Students
