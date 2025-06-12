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
  { name: 'Infiltration', displayName: 'Infiltração', percentage: 38.9 },
  { name: 'Mass', displayName: 'Massa', percentage: 12.4 },
  { name: 'Nodule', displayName: 'Nódulo', percentage: 8.7 },
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
  { name: 'Pneumothorax', displayName: 'Pneumotórax', percentage: 5.2 },
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
  { name: 'Edema', displayName: 'Edema Pulmonar', percentage: 41.8 },
  { name: 'Emphysema', displayName: 'Enfisema', percentage: 29.3 },
  { name: 'Fibrosis', displayName: 'Fibrose', percentage: 33.7 },
  {
    name: 'Pleural Thickening',
    displayName: 'Espessamento Pleural',
    percentage: 18.9,
  },
  { name: 'Hernia', displayName: 'Hérnia', percentage: 3.1 },
  { name: 'Lung Lesion', displayName: 'Lesão Pulmonar', percentage: 15.6 },
  { name: 'No Finding', displayName: 'Sem Achados', percentage: 2.1 },
  {
    name: 'Enlarged Cardiomediastinum',
    displayName: 'Cardiomediastino Aumentado',
    percentage: 22.4,
  },
  { name: 'Cardiomegaly', displayName: 'Cardiomegalia', percentage: 31.8 },
]
