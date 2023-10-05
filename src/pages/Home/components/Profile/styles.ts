import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 2rem;
  width: 100%;

  margin-top: -5rem;

  background-color: ${(props) => props.theme['base-profile']};

  padding: 2rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 1;
  gap: 2rem;

  > span {
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`
