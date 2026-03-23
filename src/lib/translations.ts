import type { Industry, Service, Stat, ProcessStepData, FAQCategory, Testimonial } from '@/types'

// =============================================================================
// Navigation & Layout
// =============================================================================

export const NAV_LABELS = {
  en: {
    about: 'About',
    industries: 'Industries',
    services: 'Services',
    employers: 'Employers',
    talent: 'Talent',
    safety: 'Safety',
    contact: 'Contact',
    findWork: 'Find Work',
    requestTalent: 'Request Talent',
  },
  es: {
    about: 'Nosotros',
    industries: 'Industrias',
    services: 'Servicios',
    employers: 'Empleadores',
    talent: 'Talento',
    safety: 'Seguridad',
    contact: 'Contacto',
    findWork: 'Buscar Trabajo',
    requestTalent: 'Solicitar Talento',
  },
}

export const FOOTER_LABELS = {
  en: {
    tagline: 'Precision workforce solutions for industrial, energy, and construction sectors across North America.',
    company: 'Company',
    solutions: 'Solutions',
    talent: 'Talent',
    careers: 'Careers',
    applyNow: 'Apply Now',
    allRights: 'All rights reserved.',
    hours: 'Monday – Friday, 7:00 AM – 6:00 PM CST',
  },
  es: {
    tagline: 'Soluciones de fuerza laboral de precisión para los sectores industrial, energético y de construcción en toda América del Norte.',
    company: 'Empresa',
    solutions: 'Soluciones',
    talent: 'Talento',
    careers: 'Carreras',
    applyNow: 'Aplicar Ahora',
    allRights: 'Todos los derechos reservados.',
    hours: 'Lunes – Viernes, 7:00 AM – 6:00 PM CST',
  },
}

// =============================================================================
// Home Page
// =============================================================================

export const HOME = {
  en: {
    eyebrow: 'Stellar Labor Professional Services',
    title: 'The Workforce Behind High-Stakes Operations',
    subtitle: 'Precision staffing for industrial, energy, and construction sectors. Skilled trades and labor solutions deployed across North America — operationally ready, safety certified, on time.',
    primaryCta: 'Request Talent',
    secondaryCta: 'Find Work',
    ctaTitle: 'Ready to Solve Your Workforce Challenge?',
    ctaSubtitle: 'Whether you need 5 workers or 500, our team is ready to deploy qualified talent to your site.',
    ctaPrimary: 'Request Talent',
    ctaSecondary: 'Contact Us',
    stats: {
      years: 'Years',
      workers: 'Workers',
      retention: 'Retention',
      states: 'States',
    },
    northAmericaCoverage: 'North America Coverage',
  },
  es: {
    eyebrow: 'Stellar Labor Servicios Profesionales',
    title: 'La Fuerza Laboral Detrás de Operaciones Críticas',
    subtitle: 'Personal de precisión para los sectores industrial, energético y de construcción. Soluciones de oficios especializados y mano de obra desplegadas en toda América del Norte — operativamente listos, certificados en seguridad, a tiempo.',
    primaryCta: 'Solicitar Talento',
    secondaryCta: 'Buscar Trabajo',
    ctaTitle: '¿Listo para Resolver su Desafío de Personal?',
    ctaSubtitle: 'Ya sea que necesite 5 trabajadores o 500, nuestro equipo está listo para desplegar talento calificado en su sitio.',
    ctaPrimary: 'Solicitar Talento',
    ctaSecondary: 'Contáctenos',
    stats: {
      years: 'Años',
      workers: 'Trabajadores',
      retention: 'Retención',
      states: 'Estados',
    },
    northAmericaCoverage: 'Cobertura en América del Norte',
  },
}

// =============================================================================
// About Page
// =============================================================================

export const ABOUT = {
  en: {
    eyebrow: 'About Stellar Labor',
    title: 'Built for the Industries That Build Everything Else',
    subtitle: "For over three decades, we've been the trusted workforce partner behind North America's most critical projects — connecting demanding industries with the skilled professionals who keep operations moving.",
    missionEyebrow: 'Our Mission',
    missionTitle: 'Delivering Workforce Excellence at Scale',
    missionText: "We exist to solve one of industry's most persistent challenges: access to qualified, dependable, safety-conscious talent — exactly when and where you need it. Our mission is to be the workforce partner that operational leaders trust with their most critical projects.",
    visionEyebrow: 'Our Vision',
    visionTitle: 'The Standard in Industrial Staffing',
    visionText: "We're building the most reliable workforce solutions company in North America — one where every client engagement is defined by speed, quality, safety, and unwavering accountability. A partner that raises the bar for what staffing can deliver.",
    storyEyebrow: 'Our Story',
    storyTitle: 'Three Decades of Operational Excellence',
    storyP1: 'Stellar Labor Professional Services was founded on a straightforward premise: the industries that power modern infrastructure deserve a workforce partner that operates at their standard — not below it.',
    storyP2: "Starting in the Gulf Coast energy corridor, we built our reputation by delivering skilled tradespeople to oil and gas facilities during peak demand periods. Our ability to mobilize qualified, safety-certified workers faster than anyone else earned the trust of plant managers and project directors across the region.",
    storyP3: "Over three decades, that trust expanded — across industries, across state lines, and across the full spectrum of workforce solutions. Today, we serve eight major industrial sectors across 38 states, deploying over 10,000 workers annually to projects that range from routine maintenance to large-scale capital construction.",
    storyP4: "What hasn't changed is our standard: every worker we deploy is screened, trained, and operationally ready. Every client engagement is backed by dedicated support and real accountability.",
    valuesEyebrow: 'Core Values',
    valuesTitle: 'What Drives Every Decision',
    values: [
      { title: 'Safety First', description: 'Every decision, every deployment, every day — safety is non-negotiable.' },
      { title: 'Excellence', description: 'We hold ourselves to the highest standard of service, talent quality, and operational execution.' },
      { title: 'Integrity', description: 'Transparent communication, honest pricing, and commitments we stand behind.' },
      { title: 'People-Centered', description: 'Our workforce is our strength. We invest in their training, safety, and success.' },
      { title: 'Precision', description: 'Right people, right skills, right time. Every placement is intentional.' },
      { title: 'Accountability', description: 'We own the outcome. Continuous oversight and performance management on every engagement.' },
    ],
    ctaTitle: 'Partner with a Team That Delivers',
    ctaSubtitle: 'Join the companies that trust Stellar Labor with their most important workforce needs.',
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'View Services',
  },
  es: {
    eyebrow: 'Sobre Stellar Labor',
    title: 'Construidos para las Industrias que Construyen Todo lo Demás',
    subtitle: 'Durante más de tres décadas, hemos sido el socio de fuerza laboral de confianza detrás de los proyectos más críticos de América del Norte — conectando industrias exigentes con los profesionales capacitados que mantienen las operaciones en marcha.',
    missionEyebrow: 'Nuestra Misión',
    missionTitle: 'Entregando Excelencia Laboral a Gran Escala',
    missionText: 'Existimos para resolver uno de los desafíos más persistentes de la industria: el acceso a talento calificado, confiable y consciente de la seguridad — exactamente cuando y donde lo necesita. Nuestra misión es ser el socio laboral en el que los líderes operativos confían para sus proyectos más críticos.',
    visionEyebrow: 'Nuestra Visión',
    visionTitle: 'El Estándar en Personal Industrial',
    visionText: 'Estamos construyendo la empresa de soluciones de fuerza laboral más confiable de América del Norte — donde cada compromiso con el cliente se define por velocidad, calidad, seguridad y responsabilidad inquebrantable. Un socio que eleva el estándar de lo que el personal puede ofrecer.',
    storyEyebrow: 'Nuestra Historia',
    storyTitle: 'Tres Décadas de Excelencia Operativa',
    storyP1: 'Stellar Labor Professional Services fue fundada sobre una premisa directa: las industrias que impulsan la infraestructura moderna merecen un socio de fuerza laboral que opere a su nivel — no por debajo.',
    storyP2: 'Comenzando en el corredor energético de la Costa del Golfo, construimos nuestra reputación entregando trabajadores especializados a instalaciones de petróleo y gas durante períodos de alta demanda. Nuestra capacidad para movilizar trabajadores calificados y certificados en seguridad más rápido que cualquier otro nos ganó la confianza de gerentes de planta y directores de proyectos en toda la región.',
    storyP3: 'A lo largo de tres décadas, esa confianza se expandió — a través de industrias, fronteras estatales y todo el espectro de soluciones de fuerza laboral. Hoy, servimos a ocho principales sectores industriales en 38 estados, desplegando más de 10,000 trabajadores anualmente en proyectos que van desde mantenimiento rutinario hasta construcción de capital a gran escala.',
    storyP4: 'Lo que no ha cambiado es nuestro estándar: cada trabajador que desplegamos está evaluado, capacitado y operativamente listo. Cada compromiso con el cliente está respaldado por apoyo dedicado y responsabilidad real.',
    valuesEyebrow: 'Valores Fundamentales',
    valuesTitle: 'Lo que Impulsa Cada Decisión',
    values: [
      { title: 'Seguridad Primero', description: 'Cada decisión, cada despliegue, cada día — la seguridad no es negociable.' },
      { title: 'Excelencia', description: 'Nos exigimos el más alto estándar de servicio, calidad de talento y ejecución operativa.' },
      { title: 'Integridad', description: 'Comunicación transparente, precios honestos y compromisos que respaldamos.' },
      { title: 'Centrados en las Personas', description: 'Nuestra fuerza laboral es nuestra fortaleza. Invertimos en su capacitación, seguridad y éxito.' },
      { title: 'Precisión', description: 'Las personas correctas, las habilidades correctas, el momento correcto. Cada colocación es intencional.' },
      { title: 'Responsabilidad', description: 'Nos hacemos responsables del resultado. Supervisión continua y gestión del rendimiento en cada compromiso.' },
    ],
    ctaTitle: 'Asóciese con un Equipo que Cumple',
    ctaSubtitle: 'Únase a las empresas que confían en Stellar Labor para sus necesidades de fuerza laboral más importantes.',
    ctaPrimary: 'Contáctenos',
    ctaSecondary: 'Ver Servicios',
  },
}

