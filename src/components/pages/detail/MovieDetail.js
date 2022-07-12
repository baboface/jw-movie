import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 500px) {
    display: block;
    /* flex-direction: column; */
  }
`;

const Con = styled.div`
  width: 48%;
  &:nth-child(1) {
    height: 80vh;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    margin-top: 30px;
    font-size: 45px;
  }
`;

const OriginalTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Release = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    bottom: 10%;
    font-size: 20px;
  }
`;

const Genres = styled.ul`
  font-size: 20px;
  font-weight: 600;
  li {
    list-style: disc;
    margin-bottom: 5px;
  }
  margin: 20px 0 0 25px;
`;

const Runtime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const Vote = styled.h3`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 2.2rem;
  margin-top: 30px;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;
export const MovieDetail = ({ movieData }) => {
  return (
    <Wrap>
      <Con
        style={{
          background: `url(${
            movieData.backdrop_path
              ? `${imgUrl}${movieData.backdrop_path}`
              : "https://i.ytimg.com/vi/C8WWqMKRYfk/maxresdefault.jpg"
          }) no-repeat center / cover`,
        }}
      />
      <Con>
        <Title>{movieData.title}</Title>
        <OriginalTitle>{movieData.original_title}</OriginalTitle>
        <Release>개봉일: {movieData.release_date}</Release>
        <Runtime>{movieData.runtime}분</Runtime>
        <Vote>평점: {movieData.vote_average}</Vote>
        <Genres>
          {movieData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </Genres>
        <Desc>{movieData.overview.slice(0, 100) + "..."}</Desc>
      </Con>
    </Wrap>
  );
};
