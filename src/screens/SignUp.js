import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet-async";

import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { BoldLinkText } from "../components/shared/SharedStyles";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-family: "Nanum Pen Script", cursive;
  font-size: 50px;
  font-weight: 500;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(BoldLinkText)`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

const FacebookLoginButton = styled.button`
  color: white;
  background-color: ${(props) => props.theme.accent};
  margin-top: 12px;
  border: none;
  border-radius: 5px;
  padding: 8px 0px;
  width: 100%;
  font-size: 14px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const SignUpSeparator = styled.div`
  margin-top: 20px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 600;
  }
`;

const SpanText = styled.span`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: rgb(142, 142, 142);
  line-height: 15px;
`;

const SignUp = () => {
  return (
    <AuthLayout>
      <Helmet>
        <title>SignUpㆍInstagram</title>
      </Helmet>
      <FormBox>
        <HeaderContainer>
          <Title>Instagram</Title>
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
          <FacebookLoginButton>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLoginButton>
          <SignUpSeparator>
            <div></div>
            <span>Or</span>
            <div></div>
          </SignUpSeparator>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <SubmitButton type="submit" value="Sign Up" />
        </form>
        <SpanText>
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
        </SpanText>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Login" link={routes.home} />
    </AuthLayout>
  );
};

export default SignUp;
