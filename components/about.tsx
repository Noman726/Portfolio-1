"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img src="/about.jpeg?height=600&width=600" alt="Profile" className="object-cover w-full h-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-4 rounded-lg shadow-lg"
            >
              <p className="text-lg font-bold">2+ Years Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-slate-600">Full Stack Developer & UI/UX Enthusiast</p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p> I'm a 20-year-old developer passionate about building problem-solving, functional, and user-friendly web applications, software, and mobile apps. 
                With two years of hands-on experience, I've contributed to a range of projects—from small business websites to advanced web platforms. </p> 
              <p> My skill set includes modern frontend technologies such as React, Next.js, and TypeScript, as well as backend tools like Python, Firebase, MySQL, and MongoDB. 
                I have a solid understanding of UI/UX design principles and take pride in writing clean, maintainable code while delivering smooth, intuitive user experiences. </p> 
              <p> Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and engaging with the tech community through events and meetups. 
                In my free time, I enjoy swimming, biking, working out at the gym, and learning calisthenics. I'm also planning to pursue modeling as a creative hobby. </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
