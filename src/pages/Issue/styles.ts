import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const IssueTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 1rem;
  width: 100%;

  margin-top: -5rem;

  background-color: ${(props) => props.theme['base-profile']};

  padding: 2rem;

  > h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const IssueLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const Body = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  padding: 2rem;
  gap: 1rem;

  white-space: pre-wrap;

  color: ${(props) => props.theme['base-text']};
  font-weight: 700;

  > pre {
    background: ${(props) => props.theme['base-post']};

    padding: 2rem;
    width: 100%;

    border-radius: 6px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }
`
