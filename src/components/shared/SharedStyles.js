import styled from "styled-components";

export const BasicWhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const BoldLinkText = styled.span`
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

export const BoldText = styled.span`
  font-weight: 600;
`;
