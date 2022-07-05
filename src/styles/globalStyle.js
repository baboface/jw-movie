import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgColor: "#1d1d1d",
  color: "white",
  mainColor: "red",
  padding: "0 80px",
  moPadding: "0 20px",
};

export const moStyle = {
  moWidth: "100%",
  height: "60vh",
  moPadding: "0 10px",
  moColor: "white",
  moBackground: " cover / center",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainStyle.bgColor};
        color: ${mainStyle.color};
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color: ${mainStyle.color};
    }
`;
