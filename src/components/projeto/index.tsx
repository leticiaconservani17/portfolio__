import Title from '../title'
import { P } from '../paragrafo/paragrafo'
import { Card, ButtonLink } from './project'

const Project = () => (
  <Card>
    <Title>Projeto Lista</Title>
    <P type="secundario">lista feita com Vue</P>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)

export default Project
