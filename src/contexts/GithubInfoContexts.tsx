/* eslint-disable camelcase */
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface GithubUser {
  name: string
  login: string
  followers: number
  company?: string
  bio?: string
  avatar_url?: string
  html_url: string
}

interface Issue {
  title: string
  body: string
  number: number
}

interface GithubInfosContext {
  user: GithubUser | null
  issues: Issue[] | null
  totalCount: number
  fetchGithubIssues: () => Promise<void>
  searchGithubIssues: (query?: string) => Promise<void>
}

interface GithubInfoProviderProps {
  children: ReactNode
}

export const GithubInfoContext = createContext({} as GithubInfosContext)

export function GithubInfoProvider({ children }: GithubInfoProviderProps) {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [issues, setIssues] = useState<Issue[] | null>([])
  const [totalCount, setTotalCount] = useState(0)

  const fetchGithubUser = useCallback(async () => {
    const response = await api.get('users/msawaguchi')

    if (response.data) {
      const { name, login, followers, company, bio, avatar_url, html_url } =
        response.data

      const githubUser = {
        name,
        login,
        followers,
        company,
        bio,
        avatar_url,
        html_url,
      }
      setUser(githubUser)
    }
  }, [])

  const fetchGithubIssues = useCallback(async () => {
    const response = await api.get(
      '/search/issues?q=repo:msawaguchi/github-blog',
    )

    if (response.data) {
      const { total_count, items } = response.data
      setIssues(items)
      setTotalCount(total_count)
    }
  }, [])

  const searchGithubIssues = async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:msawaguchi/github-blog`,
    )

    if (response.data) {
      const { total_count, items } = response.data
      setIssues(items)
      setTotalCount(total_count)
    }
  }

  useEffect(() => {
    fetchGithubUser()
    fetchGithubIssues()
  }, [fetchGithubUser, fetchGithubIssues])

  return (
    <GithubInfoContext.Provider
      value={{
        user,
        issues,
        totalCount,
        fetchGithubIssues,
        searchGithubIssues,
      }}
    >
      {children}
    </GithubInfoContext.Provider>
  )
}
