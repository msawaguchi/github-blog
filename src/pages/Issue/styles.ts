import styled from 'styled-components'

export const IssueContainer = styled.div`
  max-width: 54rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  footer {
    height: 8rem;
  }
`
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

export const PostContainer = styled.div`
  max-width: 54rem;
  padding: 2.5rem;

  p {
    line-height: 2;

    img {
      width: 100%;
    }
  }
`
