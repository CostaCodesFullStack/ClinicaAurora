import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Profissionais | Clínica Aurora',
  description: 'Conheça a equipe conceitual e a abordagem individualizada da Clínica Aurora.',
}

export default function ProfissionaisPage() {
  return <AuroraSite />
}
