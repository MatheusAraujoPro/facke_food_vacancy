import { Container } from "./styles";

interface ButtonProps {
  title: string;
}

export function SigninButton({ title }: ButtonProps) {
  return (
    <Container type="button" onClick={() => {}}>
      {title}
    </Container>
  );
}
