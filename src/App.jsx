import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import Clients from './pages/Clients'
import Partners from './pages/Partners'
import Students from './pages/Students'
import Businesses from './pages/Businesses'
import Courses from './pages/Courses'
import Contacts from './pages/Contacts'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/students" element={<Students />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
