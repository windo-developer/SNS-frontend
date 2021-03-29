import styled from "styled-components";
import { drakModeVar } from "./apollo";

const Container = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => drakModeVar(true)}>dark mode test</button>
      <button onClick={() => drakModeVar(false)}>light mode test</button>
    </Container>
  );
};

export default Login;
