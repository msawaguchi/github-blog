import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { GithubInfoContext } from '../../../../contexts/GithubInfoContexts'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const searchGithubIssues = useContextSelector(
    GithubInfoContext,
    (context) => {
      return context.searchGithubIssues
    },
  )

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await searchGithubIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input type="text" placeholder="search content" {...register('query')} />
    </SearchFormContainer>
  )
}
