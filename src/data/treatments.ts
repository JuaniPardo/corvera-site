import { LineIconName } from './siteContent';

export interface Treatment {
  slug: string;
  title: string;
  category: 'dermatologia' | 'estetica';
  categoryLabel: string;
  icon: LineIconName;
  image?: string; // URL de imagen representativa del tratamiento
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedure: {
    duration: string;
    sessions: string;
    recovery: string;
  };
  forWho: string[];
  faq: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  // Dermatología clínica
  {
    slug: 'acne-y-secuelas',
    title: 'Acné y secuelas',
    category: 'dermatologia',
    categoryLabel: 'Dermatología clínica',
    icon: 'focus',
    image: '/images/treatments/acne.jpg',
    shortDescription: 'Abordaje integral para controlar inflamación y tratar marcas residuales.',
    fullDescription:
      'El acné es una condición inflamatoria crónica que requiere un enfoque médico integral. Combinamos tratamientos tópicos, orales cuando corresponde, y procedimientos específicos para controlar brotes activos y mejorar las secuelas como cicatrices y manchas post-inflamatorias.',
    benefits: [
      'Control efectivo de brotes inflamatorios',
      'Reducción de marcas y cicatrices',
      'Mejora de textura y tono de piel',
      'Plan de mantenimiento personalizado',
    ],
    procedure: {
      duration: '30-45 min por sesión',
      sessions: 'Variable según severidad',
      recovery: 'Mínima a moderada según procedimiento',
    },
    forWho: [
      'Pacientes con acné activo leve a severo',
      'Personas con cicatrices o marcas de acné',
      'Quienes buscan prevenir nuevos brotes',
    ],
    faq: [
      {
        question: '¿El tratamiento de acné es doloroso?',
        answer:
          'La mayoría de los procedimientos son bien tolerados. En casos de peelings o microagujas, se puede aplicar anestesia tópica para mayor comodidad.',
      },
      {
        question: '¿Cuánto tiempo tarda en verse mejoría?',
        answer:
          'Los brotes activos suelen controlarse en 4-8 semanas. Las cicatrices requieren más tiempo y múltiples sesiones para ver resultados significativos.',
      },
    ],
  },
  {
    slug: 'rosacea-y-dermatitis',
    title: 'Rosácea y dermatitis',
    category: 'dermatologia',
    categoryLabel: 'Dermatología clínica',
    icon: 'leaf',
    image: '/images/treatments/rosacea.jpg',
    shortDescription: 'Plan médico para reducir episodios inflamatorios y reforzar barrera cutánea.',
    fullDescription:
      'La rosácea y las dermatitis son condiciones inflamatorias crónicas que afectan la calidad de vida. Nuestro enfoque combina tratamiento médico, cuidado de la barrera cutánea y educación sobre factores desencadenantes para lograr una piel más estable y menos reactiva.',
    benefits: [
      'Reducción de enrojecimiento y reactividad',
      'Control de episodios inflamatorios',
      'Fortalecimiento de la barrera cutánea',
      'Identificación de factores desencadenantes',
    ],
    procedure: {
      duration: '30 min consulta inicial',
      sessions: 'Seguimiento mensual inicial',
      recovery: 'Sin tiempo de recuperación',
    },
    forWho: [
      'Personas con enrojecimiento facial persistente',
      'Pacientes con piel reactiva o sensible',
      'Quienes experimentan brotes recurrentes',
    ],
    faq: [
      {
        question: '¿La rosácea tiene cura?',
        answer:
          'La rosácea es una condición crónica que se controla pero no se cura. Con tratamiento adecuado, los pacientes logran largos períodos de estabilidad.',
      },
      {
        question: '¿Puedo usar maquillaje si tengo rosácea?',
        answer:
          'Sí, con productos adecuados para piel sensible. En consulta te orientamos sobre opciones seguras y técnicas de camuflaje.',
      },
    ],
  },
  {
    slug: 'control-de-lunares',
    title: 'Control de lunares y lesiones cutáneas',
    category: 'dermatologia',
    categoryLabel: 'Dermatología clínica',
    icon: 'home',
    image: '/images/treatments/lunares.jpg',
    shortDescription: 'Evaluación periódica de lesiones pigmentadas y otras alteraciones cutáneas.',
    fullDescription:
      'El control dermatológico regular permite detectar cambios en lunares y lesiones cutáneas de forma temprana. Utilizamos dermatoscopía digital para documentar y comparar lesiones en el tiempo, identificando aquellas que requieren seguimiento más cercano o intervención.',
    benefits: [
      'Detección temprana de cambios sospechosos',
      'Registro fotográfico para seguimiento',
      'Tranquilidad con controles regulares',
      'Evaluación profesional con dermatoscopía',
    ],
    procedure: {
      duration: '20-40 min según cantidad de lesiones',
      sessions: 'Anual o semestral según riesgo',
      recovery: 'Sin recuperación necesaria',
    },
    forWho: [
      'Personas con múltiples lunares',
      'Antecedentes familiares de melanoma',
      'Pacientes con piel clara o exposición solar frecuente',
    ],
    faq: [
      {
        question: '¿Cada cuánto debo controlar mis lunares?',
        answer:
          'En general, un control anual es suficiente. Pacientes con factores de riesgo pueden necesitar controles más frecuentes.',
      },
      {
        question: '¿Qué señales debo vigilar entre controles?',
        answer:
          'Cambios en tamaño, forma, color, o la aparición de síntomas como picazón o sangrado. Ante cualquier duda, consultá antes del control programado.',
      },
    ],
  },
  {
    slug: 'melasma-y-pigmentaciones',
    title: 'Melasma y pigmentaciones',
    category: 'dermatologia',
    categoryLabel: 'Dermatología clínica',
    icon: 'path',
    image: '/images/treatments/melasma.jpg',
    shortDescription: 'Protocolos personalizados para despigmentar de forma gradual y sostenida.',
    fullDescription:
      'El melasma y otras hiperpigmentaciones requieren un abordaje paciente y constante. Combinamos despigmentantes tópicos, procedimientos en consultorio y fotoprotección estricta para lograr un tono más uniforme y prevenir recaídas.',
    benefits: [
      'Tono de piel más uniforme',
      'Reducción gradual de manchas',
      'Plan de mantenimiento para prevenir recaídas',
      'Asesoramiento en fotoprotección',
    ],
    procedure: {
      duration: '30-45 min por sesión',
      sessions: '4-6 sesiones iniciales',
      recovery: 'Leve descamación posible',
    },
    forWho: [
      'Personas con manchas faciales',
      'Pacientes con melasma',
      'Quienes buscan tono más parejo',
    ],
    faq: [
      {
        question: '¿El melasma puede volver después del tratamiento?',
        answer:
          'Sí, el melasma tiende a reaparecer sin mantenimiento adecuado. Por eso incluimos un plan de cuidado continuo y fotoprotección.',
      },
      {
        question: '¿Puedo tratar melasma en verano?',
        answer:
          'Es preferible tratarlo en meses de menor exposición solar. En verano nos enfocamos en mantenimiento y protección.',
      },
    ],
  },
  // Estética médica
  {
    slug: 'armonizacion-facial',
    title: 'Armonización facial',
    category: 'estetica',
    categoryLabel: 'Estética médica',
    icon: 'path',
    image: '/images/treatments/armonizacion.jpg',
    shortDescription: 'Plan progresivo para mejorar proporciones sin cambios artificiales.',
    fullDescription:
      'La armonización facial es un enfoque integral que busca equilibrar proporciones y volúmenes respetando la identidad de cada paciente. Utilizamos técnicas combinadas de toxina botulínica, ácido hialurónico y bioestimuladores según un plan personalizado que prioriza resultados naturales.',
    benefits: [
      'Proporciones faciales más equilibradas',
      'Resultados naturales y progresivos',
      'Plan personalizado según tu anatomía',
      'Mantenimiento de tu expresión natural',
    ],
    procedure: {
      duration: '45-60 min sesión completa',
      sessions: 'Plan progresivo en 2-3 etapas',
      recovery: 'Mínima, posible equimosis leve',
    },
    forWho: [
      'Personas que buscan mejorar proporciones faciales',
      'Quienes desean resultados sutiles y naturales',
      'Pacientes que prefieren cambios graduales',
    ],
    faq: [
      {
        question: '¿Voy a verme diferente después de la armonización?',
        answer:
          'El objetivo es verte mejor, no diferente. Trabajamos respetando tus rasgos para un resultado que luzca natural.',
      },
      {
        question: '¿La armonización facial es reversible?',
        answer:
          'Los rellenos de ácido hialurónico son reversibles. La toxina botulínica se metaboliza naturalmente en 4-6 meses.',
      },
    ],
  },
  {
    slug: 'toxina-botulinica',
    title: 'Toxina botulínica',
    category: 'estetica',
    categoryLabel: 'Estética médica',
    icon: 'focus',
    image: '/images/treatments/toxina.jpg',
    shortDescription: 'Aplicación precisa en dosis personalizadas según gesto y anatomía.',
    fullDescription:
      'La toxina botulínica permite suavizar líneas de expresión dinámicas manteniendo naturalidad. Utilizamos técnicas de aplicación precisas y dosis personalizadas que respetan la expresión facial, evitando el aspecto congelado o artificial.',
    benefits: [
      'Líneas de expresión más suaves',
      'Aspecto descansado y fresco',
      'Expresión facial preservada',
      'Prevención de arrugas más profundas',
    ],
    procedure: {
      duration: '15-20 min',
      sessions: 'Cada 4-6 meses',
      recovery: 'Inmediata, sin tiempo de inactividad',
    },
    forWho: [
      'Personas con líneas de expresión en frente, entrecejo o patas de gallo',
      'Quienes buscan prevenir arrugas',
      'Pacientes que desean aspecto más descansado',
    ],
    faq: [
      {
        question: '¿La toxina botulínica duele?',
        answer:
          'Las agujas son muy finas y la aplicación es rápida. La mayoría de los pacientes refieren molestia mínima.',
      },
      {
        question: '¿Cuándo veo los resultados?',
        answer:
          'El efecto comienza a notarse entre el día 3 y 5, con resultado completo a las 2 semanas.',
      },
    ],
  },
  {
    slug: 'rellenos-acido-hialuronico',
    title: 'Rellenos con ácido hialurónico',
    category: 'estetica',
    categoryLabel: 'Estética médica',
    icon: 'home',
    shortDescription: 'Definición de contornos y soporte estructural con criterio médico.',
    fullDescription:
      'El ácido hialurónico permite reponer volúmenes perdidos, definir contornos y mejorar la calidad de la piel. Seleccionamos el tipo de producto según la zona y objetivo, priorizando resultados naturales que mejoren sin transformar.',
    benefits: [
      'Reposición de volumen perdido',
      'Definición de contornos faciales',
      'Mejora de surcos y líneas estáticas',
      'Hidratación profunda de la piel',
    ],
    procedure: {
      duration: '30-45 min',
      sessions: 'Variable según objetivo',
      recovery: 'Posible inflamación leve 24-48hs',
    },
    forWho: [
      'Personas con pérdida de volumen facial',
      'Quienes desean mejorar contornos (labios, mentón, pómulos)',
      'Pacientes con surcos o líneas estáticas',
    ],
    faq: [
      {
        question: '¿Cuánto dura el ácido hialurónico?',
        answer:
          'Dependiendo de la zona y el producto, entre 8 y 18 meses. Los labios suelen durar menos que otras áreas.',
      },
      {
        question: '¿Es seguro el ácido hialurónico?',
        answer:
          'Es una sustancia naturalmente presente en el cuerpo. Utilizamos productos de alta calidad y técnicas seguras.',
      },
    ],
  },
  {
    slug: 'bioestimulacion-colageno',
    title: 'Bioestimulación de colágeno',
    category: 'estetica',
    categoryLabel: 'Estética médica',
    icon: 'leaf',
    shortDescription: 'Estimulación gradual para sostener resultados en el tiempo.',
    fullDescription:
      'Los tratamientos de bioestimulación activan la producción natural de colágeno, mejorando firmeza, elasticidad y calidad de la piel de forma progresiva. Los resultados se construyen con el tiempo y se mantienen de forma más duradera.',
    benefits: [
      'Mayor firmeza y elasticidad',
      'Mejora de la calidad de piel',
      'Resultados progresivos y naturales',
      'Efecto duradero',
    ],
    procedure: {
      duration: '30-45 min',
      sessions: '2-3 sesiones iniciales',
      recovery: 'Mínima, posible enrojecimiento temporal',
    },
    forWho: [
      'Personas con flacidez leve a moderada',
      'Quienes buscan mejorar textura de piel',
      'Pacientes que prefieren resultados graduales',
    ],
    faq: [
      {
        question: '¿Cuándo empiezo a ver resultados de bioestimulación?',
        answer:
          'Los resultados son progresivos. Se comienzan a notar a partir del mes, con mejora continua hasta los 3-6 meses.',
      },
      {
        question: '¿Se puede combinar con otros tratamientos?',
        answer:
          'Sí, la bioestimulación complementa muy bien otros procedimientos. En consulta definimos la secuencia óptima.',
      },
    ],
  },
  {
    slug: 'protocolos-calidad-piel',
    title: 'Protocolos de calidad de piel',
    category: 'estetica',
    categoryLabel: 'Estética médica',
    icon: 'focus',
    shortDescription: 'Combinación de técnicas según diagnóstico y objetivos reales.',
    fullDescription:
      'Los protocolos de calidad de piel combinan diferentes técnicas (peelings, microagujas, luz pulsada, entre otros) de forma personalizada para mejorar textura, luminosidad, poros e hidratación. El plan se adapta a las necesidades específicas de cada piel.',
    benefits: [
      'Piel más luminosa y uniforme',
      'Mejora de textura y poros',
      'Hidratación profunda',
      'Tratamiento personalizado',
    ],
    procedure: {
      duration: '45-60 min',
      sessions: '4-6 sesiones recomendadas',
      recovery: 'Variable según técnica utilizada',
    },
    forWho: [
      'Personas con piel opaca o deshidratada',
      'Quienes buscan mejorar textura general',
      'Pacientes que desean piel más saludable',
    ],
    faq: [
      {
        question: '¿Cada cuánto debo hacer mantenimiento?',
        answer:
          'Después del protocolo inicial, recomendamos sesiones de mantenimiento cada 1-2 meses según el caso.',
      },
      {
        question: '¿Puedo hacer estos tratamientos si tengo piel sensible?',
        answer:
          'Sí, adaptamos las técnicas y productos a cada tipo de piel. La sensibilidad se contempla en el plan.',
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: 'dermatologia' | 'estetica'): Treatment[] {
  return treatments.filter((t) => t.category === category);
}
