import styled from "styled-components";
import { device } from "../../layout/MediaDevices";

const StyledMain = styled.div`
  @media ${device.desktop} {
    width: 45%;
    height: 100vh;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    background-color: aquamarine;
    width: 100%;
    height: 100%;
    text-align: center;
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
      <h1>Main</h1>
    </StyledMain>
  );
};

export default Main;
