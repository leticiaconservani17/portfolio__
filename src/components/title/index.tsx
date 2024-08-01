import { Title as TitleStyle } from './title'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title
