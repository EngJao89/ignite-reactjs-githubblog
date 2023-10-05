import { ReactNode } from 'react'
import { LinkContainer } from './styles'

interface LinkProps {
  href: string
  text: string
  children?: ReactNode
  childrenSide?: 'before' | 'after'
}

export function Link(props: LinkProps) {
  return (
    <LinkContainer to={props.href}>
      {props.childrenSide === 'before' && props.children}
      {props.text}
      {props.childrenSide === 'after' && props.children}
    </LinkContainer>
  )
}
