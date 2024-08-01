import React from 'react'
import Title from '../title'
import { P } from '../paragrafo/paragrafo'
import { Card, ButtonLink } from './project'

export type Props = {
  title?: string
  description?: string
  link?: string
}

const Project: React.FC<Props> = ({
  title = '',
  description = '',
  link = ''
}) => (
  <Card>
    <Title>{title}</Title>
    <P type="secundario">{description}</P>
    <ButtonLink href={link}>Visualizar</ButtonLink>
  </Card>
)

export default Project
