import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaUpRightFromSquare,
  FaFaceSadTear,
} from 'react-icons/fa6'
import { useContextSelector } from 'use-context-selector'

import { HeaderCardContainer, CardProfileInfo } from './styles'

import { CardListSocial } from '../../../../components/CardListSocials'
import { CardHeader } from '../../../../components/CardHeader'
import { GithubInfoContext } from '../../../../contexts/GithubInfoContexts'

export function HeaderCard() {
  const user = useContextSelector(GithubInfoContext, (context) => {
    return context.user
  })

  if (!user) {
    return (
      <HeaderCardContainer>
        <CardProfileInfo>
          <h1>
            <FaFaceSadTear /> User Not Found...
          </h1>
          <p>Please enter a valid Github User</p>
        </CardProfileInfo>
      </HeaderCardContainer>
    )
  }

  return (
    <HeaderCardContainer>
      <img src={user?.avatar_url} alt="" />

      <CardProfileInfo>
        <CardHeader>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>
            github <FaUpRightFromSquare />
          </a>
        </CardHeader>
        <p>{user?.bio}</p>
        <CardListSocial>
          <a href={user?.html_url}>
            <FaGithub />
            <span>{user?.login}</span>
          </a>
          {user?.company && (
            <a href={user?.html_url}>
              <FaBuilding />
              <span>{user?.company}</span>
            </a>
          )}
          <a href={user?.html_url}>
            <FaUserGroup />
            <span>{user?.followers} followers</span>
          </a>
        </CardListSocial>
      </CardProfileInfo>
    </HeaderCardContainer>
  )
}
