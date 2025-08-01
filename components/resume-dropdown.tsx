"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronDown, FileText, Code, Cpu } from 'lucide-react'
import { RESUME_OPTIONS } from '@/lib/constants'

type ResumeOption = typeof RESUME_OPTIONS[number]

export function ResumeDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDownload = async (resume: ResumeOption) => {
    try {
      // Fetch the file as a blob
      const response = await fetch(resume.file)
      const blob = await response.blob()
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob)
      
      // Create a temporary link element
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = resume.name.replace(/\s+/g, '_') + '.pdf'
      
      // Append to body, click, and clean up
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl)
      
      // Close dropdown after download
      setIsOpen(false)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback to direct link
      const link = document.createElement('a')
      link.href = resume.file
      link.download = resume.name.replace(/\s+/g, '_') + '.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Close dropdown after download
      setIsOpen(false)
    }
  }

  const getIcon = (category: string) => {
    switch (category) {
      case 'SDE':
        return <Code className="h-4 w-4" />
      case 'Embedded':
        return <Cpu className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <Download className="h-5 w-5" />
        <span>View Resume</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-[9999]">
          <div className="p-2">
            {RESUME_OPTIONS.map((resume, index) => (
              <button
                key={resume.id}
                onClick={() => handleDownload(resume)}
                className="w-full flex items-start gap-3 p-3 rounded-md text-left transition-colors duration-200 mb-1 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300"
              >
                <div className="p-2 rounded-md flex-shrink-0 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-800 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {getIcon(resume.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm flex items-center gap-2">
                    {resume.name}
                    <Download className="h-3 w-3 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {resume.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 