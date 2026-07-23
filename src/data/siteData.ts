import { Service, Differential, TimelineStep, TccExample, Testimonial, FaqItem } from '../types';

export const DOCTOR_INFO = {
  name: 'Dra. Bianca Durães',
  title: 'Psicóloga Clínica & Terapeuta Cognitivo-Comportamental',
  crp: 'CRP 04/66933',
  university: 'Psicóloga Clínica',
  postGraduation: 'Especialização em Terapia Cognitivo-Comportamental (TCC)',
  slogan: '🧠 Trazer novos sentidos à sua história para desfrutar de uma vida leve e feliz.',
  shortBio: 'Prazer, sou Bianca Durães, uma Psicóloga que ama de paixão a sua profissão e tem se dedicado a atender mulheres em situação de vulnerabilidade social/emocional e o público infanto-juvenil, além de qualquer demanda e idade.',
  bioParagraph1: 'Prazer, sou Bianca Durães, uma Psicóloga que ama de paixão a sua profissão e embora esteja apta a atender qualquer demanda e idade, tem se dedicado a atender mulheres em situação de vulnerabilidade social/emocional e o público infanto-juvenil. O meu maior objetivo é ajudá-los trazer novos sentidos a sua história a fim de desfrutarem de uma vida leve e feliz.',
  bioParagraph2: 'Faço atendimentos através da abordagem: Terapia Cognitiva Comportamental a qual tem grande eficácia em seus tratamentos e atua de maneira dinâmica junto ao paciente.',
  photoUrl: '/src/assets/images/dra_bianca_photo_1784831015617.jpg',
  whatsappNumber: '553192117661',
  formattedPhone: '(31) 92117-661',
  email: 'biancaduraespsi@gmail.com',
  instagram: '@biancaduraespsi',
  instagramUrl: 'https://instagram.com/biancaduraespsi',
  address: 'Rua dos Médicos, 911, Alípio de Melo - Belo Horizonte/MG',
  addressShort: 'Alípio de Melo, Belo Horizonte - MG',
  availableStatus: 'Agenda aberta para novos atendimentos em Belo Horizonte e Online',
  insurancePolicyNote: 'Atendimento exclusivamente particular.',
};