// =============================================================================
// Industries
// =============================================================================

export const INDUSTRIES_PAGE = {
  en: {
    eyebrow: 'Industries',
    title: 'Deep Expertise Where It Matters Most',
    subtitle: "We don't staff generically. Each industry has unique demands — regulatory requirements, safety protocols, specialized skills. We know yours.",
    keyRoles: 'Key Roles We Fill',
    ctaTitle: 'Need Workers for Your Industry?',
    ctaSubtitle: "Tell us about your project and we'll match you with qualified talent from our pre-vetted network.",
    ctaPrimary: 'Request Talent',
    ctaSecondary: 'Contact Us',
  },
  es: {
    eyebrow: 'Industrias',
    title: 'Experiencia Profunda Donde Más Importa',
    subtitle: 'No proporcionamos personal de forma genérica. Cada industria tiene demandas únicas — requisitos regulatorios, protocolos de seguridad, habilidades especializadas. Conocemos las suyas.',
    keyRoles: 'Roles Clave que Cubrimos',
    ctaTitle: '¿Necesita Trabajadores para su Industria?',
    ctaSubtitle: 'Cuéntenos sobre su proyecto y lo conectaremos con talento calificado de nuestra red pre-evaluada.',
    ctaPrimary: 'Solicitar Talento',
    ctaSecondary: 'Contáctenos',
  },
}

export const INDUSTRIES_DATA: Record<string, Industry[]> = {
  en: [
    { title: 'Oil & Gas', slug: 'oil-gas', description: 'Upstream, midstream, and downstream operations demand workforce partners who understand the stakes. We deploy qualified personnel for refineries, pipelines, and production facilities across North America.', icon: 'Flame', roles: ['Process Operators', 'Pipefitters', 'Instrument Technicians', 'Safety Personnel'] },
    { title: 'Petrochemical', slug: 'petrochemical', description: 'Complex processing environments require precision staffing. Our teams support turnarounds, maintenance, and ongoing operations at petrochemical facilities with safety-first talent.', icon: 'FlaskConical', roles: ['Chemical Operators', 'Lab Technicians', 'Maintenance Crews', 'QA/QC Inspectors'] },
    { title: 'Construction', slug: 'construction', description: 'From commercial builds to heavy civil projects, we provide skilled tradespeople and general labor that arrive job-ready. Scalable crews for projects of any magnitude.', icon: 'HardHat', roles: ['Carpenters', 'Iron Workers', 'Heavy Equipment Operators', 'General Laborers'] },
    { title: 'Electrical', slug: 'electrical', description: 'Licensed electricians, power distribution specialists, and low-voltage technicians for industrial, commercial, and utility-scale projects. Qualified talent, verified credentials.', icon: 'Zap', roles: ['Journeyman Electricians', 'Apprentices', 'Controls Technicians', 'Cable Pullers'] },
    { title: 'Offshore', slug: 'offshore', description: 'Offshore operations demand experienced, safety-certified professionals who perform under pressure. We staff platforms, rigs, and marine vessels with proven talent.', icon: 'Anchor', roles: ['Roustabouts', 'Derrick Hands', 'Marine Welders', 'Crane Operators'] },
    { title: 'Chemical', slug: 'chemical', description: 'Chemical manufacturing facilities require workforce partners with deep understanding of hazmat protocols, process safety, and regulatory compliance. We deliver.', icon: 'Beaker', roles: ['Process Technicians', 'Chemical Engineers', 'HSE Coordinators', 'Material Handlers'] },
    { title: 'Telecom', slug: 'telecom', description: 'Supporting the infrastructure backbone of modern communications. Tower crews, fiber technicians, and installation specialists for rapid network deployment.', icon: 'Radio', roles: ['Tower Climbers', 'Fiber Splicers', 'RF Engineers', 'Installation Technicians'] },
    { title: 'Hospitality', slug: 'hospitality', description: 'High-volume staffing for events, facilities, and hospitality operations. Reliable, professional support personnel who represent your brand with excellence.', icon: 'Building2', roles: ['Event Staff', 'Facility Maintenance', 'Housekeeping Leads', 'Operations Support'] },
  ],
  es: [
    { title: 'Petróleo y Gas', slug: 'oil-gas', description: 'Las operaciones upstream, midstream y downstream exigen socios de fuerza laboral que entiendan lo que está en juego. Desplegamos personal calificado para refinerías, oleoductos e instalaciones de producción en toda América del Norte.', icon: 'Flame', roles: ['Operadores de Proceso', 'Tuberos', 'Técnicos de Instrumentación', 'Personal de Seguridad'] },
    { title: 'Petroquímica', slug: 'petrochemical', description: 'Los entornos de procesamiento complejos requieren personal de precisión. Nuestros equipos apoyan paradas, mantenimiento y operaciones continuas en instalaciones petroquímicas con talento enfocado en seguridad.', icon: 'FlaskConical', roles: ['Operadores Químicos', 'Técnicos de Laboratorio', 'Cuadrillas de Mantenimiento', 'Inspectores QA/QC'] },
    { title: 'Construcción', slug: 'construction', description: 'Desde construcciones comerciales hasta proyectos de ingeniería civil pesada, proporcionamos trabajadores especializados y mano de obra general listos para trabajar. Cuadrillas escalables para proyectos de cualquier magnitud.', icon: 'HardHat', roles: ['Carpinteros', 'Trabajadores del Hierro', 'Operadores de Equipo Pesado', 'Obreros Generales'] },
    { title: 'Eléctrica', slug: 'electrical', description: 'Electricistas licenciados, especialistas en distribución eléctrica y técnicos de bajo voltaje para proyectos industriales, comerciales y a escala de servicios públicos. Talento calificado, credenciales verificadas.', icon: 'Zap', roles: ['Electricistas Oficiales', 'Aprendices', 'Técnicos de Control', 'Instaladores de Cable'] },
    { title: 'Costa Afuera', slug: 'offshore', description: 'Las operaciones costa afuera exigen profesionales experimentados y certificados en seguridad que rinden bajo presión. Dotamos plataformas, torres y embarcaciones marinas con talento probado.', icon: 'Anchor', roles: ['Peones de Plataforma', 'Trabajadores de Torre', 'Soldadores Marinos', 'Operadores de Grúa'] },
    { title: 'Química', slug: 'chemical', description: 'Las instalaciones de manufactura química requieren socios de fuerza laboral con profundo conocimiento de protocolos de materiales peligrosos, seguridad de procesos y cumplimiento regulatorio. Nosotros cumplimos.', icon: 'Beaker', roles: ['Técnicos de Proceso', 'Ingenieros Químicos', 'Coordinadores HSE', 'Manejadores de Materiales'] },
    { title: 'Telecomunicaciones', slug: 'telecom', description: 'Apoyando la columna vertebral de infraestructura de las comunicaciones modernas. Cuadrillas de torres, técnicos de fibra y especialistas en instalación para despliegue rápido de redes.', icon: 'Radio', roles: ['Escaladores de Torres', 'Empalmadores de Fibra', 'Ingenieros RF', 'Técnicos de Instalación'] },
    { title: 'Hospitalidad', slug: 'hospitality', description: 'Personal de alto volumen para eventos, instalaciones y operaciones de hospitalidad. Personal de apoyo confiable y profesional que representa su marca con excelencia.', icon: 'Building2', roles: ['Personal de Eventos', 'Mantenimiento de Instalaciones', 'Supervisores de Limpieza', 'Soporte de Operaciones'] },
  ],
}

