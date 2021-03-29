import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 7px;
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

// do you want delete Input function?
// Do by that way!
