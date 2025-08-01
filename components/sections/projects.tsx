"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Cpu } from 'lucide-react'

const projectImages = {
  "iot-dashboard": "/assets/projects/iot-dashboard.jpg",
  "atm-system": "/assets/projects/atm-system.jpg",
  "image-camouflage": "/assets/projects/image-camouflage.jpg",
  "diabetes-prediction": "/assets/projects/diabetes-prediction.jpg",
  "noise-cancellation": "/assets/projects/noise-cancellation.jpg",
  "sap-fiori": "/assets/projects/sap-fiori.jpg",
}

export function ProjectsSection() {
  const projects = [
    {
      title: "SAP CAPM Application",
      description: "Enterprise-grade SAP Fiori application for business process management with responsive UI and backend integration.",
      technologies: ["SAP UI5", "Fiori", "JavaScript", "OData", "SAP BTP", "ABAP"],
      github: null,
      demo: null,
      icon: Database,
      category: "Enterprise",
      image: projectImages["sap-fiori"]
    },
    {
      title: "Image Camouflaging using Genetic Algorithm",
      description: "Advanced image processing system that uses genetic algorithms to create optimal camouflage patterns for military applications.",
      technologies: ["Python", "OpenCV", "NumPy", "Genetic Algorithm", "Image Processing"],
      github: "https://github.com/DaivikGirish/Image_Camouflage_GeneticAlgorithm",
      demo: null,
      icon: Code,
      category: "Machine Learning",
      image: projectImages["image-camouflage"]
    },
    {
      title: "ML Diabetes Health Indicator",
      description: "Machine learning model to predict diabetes risk using patient data with high accuracy and interpretable results.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      github: "https://github.com/DaivikGirish/ML-diabetes-health-indicator",
      demo: null,
      icon: Code,
      category: "Machine Learning",
      image: projectImages["diabetes-prediction"]
    },
    {
      title: "IoT Temperature & Humidity Dashboard",
      description: "Real-time monitoring system using ESP8266 and DHT22 sensors with web-based dashboard for data visualization and alerts.",
      technologies: ["ESP8266", "DHT22", "Node.js", "React", "MongoDB", "WebSocket"],
      github: "https://github.com/DaivikGirish/Arduino_Temperature-Humidity-sensor",
      demo: null,
      icon: Cpu,
      category: "IoT & Embedded",
      image: projectImages["iot-dashboard"]
    },
    {
      title: "Java Servlet ATM System",
      description: "Full-stack ATM banking system with secure authentication, transaction management, and real-time balance updates.",
      technologies: ["Java", "Servlets", "JSP", "MySQL", "HTML/CSS", "JavaScript"],
      github: "https://github.com/DaivikGirish/Java_Servlet_ATM",
      demo: null,
      icon: Database,
      category: "Web Development",
      image: projectImages["atm-system"]
    },
    {
      title: "Audio Noise Cancellation System",
      description: "Real-time audio processing system that filters out background noise using advanced signal processing algorithms.",
      technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Audio Processing", "FFT"],
      github: "https://github.com/DaivikGirish/Audio_Noise_Cancellation",
      demo: null,
      icon: Code,
      category: "Embedded & Signal Processing",
      image: projectImages["noise-cancellation"]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-background-alternate2 dark:bg-background-alternate2Dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover object-center bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-dark-800"
                  loading="lazy"
                  onError={e => (e.currentTarget.style.display = 'none')}
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-dark-800 text-gray-400 text-4xl">
                  <project.icon className="h-10 w-10" />
                </div>
              )}
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more projects?
            </h3>
            <p className="text-primary-100 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/DaivikGirish"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 