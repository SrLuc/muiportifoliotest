import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid blue;
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>Main</h1>
    </StyledMain>
  );
};

export default Main;
