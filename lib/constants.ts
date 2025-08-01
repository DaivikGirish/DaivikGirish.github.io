// Asset paths
export const ASSETS = {
  PROFILE_IMAGE: '/assets/profile-image.jpg',
  RESUME: '/assets/resume.pdf',
} as const;

// Resume options
export const RESUME_OPTIONS = [
  {
    id: 'detailed',
    name: 'Full Detailed Resume',
    description: 'Comprehensive resume with all experience and skills',
    file: '/assets/resume.pdf',
    category: 'All'
  },
  {
    id: 'sde',
    name: 'Software Development Engineer',
    description: 'Focused on software development and web technologies',
    file: '/assets/Daivik_Girish_resume_SDE.pdf',
    category: 'SDE'
  },
  {
    id: 'embedded',
    name: 'Embedded Systems Engineer',
    description: 'Specialized in embedded systems and IoT development',
    file: '/assets/Daivik_Girish_resume_embedded.pdf',
    category: 'Embedded'
  }
] as const;

// Social links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/DaivikGirish',
  LINKEDIN: 'https://linkedin.com/in/daivik-girish-709ab7185/',
  EMAIL: 'daivikgirish98@gmail.com',
} as const;

// Contact information
export const CONTACT_INFO = {
  EMAIL: 'daivikgirish98@gmail.com',
  LOCATION: 'Newark, NJ, USA',
  GITHUB: 'github.com/DaivikGirish',
  LINKEDIN: 'linkedin.com/in/daivik-girish-709ab7185/',
} as const;

// Personal information
export const PERSONAL_INFO = {
  NAME: 'Daivik Girish',
  TITLE: 'Computer Engineer | Software Developer | Embedded Systems Enthusiast',
  DESCRIPTION: 'Passionate about creating innovative technology solutions that bridge the gap between hardware and software. Specializing in embedded systems, IoT applications, and full-stack web development.',
} as const; 