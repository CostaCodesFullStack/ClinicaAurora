import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Agende sua Avaliação | Clínica Aurora',
  description: 'Dê o primeiro passo para entender quais possibilidades de cuidado fazem sentido para você.',
}

export default function ContatoPage() {
  return <AuroraSite />
}
