export type LineIconName = 'focus' | 'leaf' | 'path' | 'home';

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre', label: 'Sobre la Dra. Patricia' },
  { href: '/tratamientos', label: 'Tratamientos' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
];

export const differencials: { title: string; description: string; icon: LineIconName }[] = [
  {
    title: 'Diagnóstico médico integral',
    description: 'Evaluación clínica completa antes de indicar cualquier procedimiento.',
    icon: 'focus',
  },
  {
    title: 'Plan terapéutico personalizado',
    description: 'Protocolo diseñado según objetivos, tiempos biológicos y antecedentes.',
    icon: 'leaf',
  },
  {
    title: 'Técnica conservadora y natural',
    description: 'Resultados progresivos que respetan expresión e identidad.',
    icon: 'path',
  },
  {
    title: 'Seguimiento clínico documentado',
    description: 'Controles posteriores para ajustar y sostener resultados.',
    icon: 'home',
  },
];

export const highlightedTreatments = [
  {
    title: 'Armonización facial',
    category: 'Estética médica',
    description: 'Diagnóstico de proporciones y plan progresivo para equilibrar rasgos con naturalidad.',
  },
  {
    title: 'Acné y secuelas',
    category: 'Dermatología clínica',
    description: 'Control médico del proceso inflamatorio y abordaje de marcas para mejorar textura y tono.',
  },
  {
    title: 'Bioestimulación de colágeno',
    category: 'Estética médica',
    description: 'Protocolos para mejorar firmeza y calidad de piel con resultados graduales y sostenidos.',
  },
];

export const processSteps = [
  {
    title: 'Consulta inicial',
    description: 'Escuchamos tus objetivos, antecedentes y contexto clínico para una evaluación completa.',
  },
  {
    title: 'Diagnóstico y plan',
    description: 'Definimos prioridades terapéuticas y una propuesta realista, con tiempos y etapas claras.',
  },
  {
    title: 'Intervención',
    description: 'Aplicamos el protocolo indicado con técnica médica precisa y criterios de seguridad.',
  },
  {
    title: 'Control evolutivo',
    description: 'Monitoreamos respuesta clínica, indicamos cuidados y realizamos ajustes cuando corresponde.',
  },
];

export const faqItems = [
  {
    question: '¿Y si no sé qué tratamiento necesito?',
    answer:
      'Es normal. La primera consulta está pensada para evaluar tu caso y definir un plan médico claro según tus objetivos.',
  },
  {
    question: '¿Voy a verme natural después del procedimiento?',
    answer:
      'Sí. El enfoque prioriza cambios progresivos, respetando rasgos, expresión y armonía facial.',
  },
  {
    question: '¿En cuánto tiempo voy a notar resultados?',
    answer:
      'Depende del tratamiento. En consulta se explica qué resultados son inmediatos, cuáles progresivos y los tiempos esperables.',
  },
  {
    question: '¿Cuánto duran los resultados y cuándo conviene mantenerlos?',
    answer:
      'La duración varía según técnica, objetivo y metabolismo. Se define un esquema de mantenimiento personalizado.',
  },
  {
    question: '¿Qué pasa si tengo piel sensible o antecedentes dermatológicos?',
    answer:
      'Se contempla desde el diagnóstico inicial. Los antecedentes clínicos guían la indicación, dosis y seguimiento.',
  },
];

export const faqGroups = [
  {
    title: 'Consulta inicial',
    items: [faqItems[0], faqItems[1]],
  },
  {
    title: 'Resultados y tiempos',
    items: [faqItems[2], faqItems[3]],
  },
  {
    title: 'Seguridad médica',
    items: [faqItems[4]],
  },
];

export const clinicalDermatology = [
  'Acné y secuelas',
  'Rosácea y dermatitis',
  'Control de lunares y lesiones cutáneas',
  'Melasma y pigmentaciones',
];

export const medicalAesthetics = [
  'Armonización facial',
  'Toxina botulínica',
  'Rellenos con ácido hialurónico',
  'Bioestimulación de colágeno',
  'Protocolos de calidad de piel',
];
