import styled from "styled-components";
import { device } from "../../layout/MediaDevices";
import BasicGrid from "../UI/Grid";

const StyledMain = styled.div`
  font-family: "Krona One", serif;

  @media ${device.desktop} {
    width: 45%;
    height: 100vh;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 150px;

    h1 {
      letter-spacing: 0.3em;
      font-size: 50px;
      margin-top: 50px;
    }
  }
  @media ${device.tablet} {
    background-color: aquamarine;
    width: 100%;
    height: 100%;
    text-align: center;

    h1 {
      letter-spacing: 0.3em;
      padding: 0.5em;
    }
  }
  @media ${device.mobile} {
    background-color: aquamarine;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>PORTFOLIO</h1>
      <BasicGrid />
    </StyledMain>
  );
};

export default Main;
