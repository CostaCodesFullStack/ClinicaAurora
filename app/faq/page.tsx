import type { Metadata } from 'next'
import AuroraSite from '@/components/aurora-site'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Clínica Aurora',
  description: 'Encontre respostas claras para as principais dúvidas sobre avaliação e procedimentos.',
}

export default function FaqPage() {
  return <AuroraSite />
}
