import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Sobre | Clínica Aurora',
  description: 'Conheça a história, a filosofia e os diferenciais da Clínica Aurora.',
}

export default function SobrePage() {
  return <AuroraSite />
}
