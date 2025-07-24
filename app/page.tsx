import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}
