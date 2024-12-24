import Hero from './components/Hero'
import MySkill from './components/MySkill'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
      </div>
      <MySkill />
    </>
  )
}

export default App
