import styled from "styled-components";
import { BoldLinkText } from "../shared/SharedStyles";

const StyledTextLink = styled(BoldLinkText)`
  font-weight: bold;
`;

const TextLink = ({ text }) => {
  return (
    <StyledTextLink as="a" href="/">
      {text}
    </StyledTextLink>
  );
};

export default TextLink;
