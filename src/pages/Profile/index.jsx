import { Container, Main } from "./styles";

import { Footer } from "../../components/Footer";

import profileImg from "../../assets/perfil.png";
import logo from "../../assets/logo.svg";
import img1  from "../../assets/profImg1.jpg"
import img2  from "../../assets/profImg2.jpg"

export function Profile() {
  return (
    <Container>
      <Main>
        <div className="content">
          <div className="section1">
            <img src={profileImg} alt="" className="profileImg" />

            <div className="intro">
              <div className="menu">
                <a href="">Sobre mim</a>
                <a href="">Blog</a>
                <a href="" className="checked">Contato</a>
              </div>

              <p>
                Sou uma pessoa dinâmica e prática, sempre em busca de novidades que estejam alinhadas com a minha trajetória. Tenho dedicado meu tempo à 
                faculdade de arquitetura e urbanismo e durante esse percurso, tenho acumulado experiências e me aprimorado através de cursos especializados.
                Há alguns anos, iniciei no design de interiores, e ao longo do tempo, essa prática tem se transformado em uma paixão. Busco o aperfeiçoamento, 
                visando proporcionar qualidade e funcionalidade em cada projeto que empreendo.
              </p>

              <img src={logo} alt="" className="logo"/>

            </div>

            
          </div>

          <div className="section2">
            <p>
            Sou uma pessoa dinâmica e prática, sempre em busca de novidades que estejam alinhadas com a minha trajetória. Tenho dedicado meu tempo à faculdade de 
            arquitetura e urbanismo e durante esse percurso, tenho acumulado experiências e me aprimorado através de cursos especializados.
            Há alguns anos, iniciei no design de interiores, e ao longo do tempo, essa prática tem se transformado em uma paixão. Busco o aperfeiçoamento, visando 
            proporcionar qualidade e funcionalidade em cada projeto que empreendo.
              <br />
              <br />
            Sou uma pessoa dinâmica e prática, sempre em busca de novidades que estejam alinhadas com a minha trajetória. Tenho dedicado meu tempo à faculdade de 
            arquitetura e urbanismo e durante esse percurso, tenho acumulado experiências e me aprimorado através de cursos especializados.
            </p>

            <div className="item img01">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="section3">
            <div className="item img02">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>

        <li>
          <ul>Sobre mim</ul>
          <ul>Blog</ul>
          <ul>Contato</ul>
        </li>

      
      </Main>

      <Footer />

    </Container>
  );
};