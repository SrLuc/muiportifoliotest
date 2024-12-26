import styled from "styled-components";
import { device } from "../../layout/MediaDevices";
import naur from "../../assets/NAUR/naur.png";
import naurtitle from "../../assets/NAUR/naurtitle.png";
import { fontSizes, paddings } from "../../layout/FontsDevices";

const StyledCard = styled.div`
  @media ${device.desktop} {
    background-color: #f2f1e9;
    width: 45%;
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      width: 75%;
    }

    article {
      padding: 1rem;
      img {
        width: 25%;
      }

      p {
        font-size: ${fontSizes.desktop};
        padding: ${paddings.mobile};
        background-color: red;
        font-size: 15px;
        letter-spacing: 2px;
      }
    }
  }

  @media ${device.tablet} {
    background-color: #f2f1e9;
    order: -1;
    width: 100%;
    text-align: center;
    margin: 10px;
    border-radius: 20px;

    img {
      width: 100%;
    }

    article {
      padding: 1rem;
      img {
        width: 40%;
      }
    }
  }

  @media ${device.mobile} {
    background-color: #f2f1e9;
    order: -1;
    width: 100%;
    text-align: center;
    margin: 10px;
    border-radius: 20px;

    img {
      width: 100%;
    }

    article {
      padding: 1rem;
      img {
        width: 40%;
      }
    }
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <div>
        <img src={naur} alt="" />
      </div>
      <article>
        <img src={naurtitle} alt="" />
        <p>ruanlucenaramos@gmail.com</p>
        <p>- - - - - - - - - - - - - - - - - - - - -</p>
      </article>
    </StyledCard>
  );
};

export default Card;
