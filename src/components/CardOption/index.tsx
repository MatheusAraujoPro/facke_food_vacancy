import { SectionButton, Container } from "./styles";

import drinksImg from "../../assets/drinks.png";
import pharmacy from "../../assets/pharmacy.png";
import express from "../../assets/express.png";
import petshop from "../../assets/petshop.png";

import { IoIosArrowForward } from "react-icons/io";

interface CardOptionsProps {
  type: "drinks" | "pharmacy" | "express" | "petshop";
  title: string;
}

const types = {
  drinks: drinksImg,
  pharmacy: pharmacy,
  express: express,
  petshop: petshop,
};

export function CardOption({ title, type }: CardOptionsProps) {
  return (
    <Container type={type}>
      <div className="image_content">
        <img src={types[type]} alt="Drinks" />
      </div>
      <SectionButton>
        <button>{title}</button>
        <IoIosArrowForward />
      </SectionButton>
    </Container>
  );
}
