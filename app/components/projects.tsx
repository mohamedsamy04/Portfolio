"use client";

import { motion } from "framer-motion";
import { GitlabIcon as GitHub } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Team Store",
      description: "An e-commerce platform for selling electronics, including headphones, phones, iPads, and iPhones.",
      link: "https://mohamedsamy04.github.io/store/",
      image: "/project1.png"
    },
    {
      title: "Pizza",
      description: "A great website for a pizza restaurant offering a variety of delicious pizzas. Perfect for pizza lovers looking for an easy and enjoyable online ordering experience.",
      link: "https://mohamedsamy04.github.io/Pizza/",
      image: "/projects2.png"
    },
    {
        title: "Coffee Shop",
        description: "A website for a cozy coffee shop offering a variety of drinks and a comfortable atmosphere for coffee lovers.",
        link: "https://mohamedsamy04.github.io/Coffee-Shop/",
        image: "/project3.png"
      },
      {
        title: "Sales Management System",
        description: "A powerful sales management system to streamline sales processes, track performance, and manage customer relationships efficiently.",
        link: "https://mohamedsamy04.github.io/SmartMoon/",
        image: "/project4.png"
      },
      {
        title: "Caring Bridge",
        description: "A platform dedicated to donations for orphanages, allowing users to contribute and make a difference in the lives of children in need.",
        link: "https://www.linkedin.com/posts/mo72medsamy_orphanagesupport-donations-charity-activity-7196536727321116673-h8Xy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPqHGoBBz6fjQGzaaf773o4-j1zt3cj2jY",
        image: "/project5.png"
      },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:rotate-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200"
                >
                  <GitHub className="w-5 h-5 mr-2" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
