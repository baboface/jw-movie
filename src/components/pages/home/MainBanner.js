import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";

const Banner = styled.section`
  height: 80vh;
  padding: ${mainStyle.padding};
  padding-top: 250px;
  position: relative;
  @media screen and (max-width: 500px) {
    height: 100vh;
    position: relative;
    padding: 0;
  }
`;

const Title = styled.div`
  max-width: 650px;
  /* width: 100%; */
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
  position: relative;
  z-index: 8;
  @media screen and (max-width: 500px) {
    /* width: 100%; */
    font-size: 45px;
    line-height: 4rem;
    position: absolute;
    bottom: 20%;
    left: 20px;
  }
`;

const Vote = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
  font-weight: 300;
  position: relative;
  z-index: 8;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 60vh;
  background: linear-gradient(
    180deg,
    rgba(02, 02, 02, 0) 0%,
    rgba(0, 0, 0, 0.7) 80%
  );
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PlayBox = styled.div`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  background-color: ${mainStyle.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 8;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const PlayBar = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

const NowPlay = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-left: 30px;
`;

export const MainBanner = ({ playData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}/${playData.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Link to={`/detail/${playData.id}`}>
        <Title>{playData.title}</Title>
        <Desc>{playData.overview.slice(0, 100) + "..."}</Desc>
        <Vote>평점: {playData.vote_average}</Vote>
        <PlayBox>
          <PlayBar>
            <FontAwesomeIcon icon={faPlayCircle} />
          </PlayBar>
          <NowPlay>자세히보기</NowPlay>
        </PlayBox>
        <BlackBg />
      </Link>
    </Banner>
  );
};

// 반응형??
// =>각 디바이스 기기에 따라 디자인이 변경되도록 구현하는것?
// @media screen and (max-width:) and (min-width:){
//   .box{
//     width: 300px;
//   }
// }
