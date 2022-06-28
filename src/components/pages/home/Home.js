import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { movieNum } from "../../../constants/constant";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";
import "swiper/css";
import { Container } from "../../Container";
import { Movies } from "./Movies";

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [latest, setLatest] = useState();
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState(true);

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
            <>
              <MainBanner playData={playing[movieNum]} />
              <Container>
                <Movies movieData={playing} movieTitle={"현재 상영 영화"} />
                <Movies movieData={rated} movieTitle={"인기 상영 영화"} />
                <Movies movieData={upComming} movieTitle={"상영 예정 영화"} />
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
};
