import styled from "styled-components";

const StyledAvatar = styled.div`
  width: ${(props) => (props.lg ? "30px" : "25px")};
  height: ${(props) => (props.lg ? "30px" : "25px")};
  border-radius: 50%;
  background-color: black;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  max-width: 100%;
  align-items: center;
`;

const Avatar = ({ url = "", lg = false }) => {
  return (
    <StyledAvatar lg={lg}>
      {url !== "" ? <AvatarImage src={url} /> : null}
    </StyledAvatar>
  );
};

export default Avatar;
