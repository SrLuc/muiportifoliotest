import styled from "styled-components";
import { device } from "../../layout/MediaDevices";

const StyledCard = styled.div`
  @media ${device.desktop} {
    width: 45%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.tablet} {
    order: -1;
    width: 100%;
    text-align: center;
    background-color: magenta;
  }

  @media ${device.mobile} {
    order: -1;
    width: 100%;
    text-align: center;
    background-color: magenta;
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <section>
        <p>
          naur img <img src="" alt="" />
        </p>
        <p>
          naur title <img src="" alt="" />
        </p>
      </section>
      <img src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
        corrupti. Ad rerum quisquam eos voluptatibus sapiente dicta enim at
        dignissimos recusandae nesciunt, aperiam in animi. Nulla neque
        accusantium vel rem!
      </p>
    </StyledCard>
  );
};

export default Card;
