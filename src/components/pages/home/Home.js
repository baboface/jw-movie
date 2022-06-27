import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { mainStyle } from "../../../styles/globalStyle";
import { Loading } from "../../Loading";
// console.log(movieApi.nowPlaying());

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [latest, setLatest] = useState();
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState(true);

  const MainBanner = styled.section`
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

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playingData },
        } = await movieApi.nowPlaying();
        // console.log(playingData);
        // =비구조화 할당 이용시 변수명 변경할땐
        // 변수명:변경할명
        setPlaying(playingData);

        const {
          data: { results: ratedData },
        } = await movieApi.topRated();
        setRated(ratedData);

        const {
          data: { results: latestData },
        } = await movieApi.latest();
        setLatest(latestData);

        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpComming(upCommingData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영 영화:", playing);
  // console.log("인기 영화:", rated);
  // console.log("개봉예정 영화:", upComming);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <MainBanner
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${playing[0].backdrop_path}) no-repeat center / cover`,
              }}
            >
              <Title>{playing[0].title}</Title>
              <Desc>{playing[0].overview.slice(0, 100) + "..."}</Desc>
            </MainBanner>
          )}
        </>
      )}
    </div>
  );
};