// =============================================================================
// Services
// =============================================================================

export const SERVICES_PAGE = {
  en: {
    eyebrow: 'Services',
    title: 'Workforce Solutions Engineered for Performance',
    subtitle: 'Every service we offer is built around one objective: getting the right people to your site, qualified and ready, as fast as possible.',
    ctaTitle: "Let's Build Your Workforce Solution",
    ctaSubtitle: "Every engagement starts with understanding your needs. Let's talk.",
    ctaPrimary: 'Request Talent',
    ctaSecondary: 'Contact Us',
  },
  es: {
    eyebrow: 'Servicios',
    title: 'Soluciones de Personal Diseñadas para el Rendimiento',
    subtitle: 'Cada servicio que ofrecemos está construido en torno a un objetivo: llevar a las personas adecuadas a su sitio, calificadas y listas, lo más rápido posible.',
    ctaTitle: 'Construyamos su Solución de Personal',
    ctaSubtitle: 'Cada compromiso comienza con entender sus necesidades. Hablemos.',
    ctaPrimary: 'Solicitar Talento',
    ctaSecondary: 'Contáctenos',
  },
}

export const SERVICES_DATA: Record<string, Service[]> = {
  en: [
    { title: 'Skilled Trades Staffing', description: 'Certified tradespeople — electricians, pipefitters, welders, millwrights, and instrumentation technicians — pre-screened and deployment-ready for your project timeline.', benefits: ['Credential-verified talent', 'Trade-specific expertise', 'Rapid mobilization'] },
    { title: 'General Labor Solutions', description: 'Dependable general labor at scale. From warehouse operations to site preparation, we provide reliable manpower with consistent attendance and work ethic.', benefits: ['Scalable crew sizes', 'Supervised labor pools', 'Flexible scheduling'] },
    { title: 'Project-Based Workforce', description: 'Full workforce packages for turnarounds, shutdowns, new construction, and capital projects. End-to-end labor management from mobilization to demobilization.', benefits: ['Turnkey labor solutions', 'Project management support', 'Milestone-driven staffing'] },
    { title: 'Contract Staffing', description: "Flexible contract arrangements that match your operational rhythm. Short-term surge support or long-term embedded teams — structured for your needs.", benefits: ['Flexible contract terms', 'Reduced overhead', 'Quick onboarding'] },
    { title: 'Direct Hire Placement', description: 'Permanent placement solutions for critical positions. Rigorous screening, skills validation, and cultural fit assessment to build your core team.', benefits: ['Thorough candidate vetting', 'Industry-matched talent', 'Retention-focused placement'] },
    { title: 'Workforce Scaling', description: 'Ramp up or scale down with precision. Our workforce planning adapts to your production schedule, seasonal demands, and growth trajectory.', benefits: ['On-demand scalability', 'Workforce planning support', 'Zero ramp-up delay'] },
    { title: 'Recruitment & Screening', description: 'Comprehensive talent acquisition pipeline: sourcing, background checks, drug testing, skills assessment, and credential verification. You get qualified candidates.', benefits: ['Multi-step vetting process', 'Compliance-ready documentation', 'Reduced hiring risk'] },
    { title: 'On-Demand Labor', description: "Same-day and next-day labor deployment for urgent needs. Pre-vetted talent pools in major markets ensure you never lose productivity to staffing gaps.", benefits: ['24-48 hour deployment', 'Pre-vetted talent pools', 'Emergency staffing capability'] },
  ],
  es: [
    { title: 'Personal de Oficios Especializados', description: 'Trabajadores certificados — electricistas, tuberos, soldadores, mecánicos industriales y técnicos de instrumentación — pre-evaluados y listos para despliegue según su cronograma de proyecto.', benefits: ['Talento con credenciales verificadas', 'Experiencia específica por oficio', 'Movilización rápida'] },
    { title: 'Soluciones de Mano de Obra General', description: 'Mano de obra general confiable a escala. Desde operaciones de almacén hasta preparación de sitio, proporcionamos personal confiable con asistencia constante y ética de trabajo.', benefits: ['Tamaños de cuadrilla escalables', 'Grupos laborales supervisados', 'Programación flexible'] },
    { title: 'Fuerza Laboral por Proyecto', description: 'Paquetes completos de fuerza laboral para paradas, cierres, nueva construcción y proyectos de capital. Gestión laboral integral desde la movilización hasta la desmovilización.', benefits: ['Soluciones laborales llave en mano', 'Soporte de gestión de proyectos', 'Dotación por hitos'] },
    { title: 'Personal por Contrato', description: 'Arreglos contractuales flexibles que se adaptan a su ritmo operativo. Soporte de aumento a corto plazo o equipos integrados a largo plazo — estructurados para sus necesidades.', benefits: ['Términos contractuales flexibles', 'Gastos generales reducidos', 'Incorporación rápida'] },
    { title: 'Colocación de Contratación Directa', description: 'Soluciones de colocación permanente para posiciones críticas. Evaluación rigurosa, validación de habilidades y evaluación de compatibilidad cultural para construir su equipo central.', benefits: ['Evaluación exhaustiva de candidatos', 'Talento compatible con la industria', 'Colocación enfocada en retención'] },
    { title: 'Escalamiento de Personal', description: 'Aumente o reduzca con precisión. Nuestra planificación de fuerza laboral se adapta a su programa de producción, demandas estacionales y trayectoria de crecimiento.', benefits: ['Escalabilidad bajo demanda', 'Soporte de planificación laboral', 'Sin demora de inicio'] },
    { title: 'Reclutamiento y Evaluación', description: 'Pipeline integral de adquisición de talento: búsqueda, verificación de antecedentes, pruebas de drogas, evaluación de habilidades y verificación de credenciales. Usted obtiene candidatos calificados.', benefits: ['Proceso de evaluación multi-etapa', 'Documentación lista para cumplimiento', 'Riesgo de contratación reducido'] },
    { title: 'Mano de Obra Bajo Demanda', description: 'Despliegue de mano de obra el mismo día o al día siguiente para necesidades urgentes. Grupos de talento pre-evaluados en mercados principales aseguran que nunca pierda productividad por falta de personal.', benefits: ['Despliegue en 24-48 horas', 'Grupos de talento pre-evaluados', 'Capacidad de personal de emergencia'] },
  ],
}

