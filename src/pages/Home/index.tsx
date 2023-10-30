import { Link } from 'react-router-dom'
import { HeaderCard } from './components/HeaderCard'
import { PostCard } from './components/PostCard'
import { HomeContainer, MiddleSection, PostListContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderCard />
      <MiddleSection>
        <div>
          <h3>Publicações</h3>
          <small>6 publications</small>
        </div>
        <input type="text" placeholder="search content" />
      </MiddleSection>
      <PostListContainer>
        <Link to="/issue">
          <PostCard />
        </Link>

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListContainer>
      <footer />
    </HomeContainer>
  )
}
