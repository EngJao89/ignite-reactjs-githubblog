import { useState } from 'react'
import { InputSearch, Labels, SearchIssuesContainer } from './styles'

interface SearchIssuesProps {
  onSubmit: (text: string) => void
  results: number
}

export function SearchIssues({ onSubmit, results }: SearchIssuesProps) {
  const [search, setSearch] = useState<string>('')

  return (
    <SearchIssuesContainer
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(search)
      }}
    >
      <Labels>
        <label>Publicações</label>
        <span>{results} Publicações</span>
      </Labels>
      <InputSearch
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchIssuesContainer>
  )
}
