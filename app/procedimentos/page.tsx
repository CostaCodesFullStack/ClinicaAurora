import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Procedimentos Estéticos | Clínica Aurora',
  description: 'Conheça possibilidades de cuidado estético pensadas com escuta, técnica e naturalidade.',
}

export default function ProcedimentosPage() {
  return <AuroraSite />
}
