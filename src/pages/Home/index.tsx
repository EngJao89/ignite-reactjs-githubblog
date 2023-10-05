import { Page } from '../../components/Page'
import { Issues } from './components/Issues'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <Page>
      <Profile />
      <Issues />
    </Page>
  )
}
