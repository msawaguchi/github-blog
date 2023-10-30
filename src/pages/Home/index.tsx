/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import { HeaderCard } from './components/HeaderCard'
import { PostCard } from './components/PostCard'
import { HomeContainer, MiddleSection, PostListContainer } from './styles'
import { GithubInfoContext } from '../../contexts/GithubInfoContexts'
import { useContext } from 'react'

export function Home() {
  const { totalCount, issues } = useContext(GithubInfoContext)

  return (
    <HomeContainer>
      <HeaderCard />
      <MiddleSection>
        <div>
          <h3>Posts</h3>
          <small>
            {totalCount} post{totalCount > 1 && 's'} (issues)
          </small>
        </div>
        <input type="text" placeholder="search content" />
      </MiddleSection>
      <PostListContainer>
        {issues &&
          issues.map((issue) => (
            <Link to={`/issue/${issue.number}`} key={issue.number}>
              <PostCard issue={issue} />
            </Link>
          ))}
      </PostListContainer>
      <footer />
    </HomeContainer>
  )
}
