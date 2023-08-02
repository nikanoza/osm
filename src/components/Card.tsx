import styled, { css } from "styled-components";

const Card: React.FC<{ dark: boolean; children: React.ReactNode }> = ({
  dark,
  children,
}) => {
  return <CardElement dark={dark}>{children}</CardElement>;
};

export default Card;

type ThemeProps = {
  dark: boolean;
};

const CardElement = styled.div(
  ({ dark }: ThemeProps) => css`
    width: 100%;
    padding: 12px;
    background-color: ${dark ? "var(--darkBlue)" : "white"};
    border-radius: 8px;
    box-shadow: ${dark
      ? "0px 10px 10px -10px rgba(72, 84, 159, 0.10)"
      : "0px 10px 10px -10px rgba(72, 84, 159, 0.10)"};
  `
);
