"use client"

import { motion } from "framer-motion"
import { Laptop, Layers, Smartphone, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { icon: <Laptop className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "HTML, CSS, JavaScript, React, Next.js" },
    { icon: <Layers className="w-8 h-8 text-blue-400" />, title: "UI Frameworks", description: "Bootstrap, Tailwind CSS" },
    { icon: <Smartphone className="w-8 h-8 text-purple-500" />, title: "Responsive Design", description: "Mobile-first, Flexbox, Grid" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: "Optimizing Performance, Lazy Loading" }
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm Mohamed Samy, a passionate Frontend Developer focused on creating beautiful and functional web
              applications. I specialize in HTML, CSS, JavaScript, React, and Next.js, building fast, responsive, and
              accessible user interfaces.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I also work with popular frameworks like Bootstrap and Tailwind CSS, ensuring consistent design across
              various devices and screen sizes. I focus on performance optimization to deliver an optimal user
              experience.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:translate-y-4 hover:z-10"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
