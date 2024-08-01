import Title from '../../components/title'
import Avatar from '../../components/avatar'
import { P } from '../../components/paragrafo/paragrafo'

import { Description, SidebarContainer, ThemeButton } from './sidebar'

const Sidebar = () => (
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
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
