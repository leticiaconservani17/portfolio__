import { P } from './paragrafo'

export type Props = {
  children: string
  type?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragrafo
