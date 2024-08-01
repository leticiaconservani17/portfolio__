import Title from '../../components/title'
import Avatar from '../../components/avatar'
import { P } from '../../components/paragrafo/paragrafo'

import { Description, SidebarContainer, ThemeButton } from './sidebar'

type Props = {
  themeChange: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Letícia Conservani Ortiz</Title>
      <P type="secundario" fontSize={16}>
        @leticiaconservani17
      </P>
      <Description type="principal" fontSize={12}>
        Engenheira Front-end
      </Description>
      <ThemeButton onClick={props.themeChange}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
