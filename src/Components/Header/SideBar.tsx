import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <span>Home</span>
        <hr />
        <span>Catogries</span>
        <hr />
        <span>Cart</span>
        <hr />
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 100%;
  height: 89vh;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  position: fixed;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
`;
