import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieImg = styled.div`
  height: 250px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

export const Movies = ({ movieData, movieTitle }) => {
  return (
    <Container>
      <Title>{movieTitle}</Title>
      <Swiper slidesPerView={5.3} spaceBetween={20}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={"#"}>
              <MovieImg
                style={{
                  background: `url(${imgUrl}/${play.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
