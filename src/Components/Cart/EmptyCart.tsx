import React from "react";
import styled from "styled-components";

const EmptyCart = () => {
  return (
    <Container>
      <Wrapper>
        <small>Don't Wait😏</small>
        <Title>Your BAG is Curently Empty</Title>
        <Box>
          {" "}
          <span>Go to the Catalogue to make Purchase</span>{" "}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default EmptyCart;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 88vh;
  align-items: center;
  justify-content: center;
  small {
    font-size: 10px;
    font-weight: bold;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
`;
const Box = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffa60059;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: lighter;
  letter-spacing: 10px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 5px;
  }
`;
