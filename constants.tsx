import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Stethoscope, 
  UserCheck, 
  Zap, 
  Clock, 
  Award,
  Syringe,
  Drill // Note: Lucide might not have Drill, using construct in Services
} from 'lucide-react';
import { ServiceItem, TestimonialItem, FaqItem, ProcessStep, NavItem } from './types';

export const COMPANY_NAME = "OdontoExcellence";
export const PHONE_NUMBER = "5511999999999"; // Example number
export const ADDRESS = "Av. Paulista, 1000 - Bela Vista, São Paulo - SP";

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Como Funciona', href: '#process' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Limpeza e Prevenção',
    description: 'Higienização profissional, remoção de tártaro e controle de doenças gengivais, com orientações de cuidado diário.',
    icon: ShieldCheck
  },
  {
    id: '2',
    title: 'Clareamento Dental',
    description: 'Procedimentos seguros, com resultados visíveis e naturais para trazer mais brilho ao sorriso.',
    icon: Sparkles
  },
  {
    id: '3',
    title: 'Lentes e Facetas',
    description: 'Soluções estéticas de alta performance para transformar a harmonia e aparência dos dentes.',
    icon: Smile
  },
  {
    id: '4',
    title: 'Ortodontia',
    description: 'Correção de dentes desalinhados e problemas de mordida com opções modernas e discretas.',
    icon: UserCheck
  },
  {
    id: '5',
    title: 'Implantes Dentários',
    description: 'Reabilitação oral com tecnologia avançada para substituição de dentes perdidos com conforto e naturalidade.',
    icon: Award
  },
  {
    id: '6',
    title: 'Restaurações Estéticas',
    description: 'Tratamentos conservadores com resinas de alta resistência e estética superior.',
    icon: Zap
  },
  {
    id: '7',
    title: 'Tratamento de Canal',
    description: 'Eliminação de dor e infecções com técnicas precisas para salvar dentes comprometidos.',
    icon: Stethoscope
  },
  {
    id: '8',
    title: 'Próteses Dentárias',
    description: 'Soluções completas para recuperar mastigação, estética e funcionalidade.',
    icon: Clock // Abstract representation for durability/time
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Avaliação detalhada',
    description: 'Análise completa da sua saúde bucal.'
  },
  {
    number: '02',
    title: 'Explicação técnica',
    description: 'Entenda cada necessidade do seu sorriso.'
  },
  {
    number: '03',
    title: 'Plano de tratamento',
    description: 'Cronograma claro e orçamento transparente.'
  },
  {
    number: '04',
    title: 'Execução e Cuidado',
    description: 'Procedimentos com tecnologia e conforto.'
  },
  {
    number: '05',
    title: 'Acompanhamento',
    description: 'Suporte contínuo para manter os resultados.'
  }
];

export const DIFFERENTIALS = [
  "Atendimento humanizado e acolhedor",
  "Profissionais experientes e qualificados",
  "Equipamentos modernos e técnicas atualizadas",
  "Foco em estética, função e prevenção",
  "Ambientes confortáveis e seguros"
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ana Cláudia Silva',
    text: 'Atendimento excelente, profissionais cuidadosos e explicam tudo com clareza. Resultado melhor do que eu esperava.',
    rating: 5
  },
  {
    id: '2',
    name: 'Roberto Mendes',
    text: 'Equipe muito atenciosa e ambiente impecável. Fiz clareamento e fiquei completamente satisfeito.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mariana Costa',
    text: 'Após anos com desconforto por causa de um dente perdido, coloquei um implante e recuperei minha autoestima.',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'O atendimento é indicado para todas as idades?',
    answer: 'Sim. Atendemos crianças, adultos e idosos com protocolos específicos para cada fase da vida.'
  },
  {
    id: '2',
    question: 'O clareamento dental dói?',
    answer: 'Depende de cada caso. A maior parte dos pacientes sente apenas leve sensibilidade temporária.'
  },
  {
    id: '3',
    question: 'Quanto tempo dura o tratamento com implantes?',
    answer: 'A durabilidade é longa, variando conforme higiene, rotina e acompanhamento periódico.'
  },
  {
    id: '4',
    question: 'Vocês atendem convênios?',
    answer: 'Trabalhamos com sistema de reembolso e alguns convênios selecionados. Entre em contato para verificar a cobertura do seu plano.'
  }
];