// =============================================================================
// Stats
// =============================================================================

export const STATS_DATA: Record<string, Stat[]> = {
  en: [
    { value: 30, suffix: '+', label: 'Years of Experience' },
    { value: 10000, suffix: '+', label: 'Workers Deployed' },
    { value: 98, suffix: '%', label: 'Client Retention' },
    { value: 38, suffix: '', label: 'States Served' },
  ],
  es: [
    { value: 30, suffix: '+', label: 'Años de Experiencia' },
    { value: 10000, suffix: '+', label: 'Trabajadores Desplegados' },
    { value: 98, suffix: '%', label: 'Retención de Clientes' },
    { value: 38, suffix: '', label: 'Estados Servidos' },
  ],
}

// =============================================================================
// Process
// =============================================================================

export const PROCESS_PAGE = {
  en: {
    eyebrow: 'Process',
    title: 'From Consultation to Deployment',
    subtitle: 'A streamlined engagement process built for speed, precision, and accountability.',
  },
  es: {
    eyebrow: 'Proceso',
    title: 'De la Consulta al Despliegue',
    subtitle: 'Un proceso de compromiso optimizado construido para velocidad, precisión y responsabilidad.',
  },
}

export const PROCESS_DATA: Record<string, ProcessStepData[]> = {
  en: [
    { number: '01', title: 'Consultation', description: 'We assess your workforce requirements, project scope, timeline, and specific trade or labor needs.' },
    { number: '02', title: 'Talent Matching', description: 'Our recruiters source, screen, and match qualified candidates from our pre-vetted talent network.' },
    { number: '03', title: 'Deployment', description: 'Workers are mobilized, onboarded, and deployed to your site — fully compliant and job-ready.' },
    { number: '04', title: 'Ongoing Support', description: 'Continuous oversight, performance management, and workforce adjustments throughout the engagement.' },
  ],
  es: [
    { number: '01', title: 'Consulta', description: 'Evaluamos sus requisitos de fuerza laboral, alcance del proyecto, cronograma y necesidades específicas de oficio o mano de obra.' },
    { number: '02', title: 'Búsqueda de Talento', description: 'Nuestros reclutadores buscan, evalúan y emparejan candidatos calificados de nuestra red de talento pre-evaluada.' },
    { number: '03', title: 'Despliegue', description: 'Los trabajadores son movilizados, incorporados y desplegados en su sitio — completamente en cumplimiento y listos para trabajar.' },
    { number: '04', title: 'Soporte Continuo', description: 'Supervisión continua, gestión del rendimiento y ajustes de fuerza laboral durante todo el compromiso.' },
  ],
}

// =============================================================================
// Testimonials
// =============================================================================

export const TESTIMONIALS_SECTION = {
  en: {
    eyebrow: 'Testimonials',
    title: 'Trusted by Industry Leaders',
  },
  es: {
    eyebrow: 'Testimonios',
    title: 'Confianza de Líderes de la Industria',
  },
}

export const TESTIMONIALS_DATA: Record<string, Testimonial[]> = {
  en: [
    { quote: 'Stellar Labor mobilized 120 skilled tradespeople for our turnaround in under two weeks. Their speed and the quality of their people exceeded every expectation.', name: 'James Carter', title: 'VP of Operations', company: 'Gulf Coast Refining' },
    { quote: "We've worked with a dozen staffing firms. Stellar is the only one that consistently delivers qualified, safety-conscious workers who actually show up.", name: 'Maria Gonzalez', title: 'Project Director', company: 'Meridian Construction' },
    { quote: "Their understanding of the petrochemical industry is unmatched. They don't just send bodies — they send the right people with the right certifications.", name: 'Robert Chen', title: 'Plant Manager', company: 'Pacific Chemical Corp' },
  ],
  es: [
    { quote: 'Stellar Labor movilizó 120 trabajadores especializados para nuestra parada en menos de dos semanas. Su velocidad y la calidad de su gente superó todas las expectativas.', name: 'James Carter', title: 'VP de Operaciones', company: 'Gulf Coast Refining' },
    { quote: 'Hemos trabajado con docenas de empresas de personal. Stellar es la única que consistentemente entrega trabajadores calificados y conscientes de la seguridad que realmente se presentan.', name: 'Maria Gonzalez', title: 'Directora de Proyecto', company: 'Meridian Construction' },
    { quote: 'Su comprensión de la industria petroquímica es inigualable. No solo envían personas — envían a las personas correctas con las certificaciones correctas.', name: 'Robert Chen', title: 'Gerente de Planta', company: 'Pacific Chemical Corp' },
  ],
}

// =============================================================================
// Value Proposition
// =============================================================================

export const VALUE_PROP = {
  en: {
    eyebrow: 'Why Stellar',
    title: 'Built for Operational Excellence',
    subtitle: 'Every workforce solution we deliver is engineered for reliability, compliance, and performance.',
    values: [
      { title: 'Rapid Deployment', stat: '24–48h', description: 'Workers on-site within hours. Pre-vetted talent pools in major markets ensure zero downtime when you need people most.' },
      { title: 'Safety First', stat: '0.5 EMR', description: 'Industry-leading safety protocols, comprehensive training, and continuous compliance monitoring on every project we staff.' },
      { title: 'Qualified Talent', stat: '5-step', description: 'Multi-step screening: background checks, drug testing, skills assessment, credential verification, and reference validation.' },
      { title: 'Scalable Solutions', stat: '5–500', description: 'From a handful of specialists to hundreds of workers. Ramp up or scale down with precision to match your operational rhythm.' },
    ],
  },
  es: {
    eyebrow: 'Por Qué Stellar',
    title: 'Construidos para la Excelencia Operativa',
    subtitle: 'Cada solución de fuerza laboral que entregamos está diseñada para confiabilidad, cumplimiento y rendimiento.',
    values: [
      { title: 'Despliegue Rápido', stat: '24–48h', description: 'Trabajadores en sitio en horas. Grupos de talento pre-evaluados en mercados principales aseguran cero tiempo de inactividad cuando más necesita personal.' },
      { title: 'Seguridad Primero', stat: '0.5 EMR', description: 'Protocolos de seguridad líderes en la industria, capacitación integral y monitoreo continuo de cumplimiento en cada proyecto que dotamos.' },
      { title: 'Talento Calificado', stat: '5 pasos', description: 'Evaluación multi-etapa: verificación de antecedentes, pruebas de drogas, evaluación de habilidades, verificación de credenciales y validación de referencias.' },
      { title: 'Soluciones Escalables', stat: '5–500', description: 'Desde un puñado de especialistas hasta cientos de trabajadores. Aumente o reduzca con precisión para igualar su ritmo operativo.' },
    ],
  },
}

