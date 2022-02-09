import { Container, Content } from "./styles";
import Logo from "../../assets/Logo.png";
import { SigninButton } from "../SigninButton";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />
        <nav>
          <a href="#"> Entregador</a>
          <a href="#"> Restaurante e Mercado</a>
          <a href="#"> Carreiras</a>
          <a href="#"> FakeFood Card</a>
        </nav>

        <div>
          <a href="#"> criar conta</a>
          <SigninButton title="Entrar" />
        </div>
      </Content>
    </Container>
  );
}
