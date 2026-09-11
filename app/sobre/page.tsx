import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Sobre a Clínica Aurora | Estética Avançada',
  description: 'Conheça a filosofia de cuidado, acolhimento e naturalidade da Clínica Aurora.',
}

export default function SobrePage() {
  return <AuroraSite />
}
