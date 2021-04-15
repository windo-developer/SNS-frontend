import styled from "styled-components";

const SubmitButton = styled.input`
  background-color: ${(props) => props.theme.accent};
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 8px 0px;
  text-align: center;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? "0.2" : "1")};
`;

// In order to use the styled.attrs must be disabled this
/* const SubmitButton = (props) => {
   return <StyledButton {...props} />;
 }; */

export default SubmitButton;
