import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const StyledPageLinkSpan = styled.a`
  padding-right: 15px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

const PageLinkSpan = () => {
  return (
    <Container>
      <StyledPageLinkSpan href="/">About</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Blog</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Jobs</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Help</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">API</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Privacy</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Terms</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Top&nbsp;Accounts</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Hashtags</StyledPageLinkSpan>
      <StyledPageLinkSpan href="/">Locations</StyledPageLinkSpan>
    </Container>
  );
};

export default PageLinkSpan;
