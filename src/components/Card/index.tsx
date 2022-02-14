import { CardButton } from "../CardButton";
import { Container, Content } from "./styles";
import restaurantImg from "../../assets/restaurant.png";
import supermarketImg from "../../assets/market.png";

interface CardProps {
  title: string;
  type: "restaurant" | "supermarket";
}

export function Card({ title, type }: CardProps) {
  return (
    <Container type={type}>
      <h1>{title}</h1>
      <Content>
        <CardButton type={type} />
        {type === "restaurant" ? (
          <img src={restaurantImg} alt="Restaurant" />
        ) : (
          <img src={supermarketImg} alt="SuperMarket" />
        )}
      </Content>
    </Container>
  );
}
