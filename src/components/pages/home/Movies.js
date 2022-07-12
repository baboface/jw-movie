import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css/navigation";

const Container = styled.div`
  margin-top: 120px;
`;

const MovieBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover h4 {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

const HiddenBox = styled.h4`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  line-height: 30px;
  text-align: center;
  padding: 40px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
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
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{movieTitle}</Title>

      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieBox>
                <MovieImg
                  style={{
                    background: `url(${
                      play.backdrop_path
                        ? `${imgUrl}/${play.backdrop_path}`
                        : "https://i.ytimg.com/vi/C8WWqMKRYfk/maxresdefault.jpg"
                    }) no-repeat center / cover`,
                  }}
                />
                <HiddenBox>{play.overview.slice(0, 100) + "..."}</HiddenBox>
              </MovieBox>
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
