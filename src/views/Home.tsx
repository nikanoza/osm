import styled, { css } from "styled-components";

const Home: React.FC<{ dark: boolean }> = ({ dark }) => {
  return (
    <Main dark={dark}>
      <Title dark={dark}>OSM დაბალი ლიგა</Title>
    </Main>
  );
};

export default Home;

type ThemeProps = {
  dark: boolean;
};

const Main = styled.div(
  ({ dark }: ThemeProps) => css`
    width: 100%;
    padding: 32px 24px 105px 24px;
    background-color: ${dark ? "var(--semiDark)" : "var(--light)"};
  `
);

const Title = styled.h2(
  ({ dark }: ThemeProps) => css`
    text-align: center;
    color: ${dark ? "white" : "var(--dark)"};
  `
);
