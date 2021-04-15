import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BoldText } from "../shared/SharedStyles";
import { gql, useMutation } from "@apollo/client";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
      error
    }
  }
`;

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Comment = ({ id, photoId, isMine, author, payload }) => {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok, error },
      },
    } = result;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <BoldText>{author}</BoldText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/g.test(word) ? (
            <>
              <Link key={index} to={`/hashtags/${word}`}>
                {word}
              </Link>{" "}
            </>
          ) : (
            <>
              <span key={index}>{word}</span>{" "}
            </>
          )
        )}
      </CommentCaption>
      {isMine ? <button onClick={onDeleteClick}>❌</button> : null}
    </CommentContainer>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  photoId: PropTypes.number,
  isMine: PropTypes.bool,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
