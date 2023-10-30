import styled from 'styled-components'

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
`
