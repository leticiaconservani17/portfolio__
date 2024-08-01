import { P } from './paragrafo'

export type Props = {
  children: string
  type?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, type = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragrafo
