"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export function AboutSection() {
  const education = [
    {
      degree: "Master's of Science in Computer Engineering",
      school: "New Jersey Institute of Technology (NJIT)",
      location: "Newark, NJ, USA",
      year: "2024 - 2025",
      description: "Focused on software development, embedded systems, and advanced computer engineering concepts, with hands-on experience in system design, IoT solutions, and hardware–software integration."
    },
    {
      degree: "Bachelor of Engineering in Electronics & Communication",
      school: "Global Academy of Technology",
      location: "Bangalore, India",
      year: "2016 - 2020",
      description: "Focused on electronics, communication systems, and fundamental engineering principles."
    }
  ]

  return (
    <section id="about" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Computer Engineer & Software Developer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
              I’m a computer engineer passionate about building solutions that connect hardware, software, and the cloud. My experience spans enterprise software development and embedded engineering, allowing me to work confidently across the entire tech stack.   </p>
              
              <p>
              At Infosys, I developed scalable SAP applications using Java, JavaScript, SAP Fiori/UI5, and REST APIs, delivering user‑friendly, efficient tools for clients while honing my full‑stack and CI/CD skills. On the embedded side, I’ve designed and programmed IoT and real‑time systems from coding STM32 microcontrollers in Embedded C to building cloud‑connected home automation and sensor‑driven solutions.

              </p>
              
              <p>
              I thrive on bridging devices, data, and users, whether it’s optimizing firmware for performance or crafting intuitive software interfaces and I’m driven to keep learning and creating impactful technology.              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">2+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">SAP Certified Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">IoT & Embedded Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Software Development</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                
                <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-4 w-4 text-primary-600" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {edu.school}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 