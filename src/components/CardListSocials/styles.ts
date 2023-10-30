import styled from 'styled-components'

export const CardListSocialsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    color: ${(props) => props.theme['base-span']};

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme['base-title']};
      transition: color 0.5s;
    }
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 6px;
    }
  }
`
