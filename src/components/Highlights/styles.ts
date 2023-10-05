import styled from 'styled-components'

export const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`

export const HighlightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};

  > svg {
    color: ${(props) => props.theme['base-label']};
  }
`
