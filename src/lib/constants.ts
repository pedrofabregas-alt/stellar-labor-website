import type { NavLink, Industry, Service, Stat, ProcessStepData, FAQCategory, Testimonial } from '@/types'

export const COMPANY = {
  name: 'Stellar Labor Professional Services',
  shortName: 'Stellar Labor',
  tagline: 'Elite Workforce Solutions for Critical Operations',
  phone: '+1 (833) 782-5527',
  email: 'info@stellarlabor.com',
  address: 'Houston, TX',
  region: 'North America',
  yearsExperience: '30+',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'Employers', href: '/employers' },
  { label: 'Talent', href: '/talent' },
  { label: 'Safety', href: '/safety' },
  { label: 'Contact', href: '/contact' },
]

export const INDUSTRIES: Industry[] = [
  {
    title: 'Oil & Gas',
    slug: 'oil-gas',
    description: 'Upstream, midstream, and downstream operations demand workforce partners who understand the stakes. We deploy qualified personnel for refineries, pipelines, and production facilities across North America.',
    icon: 'Flame',
    roles: ['Process Operators', 'Pipefitters', 'Instrument Technicians', 'Safety Personnel'],
  },
  {
    title: 'Petrochemical',
    slug: 'petrochemical',
    description: 'Complex processing environments require precision staffing. Our teams support turnarounds, maintenance, and ongoing operations at petrochemical facilities with safety-first talent.',
    icon: 'FlaskConical',
    roles: ['Chemical Operators', 'Lab Technicians', 'Maintenance Crews', 'QA/QC Inspectors'],
  },
  {
    title: 'Construction',
    slug: 'construction',
    description: 'From commercial builds to heavy civil projects, we provide skilled tradespeople and general labor that arrive job-ready. Scalable crews for projects of any magnitude.',
    icon: 'HardHat',
    roles: ['Carpenters', 'Iron Workers', 'Heavy Equipment Operators', 'General Laborers'],
  },
  {
    title: 'Electrical',
    slug: 'electrical',
    description: 'Licensed electricians, power distribution specialists, and low-voltage technicians for industrial, commercial, and utility-scale projects. Qualified talent, verified credentials.',
    icon: 'Zap',
    roles: ['Journeyman Electricians', 'Apprentices', 'Controls Technicians', 'Cable Pullers'],
  },
  {
    title: 'Offshore',
    slug: 'offshore',
    description: 'Offshore operations demand experienced, safety-certified professionals who perform under pressure. We staff platforms, rigs, and marine vessels with proven talent.',
    icon: 'Anchor',
    roles: ['Roustabouts', 'Derrick Hands', 'Marine Welders', 'Crane Operators'],
  },
  {
    title: 'Chemical',
    slug: 'chemical',
    description: 'Chemical manufacturing facilities require workforce partners with deep understanding of hazmat protocols, process safety, and regulatory compliance. We deliver.',
    icon: 'Beaker',
    roles: ['Process Technicians', 'Chemical Engineers', 'HSE Coordinators', 'Material Handlers'],
  },
  {
    title: 'Telecom',
    slug: 'telecom',
    description: 'Supporting the infrastructure backbone of modern communications. Tower crews, fiber technicians, and installation specialists for rapid network deployment.',
    icon: 'Radio',
    roles: ['Tower Climbers', 'Fiber Splicers', 'RF Engineers', 'Installation Technicians'],
  },
  {
    title: 'Hospitality',
    slug: 'hospitality',
    description: 'High-volume staffing for events, facilities, and hospitality operations. Reliable, professional support personnel who represent your brand with excellence.',
    icon: 'Building2',
    roles: ['Event Staff', 'Facility Maintenance', 'Housekeeping Leads', 'Operations Support'],
  },
]

export const SERVICES: Service[] = [
  {
    title: 'Skilled Trades Staffing',
    description: 'Certified tradespeople — electricians, pipefitters, welders, millwrights, and instrumentation technicians — pre-screened and deployment-ready for your project timeline.',
    benefits: ['Credential-verified talent', 'Trade-specific expertise', 'Rapid mobilization'],
  },
  {
    title: 'General Labor Solutions',
    description: 'Dependable general labor at scale. From warehouse operations to site preparation, we provide reliable manpower with consistent attendance and work ethic.',
    benefits: ['Scalable crew sizes', 'Supervised labor pools', 'Flexible scheduling'],
  },
  {
    title: 'Project-Based Workforce',
    description: 'Full workforce packages for turnarounds, shutdowns, new construction, and capital projects. End-to-end labor management from mobilization to demobilization.',
    benefits: ['Turnkey labor solutions', 'Project management support', 'Milestone-driven staffing'],
  },
  {
    title: 'Contract Staffing',
    description: 'Flexible contract arrangements that match your operational rhythm. Short-term surge support or long-term embedded teams — structured for your needs.',
    benefits: ['Flexible contract terms', 'Reduced overhead', 'Quick onboarding'],
  },
  {
    title: 'Direct Hire Placement',
    description: 'Permanent placement solutions for critical positions. Rigorous screening, skills validation, and cultural fit assessment to build your core team.',
    benefits: ['Thorough candidate vetting', 'Industry-matched talent', 'Retention-focused placement'],
  },
  {
    title: 'Workforce Scaling',
    description: 'Ramp up or scale down with precision. Our workforce planning adapts to your production schedule, seasonal demands, and growth trajectory.',
    benefits: ['On-demand scalability', 'Workforce planning support', 'Zero ramp-up delay'],
  },
  {
    title: 'Recruitment & Screening',
    description: 'Comprehensive talent acquisition pipeline: sourcing, background checks, drug testing, skills assessment, and credential verification. You get qualified candidates.',
    benefits: ['Multi-step vetting process', 'Compliance-ready documentation', 'Reduced hiring risk'],
  },
  {
    title: 'On-Demand Labor',
    description: 'Same-day and next-day labor deployment for urgent needs. Pre-vetted talent pools in major markets ensure you never lose productivity to staffing gaps.',
    benefits: ['24-48 hour deployment', 'Pre-vetted talent pools', 'Emergency staffing capability'],
  },
]

