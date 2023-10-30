import Markdown from 'react-markdown'

import { HeaderCard } from './components/HeaderCard'
import { IssueContainer, PostContainer } from './styles'

export function Issue() {
  const markdownPost = `## Syntax highlighting
  `

  return (
    <IssueContainer>
      <HeaderCard />
      <PostContainer>
        <Markdown>{markdownPost}</Markdown>
      </PostContainer>
    </IssueContainer>
  )
}
