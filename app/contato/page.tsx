import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Contato | Clínica Aurora',
  description: 'Entre em contato com a Clínica Aurora e agende sua avaliação demonstrativa.',
}

export default function ContatoPage() {
  return <AuroraSite />
}
