import { ReactNode } from 'react'
import { PageContainer } from './styles'

interface PageProps {
  children: ReactNode
}

export function Page({ children }: PageProps) {
  return <PageContainer>{children}</PageContainer>
}
