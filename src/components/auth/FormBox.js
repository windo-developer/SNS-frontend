import styled from "styled-components";
import { BasicWhiteBox } from "../shared/shared";

const Container = styled(BasicWhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 35px 40px 25px 40px;
  form {
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 25px;
  }
`;

const FormBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormBox;
