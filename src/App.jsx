import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MyResume from './components/MyResume'
import MySkill from './components/MySkill'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
      </div>
      <MySkill />
      <Projects />
      <MyResume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
