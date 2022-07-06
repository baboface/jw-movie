import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { MovieDetail } from "./MovieDetail";

const Iframe = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 150px;

  @media screen and (max-width: 500px) {
    height: 60vh;
    margin-top: 100px;
  }
`;

export const Detail = () => {
  // console.log(movieApi.movieDetail(453395));
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  // const [videoDatas, setVideoDatas] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // =>url주소에 있는 변수값을 가져옴
  // const params = useParams();

  // console.log(params.id);

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setMovieData(data);

      const {
        data: { results },
      } = await movieApi.video(id);
      setVideoData(results.length === 0 ? null : results[0].key);
      // console.log(results.length === 0 ? null : results[0].key);

      // const {
      //   data: { results: another },
      // } = await movieApi.video(id);
      // setVideoDatas(another.length === 0 ? null : another[1].key);

      setLoading(false);

      // console.log(results);
      // const { data: idData } = await movieApi.movieDetail(453395);
      // const { data } = await movieApi.movieDetail(453395);
      // console.log(idData.id);
      // console.log(data);
    };
    detailData();
  }, []);

  // console.log(movieData);
  console.log(videoData);

  return (
    <div>
      <PageTitle title={"Detail"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetail movieData={movieData} />}
          {videoData ? (
            <Iframe
              src={`https://www.youtube.com/embed/${videoData}`}
              allowfullscreen
            ></Iframe>
          ) : null}
        </Container>
      )}
    </div>
  );
};
