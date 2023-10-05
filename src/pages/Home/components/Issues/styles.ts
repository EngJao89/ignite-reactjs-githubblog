import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const IssuesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 4rem;

  margin-bottom: 100px;
`

export const IssuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  width: 100%;
`

export const IssueCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1.25rem;

  padding: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  cursor: pointer;
  text-decoration: none;

  color: ${(props) => props.theme['base-text']};

  > header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;

    > h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      flex: 3;
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      text-align: right;

      flex: 1;
    }
  }
`
