import styled from 'styled-components'

export const HeaderCardContainer = styled.div`
  height: 212px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem;
  border-radius: 10px;
  margin-top: -10%;

  z-index: 1;

  display: flex;
  gap: 2.5rem;

  img {
    width: 120px;
    height: fit-content;
    object-fit: contain;
    border-radius: 10px;
  }
`
export const CardProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`
