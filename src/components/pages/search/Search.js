import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";
import { Link } from "react-router-dom";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  margin-top: 150px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Con = styled.div`
  /* width: 200px; */
`;

const Bg = styled.div`
  height: 300px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();
    // =>getValues는 인풋태그에 작성된 내용을 가져옴
    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setError("result", {
          message: "영화가 없어요!",
        });
        // =>setError("에러 이름",{message:"값"})
        // =>useForm에 있는 속성으로 에러를 설정할수 있음
      } else {
        setSearchTerm(results);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);
  // =>폼상태에 에러처리 담당
  console.log(searchTerm);

  return (
    <div>
      <PageTitle title={"Search"} />

      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수 입니다 ",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화검색..."
            />

            {errors?.search?.message}
            {errors?.result?.message}
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchTerm && (
              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${
                            term.backdrop_path
                              ? `${imgUrl}${term.backdrop_path} `
                              : "https://i.ytimg.com/vi/C8WWqMKRYfk/maxresdefault.jpg"
                          }) no-repeat center / cover`,
                        }}
                      />
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
