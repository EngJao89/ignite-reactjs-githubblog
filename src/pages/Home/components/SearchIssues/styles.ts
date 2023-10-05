import styled from 'styled-components'

export const SearchIssuesContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 1rem;
`

export const Labels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > label {
    font-weight: 700;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    font-weight: 400;
    font-size: 0.875rem;
    text-align: right;

    color: ${(props) => props.theme['base-span']};
  }
`

export const InputSearch = styled.input`
  padding: 0.75rem 1rem;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  width: 100%;

  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
