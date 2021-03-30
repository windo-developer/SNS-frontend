import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background-color: #fafafa;
  border: 0.5px solid
    ${(props) => (props.hasError ? "red" : props.theme.borderColor)};
  border-radius: 5px;
  padding: 7px;
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;

// do you want delete Input function?
// Do by that way!
