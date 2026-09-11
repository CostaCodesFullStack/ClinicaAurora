import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Resultados & Inspirações | Clínica Aurora',
  description: 'Explore uma galeria visual ilustrativa sobre possibilidades de estética natural e personalizada.',
}

export default function ResultadosPage() {
  return <AuroraSite />
}
