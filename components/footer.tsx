"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Shield } from 'lucide-react'
import { SOCIAL_LINKS, CONTACT_INFO, PERSONAL_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Embedded Systems',
    'IoT Development',
    'SAP Applications',
    'Full-Stack Development',
    'Web Development',
    'System Integration',
    'Data Analysis',
    'Cloud Solutions',
  ]

  const socialLinks = [
    {
      name: 'Portfolio',
      href: '#',
      icon: Shield,
    },
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.GITHUB,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.LINKEDIN,
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: `mailto:${SOCIAL_LINKS.EMAIL}`,
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </motion.button>

      <div className="container-custom section-padding pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-primary-400 mb-4">Portfolio</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A showcase of my work, skills, and experience in computer engineering and software development. 
              Building innovative solutions that bridge hardware and software for real-world problems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <link.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-primary-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-primary-400 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300 text-sm">+1 (862) 215-1490</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.LOCATION}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} {PERSONAL_INFO.NAME}. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 