import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;
  width: 26rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    h2 {
      gap: 2rem;
      flex: 4;
    }

    small {
      flex: 1;
      text-align: end;
      margin-top: 8px;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6rem;
  }

  &:hover {
    cursor: pointer;
    box-shadow:
      rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    small {
      color: ${(props) => props.theme.white};
    }

    h2 {
      text-shadow:
    /* White glow */
        0 0 2px #fff,
        0 0 1px ${(props) => props.theme['base-post']},
        0 0 12px ${(props) => props.theme['base-text']};
      transition: text-shadow 0.5s;
    }
  }
`
