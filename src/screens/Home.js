import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments {
        id
        user {
          username
          avatar
        }
        payload
        isMine
        createdAt
      }
      commentNumber
      isMine
      isLiked
      createdAt
    }
  }
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>HomeㆍInstagram</title>
      </Helmet>
      {data?.seeFeed?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
};

export default Home;
