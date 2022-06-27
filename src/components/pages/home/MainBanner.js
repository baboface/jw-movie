import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainStyle } from "../../../styles/globalStyle";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgray;
  padding: ${mainStyle.padding};
  padding-top: 250px;
`;

const Title = styled.div`
  max-width: 650px;
  width: 100%;
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
`;

const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
  font-weight: 300;
`;

export const MainBanner = ({ palyData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}/${palyData.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Title>{palyData.title}</Title>
      <Desc>{palyData.overview.slice(0, 100) + "..."}</Desc>
    </Banner>
  );
};
