import { gql, useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { BoldText } from "../shared/SharedStyles";
import Comment from "./Comment";
import useUser from "../hooks/useUser";

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      error
      id
    }
  }
`;

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-size: 10px;
  font-weight: 600;
  margin: 10px 0px;
`;

const Comments = ({ author, caption, commentNumber, comments, photoId }) => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { data: userData } = useUser();
  const createCommentUpdate = (cache, result) => {
    const {
      data: {
        createComment: { ok, id },
      },
    } = result;
    if (ok && userData?.me) {
      const { payload } = getValues();
      setValue("payload", "");
      const newComment = {
        __typename: "Comment",
        createdAt: Date.now() + "",
        id,
        isMine: true,
        payload,
        user: {
          ...userData.me,
        },
      };
      const newCacheComment = cache.writeFragment({
        data: newComment,
        fragment: gql`
          fragment Comment on Comment {
            id
            createdAt
            isMine
            payload
            user {
              username
              avatar
            }
          }
        `,
      });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          comments(prev) {
            return [...prev, newCacheComment];
          },
          commentNumber(prev) {
            return prev + 1;
          },
        },
      });
    }
  };
  const [
    createCommentMutation,
    { loading },
  ] = useMutation(CREATE_COMMENT_MUTATION, { update: createCommentUpdate });

  const onValid = (data) => {
    const { payload } = data;
    if (loading) {
      return;
    }
    createCommentMutation({
      variables: {
        photoId,
        payload,
      },
    });
  };
  return (
    <CommentsContainer>
      <Comment author={author} payload={caption} />
      <CommentCount>
        {commentNumber === 1 ? "1 comment" : `${commentNumber} comment`}
      </CommentCount>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          photoId={photoId}
          author={comment.user.username}
          payload={comment.payload}
          isMine={comment.isMine}
        />
      ))}
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            name="payload"
            ref={register({
              required: true,
            })}
            type="text"
            placeholder="Write a comment"
          />
        </form>
      </div>
    </CommentsContainer>
  );
};

Comments.protoTypes = {
  photoId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  commentNumber: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
      }),
      payload: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default Comments;
