import styled from "styled-components";
import Logo from "../assets/logo.png";
import { Sun } from "../svg";
import Moon from "../svg/Moon";

const Panel: React.FC<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ dark, setDark }) => {
  return (
    <Main>
      <LogoELement src={Logo} alt="" />
      <ThemeBox>
        {dark ? (
          <>
            <h3>SUN</h3>
            <Sun onClick={() => setDark(false)} />
          </>
        ) : (
          <>
            <h3>MOON</h3>
            <Moon onClick={() => setDark(true)} />
          </>
        )}
      </ThemeBox>
    </Main>
  );
};

export default Panel;

const Main = styled.div`
  width: 100%;
  height: 72px;
  background-color: var(--darkBlue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const LogoELement = styled.img`
  width: 70px;
  height: auto;
`;

const ThemeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;
