import styled from "styled-components";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";

import { BoldText } from "../shared/SharedStyles";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Comment = ({ author, payload }) => {
  const cleanPayload = sanitizeHtml(
    payload.replace(/#[\w]+/g, "<mark>$&</mark>"),
    {
      allowedTags: ["mark"],
    }
  );

  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption
        dangerouslySetInnerHTML={{
          __html: cleanPayload,
        }}
      ></CommentCaption>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
