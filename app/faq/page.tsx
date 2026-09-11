import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Perguntas frequentes | Clínica Aurora',
  description: 'Encontre respostas para as dúvidas mais comuns sobre a Clínica Aurora.',
}

export default function FaqPage() {
  return <AuroraSite />
}
