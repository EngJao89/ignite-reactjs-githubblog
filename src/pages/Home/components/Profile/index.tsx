import { useCallback, useEffect, useState } from 'react'
import { ProfileContainer, ProfileContent, ProfileTitle } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../../../lib/axios'
import { Link } from '../../../../components/Link'
import { Highlight, Highlights } from '../../../../components/Highlights'

interface ProfileType {
  avatarUrl: string
  name: string
  bio: string
  htmlUrl: string
  followers: number
  company: string
  login: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>({
    name: '',
    avatarUrl: '',
    bio: '',
    htmlUrl: '',
    followers: 0,
    company: '',
    login: '',
  })

  const getProfile = useCallback(async () => {
    const response = await api.get('/users/EngJao89')
    const {
      avatar_url: avatarUrl,
      name,
      bio,
      html_url: htmlUrl,
      followers,
      company,
      login,
    } = response.data

    setProfile({
      avatarUrl,
      name,
      bio,
      htmlUrl,
      followers,
      company,
      login,
    })
  }, [setProfile])

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <ProfileContainer>
      <img src={profile?.avatarUrl} alt="" width={148} />
      <ProfileContent>
        <ProfileTitle>
          <h1>{profile?.name}</h1>
          <Link
            href={profile?.htmlUrl || ''}
            text="GITHUB"
            childrenSide="after"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileTitle>
        <span>{profile?.bio}</span>

        <Highlights>
          <Highlight text={profile.login}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Highlight>

          <Highlight text={profile.company}>
            <FontAwesomeIcon icon={faBuilding} />
          </Highlight>

          <Highlight text={`${profile.followers} seguidores`}>
            <FontAwesomeIcon icon={faUserGroup} />
          </Highlight>
        </Highlights>
      </ProfileContent>
    </ProfileContainer>
  )
}
