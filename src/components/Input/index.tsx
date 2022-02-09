import { Container } from "./styles";
import { SiGooglemaps } from "react-icons/si";

interface InputProps {
  onChange: () => void;
}

export function Input({ onChange }: InputProps) {
  return (
    <Container>
      <div>
        <SiGooglemaps color="#ea1d2c" size={25} />
      </div>
      <input
        type="text"
        placeholder="Endereço de entrega e número"
        onChange={() => onChange}
      />
    </Container>
  );
}
