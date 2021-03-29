import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import routes from "../routes";

import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-family: "Nanum Pen Script", cursive;
  font-size: 50px;
  font-weight: 500;
`;

const FacebookLogin = styled.div`
  color: #40588a;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
  return (
    <AuthLayout>
      <FormBox>
        <Title>Instagram</Title>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <SubmitButton type="submit" value="Log in" />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta={"Don't have an account?"}
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
};

export default Login;
