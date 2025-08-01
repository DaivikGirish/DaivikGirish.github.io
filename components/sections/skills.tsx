"use client"

import { motion } from 'framer-motion'

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        "Java", "Python", "C", "C++", "JavaScript", "Embedded C"
      ]
    },
    {
      name: "AI, ML & Signal Processing",
      skills: [
        "Machine Learning", "PyTorch", "Computer Vision",
        "FIR/IIR Filters", "Genetic Algorithms", "Signal Processing",
        "Computational Intelligence", "Edge Optimization"
      ]
    },
    {
      name: "Web, Cloud & Database Development",
      skills: [
        "HTML/CSS", "React", "Node.js", "Flask (Python)", 
        "SAP UI5", "SAP Fiori", "RESTful APIs", 
        "SAP BTP", "AWS", "Google Cloud Platform (GCP)", 
        "MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL"
      ]
    },
    {
      name: "Tools, Workflow & Practices",
      skills: [
        "Git", "GitHub", "Jira", "Postman", "Jenkins",
        "Logic Analyzers", "Debugging", "Agile Methodologies", 
        "Unit Testing", "CI/CD"
      ]
    },
    {
      name: "Embedded Systems & Hardware",
      skills: [
        "STM32 (F4 Series)", "STM32CubeIDE", "CMSIS-DSP",
        "Real-Time Processing", "Interrupts", "DMA", "ADC", 
        "USART", "I2C", "SPI", "GPIO Handling", 
        "ESP8266", "Raspberry Pi", "MAX9814", "DHT22", "ST-Link"
      ]
    },
    {
      name: "Connectivity & IoT",
      skills: [
        "IoT Connectivity (MQTT, WiFi – ESP8266)",
        "USB/Serial Communication", "Data Logging",
        "Buffer Management", "Latency Optimization", "Power-Efficient Design"
      ]
    }    
  ]

  return (
    <section id="skills" className="section-padding bg-background-alternate2 dark:bg-background-alternate2Dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in creating end-to-end solutions that bridge hardware and software. 
              From developing embedded systems and IoT applications to building scalable web applications, 
              I leverage my diverse skill set to deliver innovative technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies & Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 