
import { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'
import Loader from './ui/Loader'

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className=' bg-indigo-200'>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Landing