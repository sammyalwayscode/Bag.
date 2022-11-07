import React from "react";
import styled from "styled-components";

const DetailPage = () => {
  return (
    <Container>
      <Wrapper>
        <ImageDiv>
          <img src="/image/buc.jpg" alt="" />
        </ImageDiv>
        <TextDiv>
          <BagName>Top Handle Leather</BagName>
          <Price>$250.00</Price>
          <Description1>
            Mobile app development is the act or process by which a mobile app
            is developed for mobile devices, such as personal digital
            assistants, enterprise digital assistants or mobile phones. These
            applications can be pre-installed on phones during manufacturing
            platforms
          </Description1>
          <Description2>
            As part of the development process, mobile user interface (UI)
            design is also essential in the creation of mobile apps. Mobile UI
            considers constraints, contexts, screen, input, and mobility as
            outlines for design.
          </Description2>
          <AddCart>
            <button>Add to Cart</button>
          </AddCart>
        </TextDiv>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  min-height: 88vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
  }
`;
const ImageDiv = styled.div`
  width: 500px;
  height: 80vh;
  background-color: #fbf9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  @media (max-width: 500px) {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TextDiv = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
    margin: 10px 0;
  }
`;
const BagName = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: darkorange;
`;
const Description1 = styled.p`
  font-size: 15px;
`;
const Description2 = styled.p`
  font-size: 15px;
`;
const AddCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 90%;
    height: 35px;
    background-color: darkorange;
    border: none;
    outline: none;
    font-family: montserrat;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }
`;
