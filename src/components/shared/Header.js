import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";

import { isLoggedInVar } from "../../apollo";
import routes from "../../routes";

import useUser from "../hooks/useUser";
import Avatar from "./Avatar";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.div``;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.span`
  margin-left: 15px;
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`;

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useUser();
  return (
    <StyledHeader>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Column>
        <Column>
          {isLoggedIn ? (
            <IconContainer>
              <Icon>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </Icon>
              <Icon>
                <Avatar url={data?.me?.avatar} />
              </Icon>
            </IconContainer>
          ) : (
            <Link href={routes.home}>
              <Button>Log in</Button>
            </Link>
          )}
        </Column>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