export const SERVICES: Service[] = [
  {
    id: 'psicoterapia-individual',
    title: 'Psicoterapia Individual',
    category: 'Autoconhecimento e Saúde Mental',
    badge: 'Mais Procurado',
    description: 'Atendimento personalizado para adultos e adolescentes. Um processo focado em compreender padrões emocionais, tratar ansiedade, depressão, estresse crônico e fortalecer a autoestima.',
    targetAudience: ['Adultos', 'Adolescentes', 'Pessoas com ansiedade ou burnout'],
    frequency: 'Sessões semanais (50 minutos)',
    whatsappMessage: 'Olá Dra. Bianca! Gostaria de agendar uma consulta de Psicoterapia Individual.',
    iconName: 'UserCheck',
  },
  {
    id: 'terapia-de-casal',
    title: 'Terapia de Casal',
    category: 'Relacionamentos e Vínculos',
    badge: 'Relacionamentos',
    description: 'Espaço neutro e mediado para casais que desejam aprimorar a comunicação, superar crises, alinhar objetivos de vida e reconstruir a confiança e a intimidade afetiva.',
    targetAudience: ['Casais em crise', 'Casais que buscam comunicação assertiva'],
    frequency: 'Sessões semanais ou quinzenais (60 minutos)',
    whatsappMessage: 'Olá Dra. Bianca! Gostaria de mais informações sobre a Terapia de Casal.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'orientacao-profissional',
    title: 'Orientação Profissional & Carreira',
    category: 'Desenvolvimento e Transição',
    badge: 'Carreira',
    description: 'Processo estruturado para auxílio na tomada de decisões de carreira, transição profissional, superação do medo de falar em público e prevenção da Síndrome de Burnout.',
    targetAudience: ['Profissionais em transição', 'Jovens em escolha profissional', 'Líderes'],
    frequency: 'Programa estruturado de 8 a 12 sessões',
    whatsappMessage: 'Olá Dra. Bianca! Quero entender como funciona a Orientação Profissional.',
    iconName: 'Briefcase',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Sigilo Absoluto & Ética',
    description: 'Seguimento rigoroso do Código de Ética Profissional do Psicólogo (CFP), garantindo confidencialidade total e proteção aos seus dados.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Acolhimento Humanizado',
    description: 'Ambiente seguro, empático e sem julgamentos morais, onde todas as suas experiências e emoções são respeitadas.',
    iconName: 'Heart',
  },
  {
    title: 'Prática Baseada em Evidências',
    description: 'Utilização de técnicas e protocolos validados cientificamente pela Terapia Cognitivo-Comportamental (TCC).',
    iconName: 'Brain',
  },
  {
    title: 'Flexibilidade de Formato',
    description: 'Atendimentos Presenciais em Belo Horizonte (Alípio de Melo) e Online para todo o Brasil via plataforma criptografada.',
    iconName: 'Laptop',
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: 'Primeiro Contato',
    subtitle: 'Alinhamento Inicial sem Compromisso',
    description: 'Você entra em contato via WhatsApp para tirar dúvidas sobre horários, investimento e modalidade de atendimento.',
    details: ['Resposta rápida pelo WhatsApp', 'Definição do melhor horário para sua agenda', 'Informações sobre atendimento particular'],
  },
  {
    number: 2,
    title: 'Avaliação Inicial',
    subtitle: 'Compreensão das Suas Demandas',
    description: 'Nas primeiras sessões, mapeamos o seu histórico de vida, queixas principais e estabelecemos juntos os objetivos terapêuticos.',
    details: ['Análise do quadro emocional', 'Construção da relação terapêutica', 'Elaboração do plano personalizado'],
  },
  {
    number: 3,
    title: 'Sessões Regulares & Evolução',
    subtitle: 'Desenvolvimento e Autonomia',
    description: 'Damos início às sessões semanais utilizando ferramentas da TCC para transformar pensamentos disfuncionais e gerar resultados duradouros.',
    details: ['Exercícios práticos entre sessões', 'Acompanhamento contínuo dos seus avanços', 'Foco no seu bem-estar e independência emocional'],
  },
];

export const EXPERTISE_AREAS = [
  { name: 'Transtornos de Ansiedade', icon: 'Wind', desc: 'Crises de pânico, ansiedade generalizada (TAG), fobias e preocupação excessiva.' },
  { name: 'Depressão & Humor', icon: 'Sun', desc: 'Tristeza profunda, falta de motivação, esgotamento e quadros depressivos.' },
  { name: 'Síndrome de Burnout', icon: 'Flame', desc: 'Estresse ocupacional crônico, exaustão física e mental derivada do trabalho.' },
  { name: 'Luto & Transições de Vida', icon: 'Feather', desc: 'Elaboração de perdas, términos de relacionamento e mudanças bruscas de fase.' },
  { name: 'Relacionamentos Interpessoais', icon: 'Users', desc: 'Dificuldade de impor limites, dependência emocional e conflitos familiares.' },
  { name: 'Autoestima & Autocobrança', icon: 'Sparkles', desc: 'Perfeccionismo paralisante, autocrítica severa e fortalecimento da autoimagem.' },
];