// =============================================================================
// Industries Grid (home page section)
// =============================================================================

export const INDUSTRIES_GRID = {
  en: {
    eyebrow: 'Industries',
    title: 'Deep Expertise Where It Matters Most',
    subtitle: "Specialized workforce solutions across North America's most demanding industrial and operational sectors.",
    exploreLink: 'Explore all industries we serve',
  },
  es: {
    eyebrow: 'Industrias',
    title: 'Experiencia Profunda Donde Más Importa',
    subtitle: 'Soluciones de fuerza laboral especializadas en los sectores industriales y operativos más exigentes de América del Norte.',
    exploreLink: 'Explorar todas las industrias que servimos',
  },
}

// =============================================================================
// Services Grid (home page section)
// =============================================================================

export const SERVICES_GRID = {
  en: {
    eyebrow: 'Services',
    title: 'Comprehensive Workforce Solutions',
    subtitle: 'From skilled trades to general labor, contract staffing to permanent placement — every service engineered for operational excellence.',
    viewLink: 'View all services',
  },
  es: {
    eyebrow: 'Servicios',
    title: 'Soluciones Integrales de Fuerza Laboral',
    subtitle: 'Desde oficios especializados hasta mano de obra general, personal por contrato hasta colocación permanente — cada servicio diseñado para excelencia operativa.',
    viewLink: 'Ver todos los servicios',
  },
}

// =============================================================================
// Employers Page
// =============================================================================

export const EMPLOYERS = {
  en: {
    eyebrow: 'For Employers',
    title: 'Your Workforce, Our Responsibility',
    subtitle: 'From a single skilled tradesperson to an entire project crew — we source, screen, and deploy qualified workers so you can focus on execution.',
    primaryCta: 'Submit Inquiry',
    secondaryCta: 'Call Us Now',
    challengesEyebrow: 'Challenges Solved',
    challengesTitle: 'We Handle the Workforce. You Handle the Work.',
    challengesSubtitle: 'These are the problems our clients were dealing with before they found us.',
    challenges: [
      { title: 'Urgent Labor Needs', description: "Production deadlines, turnaround schedules, and project timelines that can't wait for traditional hiring." },
      { title: 'Scaling Workforce', description: 'Ramping up for a major project or scaling down after completion — without the overhead of permanent hires.' },
      { title: 'Compliance Burden', description: "Background checks, drug testing, safety certifications, and workers' comp — handled completely by us." },
      { title: 'Quality Consistency', description: 'Tired of staffing firms that send warm bodies instead of qualified workers. We send the right people.' },
      { title: 'Project Staffing', description: 'Turnarounds, shutdowns, and capital projects that need large crews mobilized on a precise timeline.' },
      { title: 'Ongoing Support', description: "Need a dedicated partner who manages the workforce — not just a transactional vendor." },
    ],
    advantageEyebrow: 'The Stellar Advantage',
    advantageTitle: 'Why Operations Leaders Choose Us',
    advantageItems: [
      '24–48 hour deployment for most trades and labor categories',
      'Multi-step screening: background, drug, skills, credentials',
      "Full employer-of-record services: payroll, workers' comp, benefits",
      'Dedicated account management and on-site supervision',
      'Industry-leading safety training and compliance protocols',
      'Scalable from 5 workers to 500+ on a single engagement',
    ],
    formEyebrow: 'Get Started',
    formTitle: 'Request Workforce Support',
    formSubtitle: 'Tell us about your needs. Our team will review your requirements and respond within 24 hours.',
    ctaTitle: 'Need Workers Now?',
    ctaSubtitle: 'For urgent staffing needs, call us directly.',
    ctaPrimary: 'Call +1 (833) 782-5527',
    ctaSecondary: 'Email Us',
  },
  es: {
    eyebrow: 'Para Empleadores',
    title: 'Su Fuerza Laboral, Nuestra Responsabilidad',
    subtitle: 'Desde un solo trabajador especializado hasta una cuadrilla completa de proyecto — buscamos, evaluamos y desplegamos trabajadores calificados para que usted se concentre en la ejecución.',
    primaryCta: 'Enviar Consulta',
    secondaryCta: 'Llámenos Ahora',
    challengesEyebrow: 'Desafíos Resueltos',
    challengesTitle: 'Nosotros Manejamos el Personal. Usted Maneja el Trabajo.',
    challengesSubtitle: 'Estos son los problemas que nuestros clientes enfrentaban antes de encontrarnos.',
    challenges: [
      { title: 'Necesidades Laborales Urgentes', description: 'Plazos de producción, cronogramas de parada y plazos de proyecto que no pueden esperar contratación tradicional.' },
      { title: 'Escalamiento de Personal', description: 'Aumentar para un proyecto importante o reducir después de completarlo — sin los gastos generales de contrataciones permanentes.' },
      { title: 'Carga de Cumplimiento', description: 'Verificación de antecedentes, pruebas de drogas, certificaciones de seguridad y compensación laboral — manejado completamente por nosotros.' },
      { title: 'Consistencia de Calidad', description: 'Cansado de empresas de personal que envían cuerpos en lugar de trabajadores calificados. Nosotros enviamos a las personas correctas.' },
      { title: 'Dotación de Proyectos', description: 'Paradas, cierres y proyectos de capital que necesitan grandes cuadrillas movilizadas en un cronograma preciso.' },
      { title: 'Soporte Continuo', description: 'Necesita un socio dedicado que gestione la fuerza laboral — no solo un proveedor transaccional.' },
    ],
    advantageEyebrow: 'La Ventaja Stellar',
    advantageTitle: 'Por Qué los Líderes Operativos nos Eligen',
    advantageItems: [
      'Despliegue en 24-48 horas para la mayoría de oficios y categorías laborales',
      'Evaluación multi-etapa: antecedentes, drogas, habilidades, credenciales',
      'Servicios completos como empleador registrado: nómina, compensación laboral, beneficios',
      'Gestión de cuentas dedicada y supervisión en sitio',
      'Capacitación en seguridad y protocolos de cumplimiento líderes en la industria',
      'Escalable de 5 trabajadores a más de 500 en un solo compromiso',
    ],
    formEyebrow: 'Comenzar',
    formTitle: 'Solicitar Soporte de Personal',
    formSubtitle: 'Cuéntenos sobre sus necesidades. Nuestro equipo revisará sus requisitos y responderá en 24 horas.',
    ctaTitle: '¿Necesita Trabajadores Ahora?',
    ctaSubtitle: 'Para necesidades urgentes de personal, llámenos directamente.',
    ctaPrimary: 'Llamar +1 (833) 782-5527',
    ctaSecondary: 'Enviar Email',
  },
}

// =============================================================================
// Talent Page
// =============================================================================

