export interface PathologyInfo {
  description: string
  symptoms: string[]
  nextSteps: string
  urgentCare: string
}

export interface Pathology {
  name: string
  displayName: string
  percentage: number
  info?: PathologyInfo
}

export const pathologyData: Pathology[] = [
  {
    name: 'Lung Opacity',
    displayName: 'Opacidade Pulmonar',
    percentage: 93.6,
    info: {
      description:
        'Áreas onde o tecido pulmonar aparece mais denso que o normal na radiografia',
      symptoms: ['Falta de ar', 'Dor no peito', 'Tosse persistente', 'Fadiga'],
      nextSteps:
        'Requer avaliação médica imediata. Tomografia computadorizada pode ser necessária para determinar a causa exata e extensão.',
      urgentCare:
        'Procure atendimento imediato se sentir dificuldade severa de respiração, dor no peito ou tosse com sangue.',
    },
  },
  {
    name: 'Effusion',
    displayName: 'Derrame Pleural',
    percentage: 59.7,
    info: {
      description: 'Acúmulo de fluido no espaço pleural ao redor dos pulmões',
      symptoms: [
        'Dificuldade para respirar',
        'Dor aguda no peito',
        'Tosse seca',
        'Sensação de peso no peito',
      ],
      nextSteps:
        'Consulta médica urgente necessária. Possível procedimento de drenagem pode ser necessário.',
      urgentCare:
        'Procure atendimento de emergência se sentir falta de ar severa ou dor no peito.',
    },
  },
  {
    name: 'Atelectasis',
    displayName: 'Atelectasia',
    percentage: 45.2,
    info: {
      description: 'Colapso parcial ou completo do tecido pulmonar',
      symptoms: ['Falta de ar', 'Respiração rápida', 'Tosse'],
      nextSteps:
        'Avaliação médica necessária para determinar a causa subjacente.',
      urgentCare:
        'Procure atendimento se a respiração se tornar severamente comprometida.',
    },
  },
  {
    name: 'Infiltration',
    displayName: 'Infiltração',
    percentage: 38.9,
    info: {
      description: 'Acúmulo anormal de substâncias nos tecidos pulmonares',
      symptoms: ['Tosse', 'Falta de ar', 'Dor no peito', 'Febre baixa'],
      nextSteps:
        'Avaliação médica necessária para determinar a causa e tratamento apropriado.',
      urgentCare:
        'Procure atendimento se houver dificuldade respiratória severa ou dor no peito intensa.',
    },
  },
  {
    name: 'Mass',
    displayName: 'Massa',
    percentage: 12.4,
    info: {
      description: 'Formação de tecido anormal que pode ser benigna ou maligna',
      symptoms: [
        'Tosse persistente',
        'Dor no peito',
        'Perda de peso inexplicada',
        'Fadiga',
      ],
      nextSteps:
        'Avaliação médica urgente necessária. Biópsia pode ser necessária para diagnóstico definitivo.',
      urgentCare:
        'Procure atendimento imediato se houver tosse com sangue ou dor no peito severa.',
    },
  },
  {
    name: 'Nodule',
    displayName: 'Nódulo',
    percentage: 8.7,
    info: {
      description: 'Pequena massa de tecido que pode ser benigna ou maligna',
      symptoms: [
        'Geralmente assintomático',
        'Tosse ocasional',
        'Dor no peito leve',
      ],
      nextSteps:
        'Monitoramento regular necessário. Tomografia computadorizada pode ser necessária para acompanhamento.',
      urgentCare:
        'Procure atendimento se houver crescimento rápido ou sintomas respiratórios severos.',
    },
  },
  {
    name: 'Pneumonia',
    displayName: 'Pneumonia',
    percentage: 67.3,
    info: {
      description: 'Infecção que inflama os alvéolos em um ou ambos os pulmões',
      symptoms: [
        'Febre',
        'Calafrios',
        'Tosse com catarro',
        'Dificuldade para respirar',
        'Dor no peito',
      ],
      nextSteps:
        'Atenção médica imediata necessária. Tratamento com antibióticos pode ser necessário.',
      urgentCare:
        'Procure atendimento de emergência para febre alta, dificuldade severa de respiração ou dor no peito.',
    },
  },
  {
    name: 'Pneumothorax',
    displayName: 'Pneumotórax',
    percentage: 5.2,
    info: {
      description: 'Acúmulo de ar entre o pulmão e a parede torácica',
      symptoms: [
        'Dor no peito súbita e aguda',
        'Falta de ar',
        'Respiração rápida',
        'Ansiedade',
      ],
      nextSteps:
        'Atenção médica imediata necessária. Possível necessidade de drenagem torácica.',
      urgentCare:
        'Procure atendimento de emergência imediatamente. Esta é uma condição potencialmente fatal.',
    },
  },
  {
    name: 'Consolidation',
    displayName: 'Consolidação',
    percentage: 52.1,
    info: {
      description:
        'Áreas do tecido pulmonar preenchidas com líquido em vez de ar',
      symptoms: [
        'Tosse produtiva',
        'Febre',
        'Falta de ar',
        'Desconforto no peito',
      ],
      nextSteps:
        'Avaliação médica necessária para determinar a causa e tratamento apropriado.',
      urgentCare:
        'Procure atendimento imediato para sintomas severos ou febre alta.',
    },
  },
  {
    name: 'Edema',
    displayName: 'Edema Pulmonar',
    percentage: 41.8,
    info: {
      description: 'Acúmulo de líquido nos alvéolos pulmonares',
      symptoms: [
        'Falta de ar severa',
        'Tosse com espuma',
        'Ansiedade',
        'Sudorese',
      ],
      nextSteps:
        'Atenção médica imediata necessária. Tratamento com diuréticos e oxigênio pode ser necessário.',
      urgentCare:
        'Procure atendimento de emergência imediatamente. Esta é uma condição potencialmente fatal.',
    },
  },
  {
    name: 'Emphysema',
    displayName: 'Enfisema',
    percentage: 29.3,
    info: {
      description:
        'Doença pulmonar que danifica os alvéolos, causando falta de ar',
      symptoms: [
        'Falta de ar progressiva',
        'Tosse crônica',
        'Fadiga',
        'Perda de peso',
      ],
      nextSteps:
        'Avaliação médica necessária. Tratamento inclui broncodilatadores e reabilitação pulmonar.',
      urgentCare:
        'Procure atendimento se houver piora súbita da falta de ar ou tosse com sangue.',
    },
  },
  {
    name: 'Fibrosis',
    displayName: 'Fibrose',
    percentage: 33.7,
    info: {
      description: 'Formação de tecido cicatricial nos pulmões',
      symptoms: [
        'Falta de ar progressiva',
        'Tosse seca',
        'Fadiga',
        'Perda de peso',
      ],
      nextSteps:
        'Avaliação médica necessária. Tratamento pode incluir medicamentos antifibróticos.',
      urgentCare:
        'Procure atendimento se houver piora súbita da falta de ar ou febre.',
    },
  },
  {
    name: 'Pleural Thickening',
    displayName: 'Espessamento Pleural',
    percentage: 18.9,
    info: {
      description: 'Espessamento da membrana que reveste os pulmões',
      symptoms: ['Dor no peito', 'Falta de ar', 'Tosse seca', 'Fadiga'],
      nextSteps:
        'Avaliação médica necessária. Monitoramento regular pode ser necessário.',
      urgentCare:
        'Procure atendimento se houver dor no peito severa ou dificuldade respiratória.',
    },
  },
  {
    name: 'Hernia',
    displayName: 'Hérnia',
    percentage: 3.1,
    info: {
      description:
        'Protrusão de órgãos através de uma abertura na parede torácica',
      symptoms: [
        'Dor no peito',
        'Dificuldade para respirar',
        'Sensação de peso no peito',
        'Tosse',
      ],
      nextSteps:
        'Avaliação médica necessária. Cirurgia pode ser necessária em alguns casos.',
      urgentCare:
        'Procure atendimento se houver dor severa ou dificuldade respiratória.',
    },
  },
  {
    name: 'Lung Lesion',
    displayName: 'Lesão Pulmonar',
    percentage: 15.6,
    info: {
      description: 'Área de tecido pulmonar danificado ou anormal',
      symptoms: ['Tosse', 'Dor no peito', 'Falta de ar', 'Fadiga'],
      nextSteps:
        'Avaliação médica necessária. Biópsia pode ser necessária para diagnóstico definitivo.',
      urgentCare:
        'Procure atendimento se houver tosse com sangue ou dor no peito severa.',
    },
  },
  {
    name: 'No Finding',
    displayName: 'Sem Achados',
    percentage: 2.1,
    info: {
      description:
        'Não foram encontradas anormalidades significativas na radiografia',
      symptoms: ['Geralmente assintomático'],
      nextSteps: 'Acompanhamento regular conforme recomendado pelo médico.',
      urgentCare: 'Não aplicável para esta condição.',
    },
  },
  {
    name: 'Enlarged Cardiomediastinum',
    displayName: 'Cardiomediastino Aumentado',
    percentage: 22.4,
    info: {
      description: 'Aumento anormal do coração e estruturas mediastinais',
      symptoms: ['Falta de ar', 'Dor no peito', 'Tosse', 'Fadiga'],
      nextSteps:
        'Avaliação cardiológica necessária. Eletrocardiograma e ecocardiograma podem ser necessários.',
      urgentCare:
        'Procure atendimento se houver dor no peito severa ou dificuldade respiratória.',
    },
  },
  {
    name: 'Cardiomegaly',
    displayName: 'Cardiomegalia',
    percentage: 31.8,
    info: {
      description: 'Aumento anormal do tamanho do coração',
      symptoms: [
        'Falta de ar',
        'Fadiga',
        'Inchaço nas pernas',
        'Tosse noturna',
      ],
      nextSteps:
        'Avaliação cardiológica necessária. Tratamento pode incluir medicamentos para insuficiência cardíaca.',
      urgentCare:
        'Procure atendimento se houver falta de ar severa ou dor no peito.',
    },
  },
  {
    name: 'Fracture',
    displayName: 'Fratura',
    percentage: 0,
    info: {
      description: 'Quebra ou fissura em um osso',
      symptoms: [
        'Dor intensa',
        'Inchaço',
        'Dificuldade de movimento',
        'Deformidade visível',
      ],
      nextSteps:
        'Avaliação médica imediata necessária. Raios-X podem ser necessários para confirmar o diagnóstico.',
      urgentCare:
        'Procure atendimento de emergência se houver dor severa, deformidade visível ou dificuldade de movimento.',
    },
  },
]
