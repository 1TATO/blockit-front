import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Header } from "../../components/Header";

import { Container, Content } from "./styles";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";

export function Login() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Email obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate("/dashboard");
      } catch (err) {
        const validationErrors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [signIn, navigate]
  );

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
