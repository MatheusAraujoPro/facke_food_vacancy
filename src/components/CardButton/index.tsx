import { Container } from "./styles";
import { IoIosArrowForward } from "react-icons/io";

interface CardButtonProps {
  type: "restaurant" | "supermarket";
}
const buttonTitle = {
  restaurant: "Ver opções",
  supermarket: "Buscar lojas",
};

export function CardButton({ type }: CardButtonProps) {
  return (
    <Container type={type}>
      <button type="button" onClick={() => {}}>
        {buttonTitle[type]}
      </button>
      <IoIosArrowForward />
    </Container>
  );
}