export const TALENT = {
  en: {
    eyebrow: 'Careers',
    title: 'Your Skills. Our Opportunities.',
    subtitle: "Join a workforce network that values safety, pays competitively, and connects you with projects across North America's most dynamic industries.",
    primaryCta: 'Apply Now',
    secondaryCta: 'View Industries',
    benefitsEyebrow: 'Why Stellar',
    benefitsTitle: 'Work With a Company That Works for You',
    benefits: [
      { title: 'Competitive Pay', description: 'Industry-leading rates with weekly pay. Your skills are valued and compensated accordingly.' },
      { title: 'Safety Training', description: 'Comprehensive safety orientation and site-specific training. Your wellbeing is our priority.' },
      { title: 'Diverse Projects', description: 'Work across industries — oil & gas, construction, telecom, and more. Build your experience.' },
      { title: 'Career Growth', description: 'Access to training programs, certifications, and advancement opportunities within our network.' },
      { title: 'Nationwide Opportunities', description: 'Projects across 38 states. Work close to home or explore new locations.' },
      { title: 'Flexible Schedules', description: 'Short-term, long-term, and contract assignments that fit your availability.' },
    ],
    hiringEyebrow: 'Opportunities',
    hiringTitle: 'Industries Hiring Now',
    hiringSubtitle: "We're actively placing skilled workers across these sectors.",
    rolesPlus: 'roles',
    applyEyebrow: 'Apply',
    applyTitle: 'Start Your Application',
    applySubtitle: 'Fill out the form below and a recruiter will be in touch. For a complete application, also email your resume.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Common Questions from Workers',
    ctaTitle: 'Ready to Get to Work?',
    ctaSubtitle: "Apply today and join a network of skilled professionals working on North America's biggest projects.",
    ctaPrimary: 'Apply Now',
    ctaSecondary: 'Contact Recruiting',
  },
  es: {
    eyebrow: 'Carreras',
    title: 'Sus Habilidades. Nuestras Oportunidades.',
    subtitle: 'Únase a una red laboral que valora la seguridad, paga competitivamente y lo conecta con proyectos en las industrias más dinámicas de América del Norte.',
    primaryCta: 'Aplicar Ahora',
    secondaryCta: 'Ver Industrias',
    benefitsEyebrow: 'Por Qué Stellar',
    benefitsTitle: 'Trabaje con una Empresa que Trabaja para Usted',
    benefits: [
      { title: 'Pago Competitivo', description: 'Tarifas líderes en la industria con pago semanal. Sus habilidades son valoradas y compensadas adecuadamente.' },
      { title: 'Capacitación en Seguridad', description: 'Orientación integral de seguridad y capacitación específica del sitio. Su bienestar es nuestra prioridad.' },
      { title: 'Proyectos Diversos', description: 'Trabaje en múltiples industrias — petróleo y gas, construcción, telecomunicaciones y más. Construya su experiencia.' },
      { title: 'Crecimiento Profesional', description: 'Acceso a programas de capacitación, certificaciones y oportunidades de avance dentro de nuestra red.' },
      { title: 'Oportunidades Nacionales', description: 'Proyectos en 38 estados. Trabaje cerca de casa o explore nuevas ubicaciones.' },
      { title: 'Horarios Flexibles', description: 'Asignaciones a corto plazo, largo plazo y por contrato que se adaptan a su disponibilidad.' },
    ],
    hiringEyebrow: 'Oportunidades',
    hiringTitle: 'Industrias Contratando Ahora',
    hiringSubtitle: 'Estamos colocando activamente trabajadores calificados en estos sectores.',
    rolesPlus: 'roles',
    applyEyebrow: 'Aplicar',
    applyTitle: 'Inicie su Aplicación',
    applySubtitle: 'Complete el formulario a continuación y un reclutador se pondrá en contacto. Para una aplicación completa, también envíe su currículum por email.',
    faqEyebrow: 'Preguntas Frecuentes',
    faqTitle: 'Preguntas Comunes de Trabajadores',
    ctaTitle: '¿Listo para Trabajar?',
    ctaSubtitle: 'Aplique hoy y únase a una red de profesionales calificados trabajando en los proyectos más grandes de América del Norte.',
    ctaPrimary: 'Aplicar Ahora',
    ctaSecondary: 'Contactar Reclutamiento',
  },
}

// =============================================================================
// Contact Page
// =============================================================================

export const CONTACT = {
  en: {
    eyebrow: 'Contact',
    title: "Let's Talk",
    subtitle: "Whether you need workers, want to work with us, or have a question — we're here and we respond fast.",
    formTitle: 'Send a Message',
    formSubtitle: 'Fill out the form below and our team will get back to you within one business day.',
    infoTitle: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    headquarters: 'Headquarters',
    hours: 'Hours',
    hoursValue: 'Monday – Friday, 7:00 AM – 6:00 PM CST',
    quickLinks: 'Looking for something specific?',
    employerLink: 'Employer Staffing Inquiry',
    applyLink: 'Apply for Work',
    faqLink: 'Frequently Asked Questions',
    mapPlaceholder: 'Map integration placeholder — Houston, TX',
  },
  es: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    subtitle: 'Ya sea que necesite trabajadores, quiera trabajar con nosotros o tenga una pregunta — estamos aquí y respondemos rápido.',
    formTitle: 'Enviar un Mensaje',
    formSubtitle: 'Complete el formulario a continuación y nuestro equipo se comunicará con usted dentro de un día hábil.',
    infoTitle: 'Información de Contacto',
    phone: 'Teléfono',
    email: 'Email',
    headquarters: 'Sede Central',
    hours: 'Horario',
    hoursValue: 'Lunes – Viernes, 7:00 AM – 6:00 PM CST',
    quickLinks: '¿Busca algo específico?',
    employerLink: 'Consulta de Personal para Empleadores',
    applyLink: 'Aplicar para Trabajo',
    faqLink: 'Preguntas Frecuentes',
    mapPlaceholder: 'Espacio para mapa — Houston, TX',
  },
}

// =============================================================================
// Safety Page
// =============================================================================

