import styled from "styled-components";
import { mainStyle, moStyle } from "../styles/globalStyle";

const Section = styled.section`
  padding: ${mainStyle.padding};

  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
    /* width: ${moStyle.moWidth}; */
    /* background: ${moStyle.moBackground}; */
  }
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};
