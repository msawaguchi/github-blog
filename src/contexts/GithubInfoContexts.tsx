/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
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

interface GithubInfosContext {
  user: GithubUser | null
}

interface GithubInfoProviderProps {
  children: ReactNode
}

export const GithubInfoContext = createContext({} as GithubInfosContext)

export function GithubInfoProvider({ children }: GithubInfoProviderProps) {
  const [user, setUser] = useState<GithubUser | null>(null)

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

  const fetchGithubRepo = useCallback(async () => {
    const response = await api.get(
      'users/search/issues/repo:msawaguchi/github-blog',
    )

    // if (response.data) {
    //   const { name, login, followers, company, bio, avatar_url, html_url } =
    //     response.data

    //   const githubUser = {
    //     name,
    //     login,
    //     followers,
    //     company,
    //     bio,
    //     avatar_url,
    //     html_url,
    //   }

    //   setUser(githubUser)
    // }
    console.log(response)
  }, [])

  useEffect(() => {
    fetchGithubUser()
    fetchGithubRepo()
  }, [fetchGithubUser, fetchGithubRepo])

  return (
    <GithubInfoContext.Provider value={{ user }}>
      {children}
    </GithubInfoContext.Provider>
  )
}