export const SAFETY = {
  en: {
    eyebrow: 'Safety & Compliance',
    title: "Safety Is Not a Priority. It's a Prerequisite.",
    subtitle: 'In the industries we serve, safety is the foundation everything else is built on. Our protocols, training, and culture reflect that — without compromise.',
    stats: [
      { value: 99.2, suffix: '%', label: 'Safety Compliance Rate' },
      { value: 500, suffix: '+', label: 'Safety Trainings / Year' },
      { value: 0, suffix: '', label: 'Target Incidents' },
      { value: 100, suffix: '%', label: 'Workers Screened' },
    ],
    commitEyebrow: 'Our Commitment',
    commitTitle: 'Zero Incidents Is the Only Acceptable Target',
    commitText: 'We believe every workplace incident is preventable. Our safety program is engineered around this belief — from pre-deployment screening and training to on-site monitoring and continuous improvement. When we deploy workers to your facility, they arrive prepared, equipped, and safety-conscious.',
    pillarsEyebrow: 'Safety Framework',
    pillarsTitle: 'How We Keep Your Workforce Safe',
    pillars: [
      { title: 'Comprehensive Training', description: 'Every worker completes our safety orientation program before deployment. Site-specific training is provided for specialized environments.' },
      { title: 'Pre-Employment Screening', description: 'Background checks, drug testing, skills assessment, and credential verification on every worker — no exceptions.' },
      { title: 'Hazard Awareness', description: 'Continuous hazard identification, Job Safety Analysis (JSA), and real-time safety monitoring at all active job sites.' },
      { title: 'PPE Standards', description: 'Strict personal protective equipment standards enforced and audited. Workers arrive equipped and compliant.' },
      { title: 'Regulatory Compliance', description: 'Full compliance with OSHA, state, and site-specific safety regulations. Updated protocols and documentation maintained continuously.' },
      { title: 'Incident Response', description: 'Established incident reporting, investigation, and corrective action procedures. Root cause analysis drives continuous improvement.' },
    ],
    certsEyebrow: 'Certifications',
    certsTitle: 'Credentials & Compliance Standards',
    certsSubtitle: 'Our workforce maintains active certifications across all major safety and compliance frameworks.',
    certifications: [
      'OSHA 10/30 Hour Training',
      'ISNetworld Certified',
      'DISA Compliant',
      'TWIC Card Program',
      'H2S Awareness Training',
      'First Aid / CPR Certified',
      'Confined Space Entry',
      'Fall Protection Certified',
    ],
    ctaTitle: "Safety Questions? Let's Talk.",
    ctaSubtitle: 'Our safety team is available to discuss protocols, certifications, and compliance requirements for your project.',
    ctaPrimary: 'Contact Us',
  },
  es: {
    eyebrow: 'Seguridad y Cumplimiento',
    title: 'La Seguridad No es una Prioridad. Es un Prerrequisito.',
    subtitle: 'En las industrias que servimos, la seguridad es el fundamento sobre el cual todo lo demás se construye. Nuestros protocolos, capacitación y cultura lo reflejan — sin compromiso.',
    stats: [
      { value: 99.2, suffix: '%', label: 'Tasa de Cumplimiento de Seguridad' },
      { value: 500, suffix: '+', label: 'Capacitaciones de Seguridad / Año' },
      { value: 0, suffix: '', label: 'Incidentes Objetivo' },
      { value: 100, suffix: '%', label: 'Trabajadores Evaluados' },
    ],
    commitEyebrow: 'Nuestro Compromiso',
    commitTitle: 'Cero Incidentes es el Único Objetivo Aceptable',
    commitText: 'Creemos que cada incidente laboral es prevenible. Nuestro programa de seguridad está diseñado en torno a esta creencia — desde la evaluación y capacitación pre-despliegue hasta el monitoreo en sitio y mejora continua. Cuando desplegamos trabajadores en sus instalaciones, llegan preparados, equipados y conscientes de la seguridad.',
    pillarsEyebrow: 'Marco de Seguridad',
    pillarsTitle: 'Cómo Mantenemos Segura a su Fuerza Laboral',
    pillars: [
      { title: 'Capacitación Integral', description: 'Cada trabajador completa nuestro programa de orientación de seguridad antes del despliegue. Se proporciona capacitación específica del sitio para entornos especializados.' },
      { title: 'Evaluación Pre-Empleo', description: 'Verificación de antecedentes, pruebas de drogas, evaluación de habilidades y verificación de credenciales para cada trabajador — sin excepciones.' },
      { title: 'Conciencia de Riesgos', description: 'Identificación continua de riesgos, Análisis de Seguridad del Trabajo (JSA) y monitoreo de seguridad en tiempo real en todos los sitios activos.' },
      { title: 'Estándares de EPP', description: 'Estándares estrictos de equipo de protección personal aplicados y auditados. Los trabajadores llegan equipados y en cumplimiento.' },
      { title: 'Cumplimiento Regulatorio', description: 'Cumplimiento total con OSHA, regulaciones estatales y específicas del sitio. Protocolos actualizados y documentación mantenida continuamente.' },
      { title: 'Respuesta a Incidentes', description: 'Procedimientos establecidos de reporte, investigación y acción correctiva de incidentes. El análisis de causa raíz impulsa la mejora continua.' },
    ],
    certsEyebrow: 'Certificaciones',
    certsTitle: 'Credenciales y Estándares de Cumplimiento',
    certsSubtitle: 'Nuestra fuerza laboral mantiene certificaciones activas en todos los principales marcos de seguridad y cumplimiento.',
    certifications: [
      'Capacitación OSHA 10/30 Horas',
      'Certificado ISNetworld',
      'Cumplimiento DISA',
      'Programa Tarjeta TWIC',
      'Capacitación Conciencia H2S',
      'Certificado Primeros Auxilios / RCP',
      'Entrada a Espacios Confinados',
      'Certificado Protección contra Caídas',
    ],
    ctaTitle: '¿Preguntas sobre Seguridad? Hablemos.',
    ctaSubtitle: 'Nuestro equipo de seguridad está disponible para discutir protocolos, certificaciones y requisitos de cumplimiento para su proyecto.',
    ctaPrimary: 'Contáctenos',
  },
}

// =============================================================================
// FAQ Page
// =============================================================================

export const FAQ_PAGE = {
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: "Answers to the most common questions from employers and workers. Can't find what you're looking for? Contact us directly.",
    ctaTitle: 'Still Have Questions?',
    ctaSubtitle: "Our team is happy to help. Reach out and we'll get back to you within one business day.",
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'Call Us',
  },
  es: {
    eyebrow: 'Preguntas Frecuentes',
    title: 'Preguntas Frecuentes',
    subtitle: 'Respuestas a las preguntas más comunes de empleadores y trabajadores. ¿No encuentra lo que busca? Contáctenos directamente.',
    ctaTitle: '¿Aún Tiene Preguntas?',
    ctaSubtitle: 'Nuestro equipo está feliz de ayudar. Comuníquese y le responderemos dentro de un día hábil.',
    ctaPrimary: 'Contáctenos',
    ctaSecondary: 'Llámenos',
  },
}

export const FAQ_DATA_I18N: Record<string, FAQCategory[]> = {
  en: [
    {
      category: 'General',
      items: [
        { question: 'What industries does Stellar Labor serve?', answer: 'We serve oil & gas, petrochemical, construction, electrical, offshore, chemical, telecom, and hospitality sectors across North America.' },
        { question: 'What geographic areas do you cover?', answer: 'We operate across 38 states in the United States, with particular depth in the Gulf Coast, Midwest, and Western regions.' },
        { question: 'How long has Stellar Labor been in business?', answer: 'Our leadership team brings over 30 years of combined experience in workforce solutions and industrial staffing.' },
      ],
    },
    {
      category: 'For Employers',
      items: [
        { question: 'How quickly can you deploy workers?', answer: 'For most trades and labor categories, we can deploy qualified workers within 24 to 48 hours. Large-scale mobilizations are typically completed within one to two weeks.' },
        { question: 'Are your workers drug tested and background checked?', answer: 'Yes. Every worker goes through our multi-step screening process including background checks, drug testing, skills assessment, and credential verification before deployment.' },
        { question: "Do you handle workers' compensation and payroll?", answer: "Yes. As the employer of record, we manage all payroll, workers' compensation, benefits administration, and compliance obligations for our deployed workforce." },
        { question: 'What is your safety record?', answer: 'We maintain an industry-leading safety record with rigorous training protocols, site-specific orientations, and continuous safety monitoring throughout every engagement.' },
      ],
    },
    {
      category: 'For Workers',
      items: [
        { question: 'How do I apply for work?', answer: 'Visit our Talent page and submit your information through our application form. You can also email your resume directly to our recruiting team.' },
        { question: 'What types of positions are available?', answer: 'We place skilled tradespeople (electricians, pipefitters, welders, millwrights), general laborers, equipment operators, and specialized technicians across multiple industries.' },
        { question: 'Do you offer benefits?', answer: 'Yes. Eligible workers receive competitive pay, health insurance options, and other benefits. Specific offerings vary by assignment type and duration.' },
        { question: 'Will I receive safety training?', answer: 'Absolutely. All workers complete our safety orientation program, and many assignments include site-specific training before deployment.' },
      ],
    },
  ],
  es: [
    {
      category: 'General',
      items: [
        { question: '¿Qué industrias atiende Stellar Labor?', answer: 'Servimos a los sectores de petróleo y gas, petroquímica, construcción, eléctrica, costa afuera, química, telecomunicaciones y hospitalidad en toda América del Norte.' },
        { question: '¿Qué áreas geográficas cubren?', answer: 'Operamos en 38 estados de los Estados Unidos, con profundidad particular en las regiones de la Costa del Golfo, Medio Oeste y Oeste.' },
        { question: '¿Cuánto tiempo lleva Stellar Labor en el negocio?', answer: 'Nuestro equipo de liderazgo aporta más de 30 años de experiencia combinada en soluciones de fuerza laboral y personal industrial.' },
      ],
    },
    {
      category: 'Para Empleadores',
      items: [
        { question: '¿Qué tan rápido pueden desplegar trabajadores?', answer: 'Para la mayoría de oficios y categorías laborales, podemos desplegar trabajadores calificados en 24 a 48 horas. Las movilizaciones a gran escala generalmente se completan en una a dos semanas.' },
        { question: '¿Sus trabajadores son sometidos a pruebas de drogas y verificación de antecedentes?', answer: 'Sí. Cada trabajador pasa por nuestro proceso de evaluación multi-etapa que incluye verificación de antecedentes, pruebas de drogas, evaluación de habilidades y verificación de credenciales antes del despliegue.' },
        { question: '¿Manejan la compensación laboral y la nómina?', answer: 'Sí. Como empleador registrado, gestionamos toda la nómina, compensación laboral, administración de beneficios y obligaciones de cumplimiento para nuestra fuerza laboral desplegada.' },
        { question: '¿Cuál es su historial de seguridad?', answer: 'Mantenemos un historial de seguridad líder en la industria con protocolos rigurosos de capacitación, orientaciones específicas del sitio y monitoreo continuo de seguridad en cada compromiso.' },
      ],
    },
    {
      category: 'Para Trabajadores',
      items: [
        { question: '¿Cómo aplico para trabajo?', answer: 'Visite nuestra página de Talento y envíe su información a través de nuestro formulario de aplicación. También puede enviar su currículum directamente a nuestro equipo de reclutamiento.' },
        { question: '¿Qué tipos de posiciones están disponibles?', answer: 'Colocamos trabajadores especializados (electricistas, tuberos, soldadores, mecánicos industriales), obreros generales, operadores de equipo y técnicos especializados en múltiples industrias.' },
        { question: '¿Ofrecen beneficios?', answer: 'Sí. Los trabajadores elegibles reciben pago competitivo, opciones de seguro de salud y otros beneficios. Las ofertas específicas varían según el tipo de asignación y duración.' },
        { question: '¿Recibiré capacitación en seguridad?', answer: 'Absolutamente. Todos los trabajadores completan nuestro programa de orientación de seguridad, y muchas asignaciones incluyen capacitación específica del sitio antes del despliegue.' },
      ],
    },
  ],
}