export const TCC_EXAMPLES: TccExample[] = [
  {
    id: 'ansiedade-trabalho',
    situation: 'Apresentação de um projeto importante na reunião de equipe.',
    thoughtAutomatic: 'Vou travar na frente de todos e vão pensar que sou incompetente.',
    emotion: 'Ansiedade intensa (9/10), medo e palpitação.',
    behaviorAutomatic: 'Evitar falar, gaguejar por nervosismo ou adiar a reunião.',
    thoughtAlternative: 'Estou bem preparado. Sentir um pouco de nervosismo é normal, e isso não significa que sou incompetente.',
    emotionNew: 'Confiança moderada, ansiedade controlável (4/10).',
    behaviorNew: 'Apresentar o projeto com clareza e responder às perguntas com calma.',
  },
  {
    id: 'relacionamento',
    situation: 'Parceiro(a) demorou algumas horas para responder a uma mensagem.',
    thoughtAutomatic: 'Ele(a) perdeu o interesse por mim ou está chateado(a).',
    emotion: 'Insegurança, angústia e ciúme.',
    behaviorAutomatic: 'Mandar várias mensagens seguidas ou agir de forma fria no próximo encontro.',
    thoughtAlternative: 'Existem vários motivos neutros para a demora (trabalho, trânsito). Isso não define nosso relacionamento.',
    emotionNew: 'Tranquilidade e paciência.',
    behaviorNew: 'Aguardar a resposta normalmente e manter a comunicação saudável.',
  },
  {
    id: 'perfeccionismo',
    situation: 'Cometer um pequeno erro em um relatório ou tarefa.',
    thoughtAutomatic: 'Estraguei tudo. Nunca faço nada perfeito.',
    emotion: 'Frustração profunda e vergonha.',
    behaviorAutomatic: 'Trabalhar até a exaustão para corrigir ou desistir de projetos novos.',
    thoughtAlternative: 'Erros acontecem e são oportunidades de aprendizado. O relatório no geral está excelente.',
    emotionNew: 'Aceitação e alívio.',
    behaviorNew: 'Corrigir o erro pontual e enviar o trabalho sem autocobrança excessiva.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amanda S.',
    role: 'Engenheira de Software',
    rating: 5,
    comment: 'A Dra. Bianca é incrivelmente empática e atenciosa. As sessões de TCC me deram ferramentas práticas para lidar com crises de ansiedade no trabalho que me paralisavam há anos.',
    tag: 'Ansiedade & Trabalho',
    date: 'Atendimento Online',
  },
  {
    id: '2',
    name: 'Juliana M.',
    role: 'Arquiteta',
    rating: 5,
    comment: 'Um ambiente de acolhimento genuíno e sem julgamentos no consultório do Alípio de Melo. Aprendi a colocar limites saudáveis nas minhas relações e recuperei minha autoestima.',
    tag: 'Autoestima & Autoconhecimento',
    date: 'Atendimento Presencial - BH',
  },
  {
    id: '3',
    name: 'Carlos & Patrícia E.',
    role: 'Casal',
    rating: 5,
    comment: 'A terapia de casal com a Dra. Bianca nos ajudou muito. Aprendemos a nos escutar com respeito e a resolver conflitos sem mágoas acumuladas.',
    tag: 'Terapia de Casal',
    date: 'Atendimento Online',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'consultas',
    question: 'Como funciona a primeira sessão de terapia?',
    answer: 'A primeira sessão é um momento de acolhimento e escuta inicial. Conhecerei sua história, suas principais queixas e objetivos. Explicarei como funciona a Terapia Cognitivo-Comportamental (TCC) e tiraremos todas as suas dúvidas sobre o processo.',
  },
  {
    id: 'faq-3',
    category: 'online',
    question: 'Onde fica o consultório presencial e como funciona a terapia online?',
    answer: 'O consultório presencial está localizado na Rua dos Médicos, 911, no bairro Alípio de Melo em Belo Horizonte - MG. Para quem prefere a modalidade online, os atendimentos acontecem por videochamada em plataforma segura e criptografada para todo o Brasil e exterior.',
  },
  {
    id: 'faq-4',
    category: 'consultas',
    question: 'Qual a duração e frequência das sessões?',
    answer: 'As sessões têm duração média de 50 minutos e ocorrem semanalmente. A constância é fundamental no início do tratamento para garantir o progresso e o desenvolvimento de autonomia.',
  },
  {
    id: 'faq-5',
    category: 'geral',
    question: 'Como fica o sigilo das informações compartilhadas?',
    answer: 'O sigilo é absoluto e garantido pelo Código de Ética Profissional do Psicólogo. Tudo o que for conversado durante as sessões permanece estritamente confidencial.',
  },
];

