import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactiveVar } from "@apollo/client";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";
import PageLinkFooter from "../shared/PageLinkFooter";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Footer = styled.footer``;

const DarkModeButton = styled.span`
  cursor: pointer;
`;

const AuthLayout = ({ children }) => {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer>
        {/* <DarkModeButton onClick={darkMode ? disableDarkMode : enableDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </DarkModeButton> */}
        <PageLinkFooter />
      </Footer>
    </Container>
  );
};

export default AuthLayout;
