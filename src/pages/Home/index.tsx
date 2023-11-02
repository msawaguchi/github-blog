/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { HeaderCard } from './components/HeaderCard'
import { PostCard } from './components/PostCard'
import { HomeContainer, MiddleSection, PostListContainer } from './styles'
import { GithubInfoContext } from '../../contexts/GithubInfoContexts'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const issues = useContextSelector(GithubInfoContext, (context) => {
    return context.issues
  })

  const totalCount = useContextSelector(GithubInfoContext, (context) => {
    return context.totalCount
  })

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
        <SearchForm />
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
