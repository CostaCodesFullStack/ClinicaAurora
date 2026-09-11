import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Procedimentos | Clínica Aurora',
  description: 'Conheça os procedimentos e possibilidades de cuidado da Clínica Aurora.',
}

export default function ProcedimentosPage() {
  return <AuroraSite />
}
