import styled from "styled-components";
import { device } from "../../layout/MediaDevices"; // Importe seus breakpoints aqui

const Nav = styled.nav`
  @media ${device.desktop} {
    order: -1;
    background-color: red;
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
      gap: 80px;

      li {
        font-size: 25px;
        letter-spacing: 2px;
        list-style: none;
        color: white;
        cursor: pointer;
      }
    }
  }

  @media ${device.tablet} {
    background-color: blue;
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