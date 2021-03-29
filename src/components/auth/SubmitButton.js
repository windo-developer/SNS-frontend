import styled from "styled-components";

const StyledButton = styled.input`
  margin-top: 12px;
  border: none;
  border-radius: 5px;
  padding: 8px 0px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

const SubmitButton = (props) => {
  return <StyledButton {...props} />;
};

export default SubmitButton;
