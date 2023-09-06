import gbPosterImg from "./assets/posterghostbusters.jpg"
import bfPosterImg from "./assets/posterbacktothefuture.jpg"
import haPosterImg from "./assets/posterhomealone.jpg"
import Card from "./components/Card";

export default function App() {
  return (
    <>
      {/* <h1>Exercício 2</h1> */}
      <Card title="Pôster do filme Ghostbusters (1984)" posterImg={gbPosterImg} description="Três professores universitários de parapsicologia da Universidade Columbia de Nova Iorque, que subitamente têm sua verba para pesquisa suspensa e são colocados na rua pelo reitor, que os considera uma farsa. Isto, porque o trio prefere estudar manifestações sobrenaturais e aparições de burros, dentre outras coisas do gênero, que a ciência formal não considera. Assim, os três resolvem criar uma empresa especializada em casos de aparições sobrenaturais." />
      <Card title="Pôster do filme Back to the Future (1985)" posterImg={bfPosterImg} description=" Dirigido por Robert Zemeckis e escrito por Zemeckis e Bob Gale, o filme conta a história de Marty McFly (Michael J. Fox), um adolescente que inevitavelmente volta no tempo até 1955. Ele conhece seus futuros pais no colégio e acidentalmente faz sua futura mãe ficar romanticamente interessada por ele. Marty deve consertar o dano na história fazendo com que seus pais se apaixonem e, com a ajuda do Dr. Emmett Brown (Christopher Lloyd), encontrar um modo de voltar para 1985." />
      <Card title="Pôster do filme Home Alone (1990)" posterImg={haPosterImg} description="É um filme de comédia de Natal estadunidense de 1990, escrito e produzido por John Hughes e dirigido por Chris Columbus. O filme é estrelado por Macaulay Culkin como Kevin McCallister, um menino de 8 anos que é erroneamente deixado para trás quando sua família voa para Paris para suas férias de Natal. Kevin inicialmente aprecia estar sozinho em casa, mas logo tem que lidar com dois ladrões, interpretados por Joe Pesci e Daniel Stern. O filme também apresenta John Heard e Catherine O'Hara como os pais de Kevin." />
    </>
  )
}