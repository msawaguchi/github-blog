/* eslint-disable camelcase */
import { useContext, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
  FaUpRightFromSquare,
} from 'react-icons/fa6'

import { IssueContainer, PostContainer, HeaderCardContainer } from './styles'

import { CardListSocial } from '../../components/CardListSocials'
import { CardHeader } from '../../components/CardHeader'
import { GithubInfoContext } from '../../contexts/GithubInfoContexts'
import { api } from '../../lib/axios'

export function Issue() {
  const { user } = useContext(GithubInfoContext)
  const { html_url, login } = user

  const [mdPost, setMdPost] = useState('')
  const [title, setTitle] = useState('')
  const [commentsUrl, setCommentsUrl] = useState('')
  const [comments, setComments] = useState(0)
  const [issueUrl, setIssueUrl] = useState('')
  const [date, setDate] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const fetchIssue = async () => {
      const response = await api.get(
        `/repos/msawaguchi/github-blog/issues/${id}`,
      )

      if (response.data) {
        const { body, comments_url, title, html_url, created_at, comments } =
          response.data
        setMdPost(body)
        setTitle(title)
        setCommentsUrl(comments_url)
        setIssueUrl(html_url)
        setDate(created_at)
        setComments(comments)
      }
    }

    fetchIssue()
  }, [id])

  if (!mdPost) {
    return (
      <IssueContainer>
        <HeaderCardContainer>
          <h1> Post not found ..</h1>
        </HeaderCardContainer>
      </IssueContainer>
    )
  }

  return (
    <IssueContainer>
      <HeaderCardContainer>
        <CardHeader>
          <a href="/">
            <FaChevronLeft /> back
          </a>
          <a href={issueUrl}>
            read on github <FaUpRightFromSquare />
          </a>
        </CardHeader>
        <h1>{title}</h1>
        <CardListSocial>
          <a href={html_url}>
            <FaGithub />
            <span>{login}</span>
          </a>
          <a href={issueUrl}>
            <FaCalendarDay />
            <span>{date}</span>
          </a>
          <a href={commentsUrl}>
            <FaComment />
            <span>{comments} comments</span>
          </a>
        </CardListSocial>
      </HeaderCardContainer>
      <PostContainer>
        <Markdown>{mdPost}</Markdown>
      </PostContainer>
      <footer />
    </IssueContainer>
  )
}
