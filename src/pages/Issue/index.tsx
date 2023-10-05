import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../components/Link'
import { Page } from '../../components/Page'
import { Body, IssueLinks, IssueTitleContainer } from './styles'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Highlight, Highlights } from '../../components/Highlights'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueType {
  title: string
  body: string
  createdAt: Date
  comments: number
  login: string
  url: string
}

export function Issue() {
  const [issue, setIssue] = useState<IssueType>({
    title: '',
    body: '',
    createdAt: new Date(),
    comments: 0,
    login: '',
    url: '',
  })
  const { id } = useParams()

  const getIssue = useCallback(async () => {
    const { data } = await api.get(`repos/EngJao89/ignite-reactjs-githubblog/issues/${id}`)
    setIssue({
      title: data.title,
      body: data.body,
      createdAt: data.created_at,
      comments: data.comments,
      login: data.user.login,
      url: data.html_url,
    })
  }, [setIssue, id])

  useEffect(() => {
    getIssue()
  }, [getIssue])

  return (
    <Page>
      <IssueTitleContainer>
        <IssueLinks>
          <Link href="/" text="Voltar" childrenSide="before">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <Link href={issue.url} text="Ver no Github" childrenSide="after">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </IssueLinks>

        <h1>{issue.title}</h1>

        <Highlights>
          <Highlight text={issue.login}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Highlight>
          <Highlight
            text={formatDistanceToNow(new Date(issue.createdAt), {
              locale: ptBR,
              addSuffix: true,
            })}
          >
            <FontAwesomeIcon icon={faCalendarDay} size="lg" />
          </Highlight>
          <Highlight text={`${issue.comments} comentários`}>
            <FontAwesomeIcon icon={faComment} size="lg" />
          </Highlight>
        </Highlights>
      </IssueTitleContainer>

      <Body className="line-break">{issue.body}</Body>
    </Page>
  )
}
