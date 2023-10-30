import { HeaderContainer } from './styles'

import headerImg from '../../assets/Cover.png'
import logoImg from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="" />
      <img src={logoImg} alt="" />
    </HeaderContainer>
  )
}
