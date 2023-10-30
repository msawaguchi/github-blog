import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 296px;
  background-color: #0e243a;

  img {
    &:first-child {
      width: 100%;
      height: 100%;
    }

    &:nth-child(2) {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
