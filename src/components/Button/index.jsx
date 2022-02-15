import { Container } from "./styles";

export function Button({ onClick, children }) {
  return <Container onClick={onClick}>{children}</Container>;
}
