import React from 'react'
import Title from '../../components/title'
import Project from '../../components/projeto'
import { List } from './projects'

const Projects: React.FC = () => (
  <section>
    <Title fontSize={16}>Projectos</Title>
    <List>
      <li>
        <Project
          title="Calculadora aritmética"
          description="Projeto de calculadora aritmética usando VUE "
          link="https://github.com/leticiaconservani17/vue_Calculator"
        />
      </li>
      <li>
        <Project
          title="Lading page - aniversário"
          description="Projeto de lading page de aniversário"
          link="https://birthday-landing-pg.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Cópia página Disney"
          description="Projeto de recriação da página principal da Disney Plus"
          link="https://github.com/leticiaconservani17/disney-clone"
        />
      </li>
      <li>
        <Project
          title="Lading page - Encanto"
          description="Exercício de criação lading page de algum filme."
          link="https://lading-page-encanto.vercel.app"
        />
      </li>
      <li>
        <Project
          title="Agenda simples"
          description="Criação de uma agenda de contatos simples"
          link="https://projeto-agenda-opal.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Projeto/exercício usando bootstrap"
          description="Descrição do Projeto 2"
          link="https://bootstrap-project-ten-rho.vercel.app"
        />
      </li>
      <li>
        <Project
          title="Lading page usando booststrap"
          description="Exercício de criação de lading page usando bootstrap"
          link="https://bootstrap-ladingpage-b19o.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Lista de tarefas"
          description="Projeto de lista de tarefas usando jQuery"
          link="https://vercel.com/leticias-projects-299c3422/projeto-jquery"
        />
      </li>
    </List>
  </section>
)

export default Projects
