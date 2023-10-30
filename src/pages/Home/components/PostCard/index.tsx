import { PostCardContainer } from './styles'

interface Issue {
  title: string
  body: string
  number: number
}

interface PostCardProps {
  issue: Issue
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h2>{issue.title}</h2>
        <small>ha 1 dia</small>
      </header>
      <p>{issue.body}</p>
    </PostCardContainer>
  )
}
