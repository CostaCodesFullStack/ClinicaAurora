import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Profissionais | Clínica Aurora',
  description: 'Conheça os profissionais demonstrativos da Clínica Aurora.',
}

export default function ProfissionaisPage() {
  return <AuroraSite />
}