export const STATS: Stat[] = [
  { value: 30, suffix: '+', label: 'Years of Experience' },
  { value: 10000, suffix: '+', label: 'Workers Deployed' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 38, suffix: '', label: 'States Served' },
]

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We assess your workforce requirements, project scope, timeline, and specific trade or labor needs.',
  },
  {
    number: '02',
    title: 'Talent Matching',
    description: 'Our recruiters source, screen, and match qualified candidates from our pre-vetted talent network.',
  },
  {
    number: '03',
    title: 'Deployment',
    description: 'Workers are mobilized, onboarded, and deployed to your site — fully compliant and job-ready.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous oversight, performance management, and workforce adjustments throughout the engagement.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Stellar Labor mobilized 120 skilled tradespeople for our turnaround in under two weeks. Their speed and the quality of their people exceeded every expectation.',
    name: 'James Carter',
    title: 'VP of Operations',
    company: 'Gulf Coast Refining',
  },
  {
    quote: 'We\'ve worked with a dozen staffing firms. Stellar is the only one that consistently delivers qualified, safety-conscious workers who actually show up.',
    name: 'Maria Gonzalez',
    title: 'Project Director',
    company: 'Meridian Construction',
  },
  {
    quote: 'Their understanding of the petrochemical industry is unmatched. They don\'t just send bodies — they send the right people with the right certifications.',
    name: 'Robert Chen',
    title: 'Plant Manager',
    company: 'Pacific Chemical Corp',
  },
]

export const FAQ_DATA: FAQCategory[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What industries does Stellar Labor serve?',
        answer: 'We serve oil & gas, petrochemical, construction, electrical, offshore, chemical, telecom, and hospitality sectors across North America.',
      },
      {
        question: 'What geographic areas do you cover?',
        answer: 'We operate across 38 states in the United States, with particular depth in the Gulf Coast, Midwest, and Western regions.',
      },
      {
        question: 'How long has Stellar Labor been in business?',
        answer: 'Our leadership team brings over 30 years of combined experience in workforce solutions and industrial staffing.',
      },
    ],
  },
  {
    category: 'For Employers',
    items: [
      {
        question: 'How quickly can you deploy workers?',
        answer: 'For most trades and labor categories, we can deploy qualified workers within 24 to 48 hours. Large-scale mobilizations are typically completed within one to two weeks.',
      },
      {
        question: 'Are your workers drug tested and background checked?',
        answer: 'Yes. Every worker goes through our multi-step screening process including background checks, drug testing, skills assessment, and credential verification before deployment.',
      },
      {
        question: 'Do you handle workers\' compensation and payroll?',
        answer: 'Yes. As the employer of record, we manage all payroll, workers\' compensation, benefits administration, and compliance obligations for our deployed workforce.',
      },
      {
        question: 'What is your safety record?',
        answer: 'We maintain an industry-leading safety record with rigorous training protocols, site-specific orientations, and continuous safety monitoring throughout every engagement.',
      },
    ],
  },
  {
    category: 'For Workers',
    items: [
      {
        question: 'How do I apply for work?',
        answer: 'Visit our Talent page and submit your information through our application form. You can also email your resume directly to our recruiting team.',
      },
      {
        question: 'What types of positions are available?',
        answer: 'We place skilled tradespeople (electricians, pipefitters, welders, millwrights), general laborers, equipment operators, and specialized technicians across multiple industries.',
      },
      {
        question: 'Do you offer benefits?',
        answer: 'Yes. Eligible workers receive competitive pay, health insurance options, and other benefits. Specific offerings vary by assignment type and duration.',
      },
      {
        question: 'Will I receive safety training?',
        answer: 'Absolutely. All workers complete our safety orientation program, and many assignments include site-specific training before deployment.',
      },
    ],
  },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Safety', href: '/safety' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Employers', href: '/employers' },
  ],
  talent: [
    { label: 'Careers', href: '/talent' },
    { label: 'Apply Now', href: '/talent#apply' },
  ],
}
