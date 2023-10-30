import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 54rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  footer {
    height: 8rem;
  }
`
export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4.75rem 0 3rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    height: 50px;
    border: 2px solid ${(props) => props.theme['base-border']};
    padding: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      opacity: 1; /* Firefox */
    }
  }
`

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
