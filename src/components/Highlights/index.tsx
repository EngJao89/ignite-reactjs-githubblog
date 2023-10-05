import { ReactNode } from 'react'
import { HighlightContainer, HighlightsContainer } from './styles'

interface HighlightsProps {
  children: ReactNode
}

export function Highlights({ children }: HighlightsProps) {
  return <HighlightsContainer>{children}</HighlightsContainer>
}

interface HighlightProps {
  text: string
  children: ReactNode
}

export function Highlight(props: HighlightProps) {
  return (
    <HighlightContainer>
      {props.children}
      {props.text}
    </HighlightContainer>
  )
}
