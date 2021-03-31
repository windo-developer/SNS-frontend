import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import routes from "../routes";

import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import BottomBox from "../components/auth/BottomBox";
import { BoldLinkText } from "../components/shared/SharedStyles";
import TermsLinkText from "../components/auth/TermsLinkText";
import PageLinkSpan from "../components/shared/PageLinkSpan";

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
  font-weight: 500;
  color: rgb(142, 142, 142);
  line-height: 15px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username,
    },
  });
  const onCompleted = (data) => {
    const { username } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    history.push(routes.home, {
      message: "Account created. Please log in.",
      username,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { firstName, lastName, email, username, password } = getValues();
    createAccount({
      variables: {
        firstName,
        lastName,
        email,
        username,
        password,
      },
    });
  };
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
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "First Name is required.",
            })}
            name="firstName"
            type="text"
            placeholder="First Name"
            hasError={Boolean(errors?.firstName?.message)}
          />
          <FormError message={errors?.firstName?.message} />
          <Input
            ref={register({})}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <Input
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email.",
              },
            })}
            name="email"
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}
          />
          <FormError message={errors?.email?.message} />
          <Input
            ref={register({
              required: "Username is required.",
              minLength: {
                value: 5,
                message: "Username should be longer than 5",
              },
            })}
            name="username"
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            ref={register({
              required: "Password is required.",
            })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!formState.isValid || loading}
          />
        </form>
        <SpanText>
          By signing up, you agree to our <TermsLinkText text="Terms" />,{" "}
          <TermsLinkText text="Data Policy" />, and{" "}
          <TermsLinkText text="Cookies Policy" />
        </SpanText>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Login" link={routes.home} />
      <PageLinkSpan />
    </AuthLayout>
  );
};

export default SignUp;
