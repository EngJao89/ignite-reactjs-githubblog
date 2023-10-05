import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { api } from '../../../../lib/axios'
import { SearchIssues } from '../SearchIssues'
import { IssueCard, IssuesContainer, IssuesList } from './styles'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

interface Issue {
  id: string
  title: string
  body: string
  createdAt: Date
}

export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([])

  const searchIssues = useCallback(async (text = '') => {
    const response = await api.get(
      `search/issues?q=${text}%20repo:`,
    )
    const { items } = response.data
    const issues = items.map((item: any) => ({
      id: item.number,
      title: item.title,
      body: item.body,
      createdAt: item.created_at,
    }))

    setIssues(issues)
  }, [])

  useEffect(() => {
    searchIssues()
  }, [searchIssues])

  return (
    <IssuesContainer>
      <SearchIssues results={issues.length} onSubmit={searchIssues} />
      <IssuesList>
        {issues.map((issue) => (
          <IssueCard to={`/post/${issue.id}`} key={issue.id}>
            <header>
              <h1>{issue.title}</h1>
              <span>
                {formatDistanceToNow(new Date(issue.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </header>
            <ReactMarkdown>
              {issue.body.length > 200
                ? issue.body.substring(0, 200) + '...'
                : issue.body}
            </ReactMarkdown>
          </IssueCard>
        ))}
      </IssuesList>
    </IssuesContainer>
  )
}
