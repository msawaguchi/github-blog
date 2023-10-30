import {
  FaGithub,
  FaBuilding,
  FaUserGroup,
  FaUpRightFromSquare,
  FaFaceSadTear,
} from 'react-icons/fa6'
import { useContext } from 'react'

import { HeaderCardContainer, CardProfileInfo } from './styles'

import { CardListSocial } from '../../../../components/CardListSocials'
import { CardHeader } from '../../../../components/CardHeader'
import { GithubInfoContext } from '../../../../contexts/GithubInfoContexts'

export function HeaderCard() {
  const { user } = useContext(GithubInfoContext)

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
          <div>
            <FaGithub />
            <span>{user?.login}</span>
          </div>
          {user?.company && (
            <div>
              <FaBuilding />
              <span>{user?.company}</span>
            </div>
          )}

          <div>
            <FaUserGroup />
            <span>{user?.followers} followers</span>
          </div>
        </CardListSocial>
      </CardProfileInfo>
    </HeaderCardContainer>
  )
}
