import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { BasicWhiteBox } from "../shared/SharedStyles";

const StyledBottomBox = styled(BasicWhiteBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <StyledBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </StyledBottomBox>
  );
};

BottomBox.propTypes = {
  cat: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default BottomBox;
