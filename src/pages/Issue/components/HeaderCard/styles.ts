import styled from 'styled-components'

export const HeaderCardContainer = styled.div`
  height: 212px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  border-radius: 10px;
  margin-top: -10%;

  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
