import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Bio from './Components/Bio'
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'
import Education from './Components/Education'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='h-full relative overflow-y-hidden antialiased'>
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-image'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Navbar />
        <Hero />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <ContactForm />
        <Footer/>
      </div>
    </div>)
}

export default App