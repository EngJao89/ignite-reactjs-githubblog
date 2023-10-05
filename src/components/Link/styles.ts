import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-weight: 700;
  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};

  text-decoration: none;
  text-transform: uppercase;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
