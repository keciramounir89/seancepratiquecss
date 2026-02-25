import { motion } from 'framer-motion'
import { FiClock, FiUsers, FiStar, FiPlay, FiBookOpen, FiAward } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import './Pages.css'

const courses = [
  {
    title: 'Full-Stack MERN Bootcamp',
    level: 'Beginner to Advanced',
    duration: '40+ hours',
    students: 180,
    rating: 4.9,
    modules: 12,
    description: 'Master MongoDB, Express.js, React, and Node.js from scratch. Build 5 real-world projects including an e-commerce platform and social media app.',
    topics: ['React Hooks', 'REST APIs', 'MongoDB', 'JWT Auth', 'Deployment'],
    featured: true,
  },
  {
    title: 'React & Next.js Masterclass',
    level: 'Intermediate',
    duration: '30+ hours',
    students: 150,
    rating: 4.8,
    modules: 10,
    description: 'Deep dive into modern React patterns, Next.js 14, server components, App Router, and full-stack React development.',
    topics: ['Server Components', 'App Router', 'SSR/SSG', 'API Routes', 'Prisma'],
    featured: true,
  },
  {
    title: 'Node.js Backend Mastery',
    level: 'Intermediate',
    duration: '25+ hours',
    students: 120,
    rating: 4.9,
    modules: 8,
    description: 'Build scalable backend systems with Node.js, Express, authentication, file uploads, real-time features, and microservices architecture.',
    topics: ['Express.js', 'WebSockets', 'Microservices', 'Redis', 'Testing'],
    featured: false,
  },
  {
    title: 'Three.js & Creative Coding',
    level: 'Intermediate to Advanced',
    duration: '20+ hours',
    students: 80,
    rating: 4.7,
    modules: 8,
    description: 'Create stunning 3D web experiences with Three.js, React Three Fiber, shaders, and physics simulations.',
    topics: ['Three.js', 'R3F', 'Shaders', 'Physics', 'Post-processing'],
    featured: false,
  },
  {
    title: 'Advanced CSS & Animations',
    level: 'All Levels',
    duration: '18+ hours',
    students: 200,
    rating: 4.8,
    modules: 9,
    description: 'Master modern CSS including Grid, Flexbox, custom properties, animations, Tailwind CSS, and responsive design patterns.',
    topics: ['CSS Grid', 'Flexbox', 'Animations', 'Tailwind', 'Sass'],
    featured: false,
  },
  {
    title: 'TypeScript for React Developers',
    level: 'Intermediate',
    duration: '15+ hours',
    students: 90,
    rating: 4.8,
    modules: 7,
    description: 'Add type safety to your React apps. Learn TypeScript fundamentals, generics, advanced types, and React-specific patterns.',
    topics: ['TypeScript', 'Generics', 'React Types', 'Zod', 'tRPC'],
    featured: false,
  },
  {
    title: 'Vue.js & Nuxt.js Complete Guide',
    level: 'Beginner to Advanced',
    duration: '28+ hours',
    students: 95,
    rating: 4.7,
    modules: 10,
    description: 'Learn Vue 3 Composition API, Pinia state management, Nuxt 3, and build full-stack applications with the MEVN stack.',
    topics: ['Vue 3', 'Composition API', 'Pinia', 'Nuxt 3', 'Vuetify'],
    featured: false,
  },
  {
    title: 'DevOps & Cloud Deployment',
    level: 'Intermediate',
    duration: '22+ hours',
    students: 70,
    rating: 4.9,
    modules: 8,
    description: 'Learn Docker, CI/CD pipelines, AWS/GCP deployment, monitoring, and infrastructure as code for web developers.',
    topics: ['Docker', 'GitHub Actions', 'AWS', 'Nginx', 'Monitoring'],
    featured: false,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
}

function Courses() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.div className="section-header" {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="section-label">// My Courses</span>
            <h1 className="section-title">Learn Web Development</h1>
            <p className="section-subtitle">
              Comprehensive, project-based courses designed to take you from beginner to professional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                className={`card course-card ${course.featured ? 'featured' : ''}`}
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                {course.featured && <span className="featured-badge"><FiAward /> Featured</span>}
                <div className="course-level">{course.level}</div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>

                <div className="course-meta">
                  <span><FiClock /> {course.duration}</span>
                  <span><FiUsers /> {course.students} students</span>
                  <span><FiBookOpen /> {course.modules} modules</span>
                  <span><FiStar className="star-filled" /> {course.rating}</span>
                </div>

                <div className="course-topics">
                  {course.topics.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <button className="btn btn-primary course-btn">
                  <FiPlay /> Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Courses
