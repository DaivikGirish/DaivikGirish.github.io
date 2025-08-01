"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Systems Engineer",
      company: "Infosys",
      location: "Bangalore, India",
      period: "May 2021 - November 2023",
      description: "Leading SAP application development and implementation projects with focus on enterprise solutions.",
      achievements: [
        "Led development of multiple SAP CAPM applications, improving user productivity by 20% and reducing delivery timelines by 30% using Agile sprints.",
        "Built and integrated secure authentication systems using SAP XSUAA and SAP Launchpad, reducing login issues by 40% and improving user experience.",
        "Optimized large-scale datasets in SAP HANA & SQL, boosting application performance by 15% and improving test coverage by 28%.",
        "Resolved 30+ critical bugs and implemented iterative enhancements, significantly improving system stability and maintainability.",
        "Collaborated with cross-functional teams using GitHub, Jira, Jenkins, and Postman for CI/CD pipelines and API testing.",
        "Facilitated code reviews, sprint planning, and documentation to streamline onboarding and ensure long-term maintainability of SAP BTP applications."
      ],
      technologies: ["Java", "SAP CAPM", "SAP UI5", "SAP BTP","SAP Launchpad", "Fiori", "JavaScript", "OData", "ABAP", "Agile", "REST APIs", "CI/CD"]
    },
    {
      title: "Software Engineer Intern",
      company: "Knowx Innovations",
      location: "Bangalore, India",
      period: "July 2019 - August 2019",
      description: "Contributed to IoT home automation projects and embedded systems development.",
      achievements: [
        "Developed an IoT home automation system using Raspberry Pi, Python, and sensors, enabling real-time control and monitoring of devices.",
        "Integrated the solution with Google Cloud Platform (GCP) and Firebase, enabling seamless data syncing and multi-device access.",
        "Improved system efficiency by 15% by optimizing data transfer logic, reducing latency during real-time command execution.",
        "Designed modular Python scripts for device control, sensor processing, and cloud communications for scalability and maintainability.",
        "Created detailed technical documentation covering system architecture and workflows to support future enhancements."
      ],
      technologies: ["GCP","IoT", "ESP8266", "Raspberry Pi", "Python", "C++", "MQTT", "REST APIs"]
    }
  ]

  const certifications = [
    {
      name: "Docker Essentials",
      issuer: "IBM",
      year: "April 2025",
      description: "Gained practical knowledge of Docker containers, image creation, container lifecycle, and deploying containerized applications using Docker CLI and Docker Hub."
    },
    {
      name: "JPMorgan Chase Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase",
      year: "February 2025",
      description: "Completed hands-on simulation involving interface development, data visualization, and secure backend communication, mimicking real-world tasks of JPMorgan software engineers using tools like React, Python, and REST APIs."
    }
  ]

  return (
    <section id="experience" className="section-padding bg-background-light dark:bg-background-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <Building className="h-6 w-6 text-primary-600" />
              Work Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  
                  <div className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <Award className="h-6 w-6 text-primary-600" />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gradient-to-br from-primary-600 to-blue-600 p-6 rounded-lg text-white"
            >
              <h4 className="font-bold text-lg mb-3">Core Competencies</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>SAP Application Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>IoT & Embedded Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Agile Project Management</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 