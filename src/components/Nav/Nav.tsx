import styled from "styled-components";
import { device } from "../../layout/MediaDevices"; // Importe seus breakpoints aqui

const Nav = styled.nav`
  @media ${device.desktop} {
    order: -1;
    width: 5%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      transform: rotate(-90deg);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      li {
        font-size: 14px;
        letter-spacing: 2px;
        list-style: none;
        color: #2c2926;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: #f27141;
        }
      }
    }
  }

  @media ${device.tablet} {
    width: 100%;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      color: #2c2926;
      font-weight: bold;
      padding: 15px;
    }
  }

  @media ${device.mobile} {
    width: 100%;
    display: flex;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      li {
        font-size: 8px;
        padding-bottom: 15px;
        list-style: none;
        color: #2c2926;
        cursor: pointer;
      }
    }
  }
`;

const NavigationBar = () => {
  return (
    <Nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SOUNDCLOUD</li>
        <li>DEVELOPMENT</li>
      </ul>
    </Nav>
  );
};

export default NavigationBar;
