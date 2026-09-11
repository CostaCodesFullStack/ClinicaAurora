import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Resultados | Clínica Aurora',
  description: 'Veja uma galeria visual demonstrativa de resultados da Clínica Aurora.',
}

export default function ResultadosPage() {
  return <AuroraSite />
}
