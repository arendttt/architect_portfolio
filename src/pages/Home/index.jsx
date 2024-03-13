import { Container, Header, Grid } from "./styles";

import { Footer } from "../../components/Footer";

import logo from "../../assets/logo.svg"

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

export function Home() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Camila Nunes Arendt" />

        <div className="intro">
          <div className="menu">
            <a href="">Sobre mim</a>
            <a href="">Blog</a>
            <a href="" className="checked">Contato</a>
          </div>

          <p>
            O design de interiores é mais do que estética; é uma expressão artística que influencia nosso bem-estar. 
            Ambientes bem planejados não só proporcionam conforto, mas estimulam a produtividade e a serenidade. 
            A organização eficiente dos espaços contribui para uma rotina sem estresse. Além disso, o design reflete a personalidade, elevando a autoestima e a 
            sensação de pertencimento. Investir em um design cuidadoso não é apenas estético, mas um passo vital para criar um ambiente que potencializa uma vida 
            plena e significativa.
          </p>
        </div>
      </Header>

      <main>
        <Grid>
          <div className="item img01">
            <img src={img1} alt="" />
            <a href="" className="span01">Projeto 01</a>
          </div>

          <div className="item img02">
            <img src={img2} alt=""  />
            <a href="" className="span02">Conteúdo do blog: Revestimentos, qual o melhor.</a>
          </div>

          <div className="item img03">
            <img src={img3} alt=""  />
            <a href="" className="span03">Projeto 02</a>
          </div>
          
          <div className="item img04">
            <img src={img4} alt=""  />
            <a href="" className="span04">Conteúdo do blog: Tudo sobre paleta de cores</a>
          </div>

        </Grid>

        <li>
          <ul>Sobre mim</ul>
          <ul>Blog</ul>
          <ul>Contato</ul>
        </li>

      </main>

      <Footer />

    </Container>
  )
};