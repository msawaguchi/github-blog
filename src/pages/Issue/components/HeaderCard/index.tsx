import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
  FaUpRightFromSquare,
} from 'react-icons/fa6'
import { HeaderCardContainer } from './styles'
import { CardListSocial } from '../../../../components/CardListSocials'
import { CardHeader } from '../../../../components/CardHeader'

export function HeaderCard() {
  return (
    <HeaderCardContainer>
      <CardHeader>
        <a href="/">
          <FaChevronLeft /> voltar
        </a>
        <a href="#">
          ver no github <FaUpRightFromSquare />
        </a>
      </CardHeader>
      <h1>JavaScript data types and data structures</h1>
      <CardListSocial>
        <div>
          <FaGithub />
          <span>cameronwll</span>
        </div>
        <div>
          <FaCalendarDay />
          <span>Rocketseat</span>
        </div>
        <div>
          <FaComment />
          <span>32 seguidores</span>
        </div>
      </CardListSocial>
    </HeaderCardContainer>
  )
}
