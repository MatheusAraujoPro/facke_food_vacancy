import { Card } from "../Card";
import { Input } from "../Input";
import { SigninButton } from "../SigninButton";
import { Container, SearchPanel, Cards } from "./styles";

export function MainContent() {
  const onChange = () => {};
  return (
    <Container>
      <h1>Tudo pra facilitar seu dia a dia</h1>
      <p>O que você precisa está aqui. Peça e receba onde estiver</p>

      <SearchPanel>
        <Input onChange={onChange} />
        <SigninButton title="Buscar" />
      </SearchPanel>
      <Cards>
        <Card title="Restaurante" type="restaurant" />
        <Card title="Mercado" type="supermarket" />
      </Cards>
    </Container>
  );
}
