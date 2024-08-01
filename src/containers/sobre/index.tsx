import { P } from '../../components/paragrafo/paragrafo'
import Title from '../../components/title'
import { GitSection } from './about'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <P type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus
      modi reiciendis, quisquam, vero placeat illum consectetur animi, nam nobis
      quibusdam veniam magnam enim culpa. Eveniet autem voluptate optio vel!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sapiente
      magni porro doloribus, nobis iure repudiandae impedit nihil ut nesciunt
      ratione cum, provident autem, repellendus quasi temporibus molestias
      maxime? Rem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laborum ipsum veniam deleniti, obcaecati voluptatem repellat earum nulla
      rerum ullam adipisci dolore animi, modi hic ratione vero soluta ipsa
      similique ducimus!
    </P>
    <GitSection>
      <img src="https://github-readme-stats.vercel.app/api?username=leticiaconservani17&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leticiaconservani17&layout=compact&langs_count=7&theme=dracula" />
    </GitSection>
  </section>
)

export default About