// =============================================================================
// 404 Page
// =============================================================================

export const NOT_FOUND = {
  en: {
    title: 'Page Not Found',
    message: "The page you're looking for doesn't exist or has been moved.",
    backHome: 'Back to Home',
    contactUs: 'Contact Us',
  },
  es: {
    title: 'Página No Encontrada',
    message: 'La página que busca no existe o ha sido movida.',
    backHome: 'Volver al Inicio',
    contactUs: 'Contáctenos',
  },
}

// =============================================================================
// Form Labels
// =============================================================================

export const FORMS = {
  en: {
    // Contact form
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message Sent',
    messageSentDetail: 'Thank you for reaching out. Our team will be in touch within one business day.',
    subjectOptions: ['Staffing Inquiry', 'Employment Opportunity', 'Partnership', 'General Question', 'Other'],
    selectTopic: 'Select a topic',
    // Employer form
    companyName: 'Company Name',
    contactName: 'Contact Name',
    industry: 'Industry',
    workersNeeded: 'Workers Needed',
    timeline: 'Timeline',
    projectDetails: 'Project Details',
    submit: 'Submit Inquiry',
    submitting: 'Submitting...',
    inquiryReceived: 'Inquiry Received',
    inquiryReceivedDetail: 'Our staffing team will review your requirements and contact you within 24 hours.',
    selectIndustry: 'Select industry',
    whenNeedWorkers: 'When do you need workers?',
    timelineOptions: ['Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month', 'Planning phase'],
    projectPlaceholder: 'Describe your workforce needs, project scope, and any specific requirements...',
    // Talent form
    tradeArea: 'Trade / Skill Area',
    yearsExp: 'Years of Experience',
    certifications: 'Certifications',
    availability: 'Availability',
    submitApp: 'Submit Application',
    appReceived: 'Application Received',
    appReceivedDetail: 'Thank you for your interest. A recruiter will review your information and reach out shortly.',
    selectTrade: 'Select your trade',
    tradeOptions: ['Electrician', 'Pipefitter', 'Welder', 'Millwright', 'Instrument Technician', 'Heavy Equipment Operator', 'Carpenter', 'Iron Worker', 'General Labor', 'Process Operator', 'Safety Professional', 'Other'],
    expOptions: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
    selectExp: 'Select experience',
    whenStart: 'When can you start?',
    availOptions: ['Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month'],
    certPlaceholder: 'List any relevant certifications (OSHA 10/30, NCCER, TWIC, etc.)',
    resumeNote: 'For a complete application, please also email your resume to',
    required: 'This field is required',
  },
  es: {
    fullName: 'Nombre Completo',
    email: 'Email',
    phone: 'Teléfono',
    company: 'Empresa',
    subject: 'Asunto',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    messageSent: 'Mensaje Enviado',
    messageSentDetail: 'Gracias por comunicarse. Nuestro equipo se pondrá en contacto dentro de un día hábil.',
    subjectOptions: ['Consulta de Personal', 'Oportunidad de Empleo', 'Asociación', 'Pregunta General', 'Otro'],
    selectTopic: 'Seleccione un tema',
    companyName: 'Nombre de la Empresa',
    contactName: 'Nombre de Contacto',
    industry: 'Industria',
    workersNeeded: 'Trabajadores Necesitados',
    timeline: 'Cronograma',
    projectDetails: 'Detalles del Proyecto',
    submit: 'Enviar Consulta',
    submitting: 'Enviando...',
    inquiryReceived: 'Consulta Recibida',
    inquiryReceivedDetail: 'Nuestro equipo de personal revisará sus requisitos y lo contactará en 24 horas.',
    selectIndustry: 'Seleccione industria',
    whenNeedWorkers: '¿Cuándo necesita trabajadores?',
    timelineOptions: ['Inmediatamente', 'Dentro de 1 semana', 'Dentro de 2 semanas', 'Dentro de 1 mes', 'Fase de planificación'],
    projectPlaceholder: 'Describa sus necesidades de personal, alcance del proyecto y cualquier requisito específico...',
    tradeArea: 'Área de Oficio / Habilidad',
    yearsExp: 'Años de Experiencia',
    certifications: 'Certificaciones',
    availability: 'Disponibilidad',
    submitApp: 'Enviar Aplicación',
    appReceived: 'Aplicación Recibida',
    appReceivedDetail: 'Gracias por su interés. Un reclutador revisará su información y se comunicará pronto.',
    selectTrade: 'Seleccione su oficio',
    tradeOptions: ['Electricista', 'Tubero', 'Soldador', 'Mecánico Industrial', 'Técnico de Instrumentación', 'Operador de Equipo Pesado', 'Carpintero', 'Trabajador del Hierro', 'Mano de Obra General', 'Operador de Proceso', 'Profesional de Seguridad', 'Otro'],
    expOptions: ['Menos de 1 año', '1-3 años', '3-5 años', '5-10 años', '10+ años'],
    selectExp: 'Seleccione experiencia',
    whenStart: '¿Cuándo puede comenzar?',
    availOptions: ['Inmediatamente', 'Dentro de 1 semana', 'Dentro de 2 semanas', 'Dentro de 1 mes'],
    certPlaceholder: 'Liste cualquier certificación relevante (OSHA 10/30, NCCER, TWIC, etc.)',
    resumeNote: 'Para una aplicación completa, también envíe su currículum por email a',
    required: 'Este campo es obligatorio',
  },
}
