import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 1px solid blue;
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
