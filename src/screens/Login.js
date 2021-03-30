import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { gql, useMutation } from "@apollo/client";

import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import FormError from "../components/auth/FormError";

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

const ResetPasswordButton = styled.button`
  color: #40588a;
  margin-top: 25px;
  font-size: 12px;
  font-weight: 600;
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const {
    register,
    errors,
    handleSubmit,
    formState,
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const {
      login: { ok, token, error },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };
  return (
    <AuthLayout>
      <Helmet>
        <title>LoginㆍInstagram</title>
      </Helmet>
      <FormBox>
        <Title>Instagram</Title>
        <form onSubmit={handleSubmit(onSubmitValid)}>
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
              // pattern: {
              //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              //   message: "password required include character, number min 8",
              // },
            })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <SubmitButton
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={errors?.result?.message} />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
        <ResetPasswordButton as="a" href="/">
          Forgot password?
        </ResetPasswordButton>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
};

export default Login;
