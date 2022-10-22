import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Join Our Newsletter</Title>
        <SubTitle>
          Be the first who will kmow our latest product, popular stock, and big
          discount
        </SubTitle>
        <EmailBut>
          <input placeholder="Enter your email here" />
          <button>Join Now</button>
        </EmailBut>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  height: 230px;
  width: 80%;
  background-color: #f9f7f9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.div`
  width: 300px;
  font-size: 12px;
  text-align: center;
  color: #6d6d6e;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    width: 90%;
  }
`;
const EmailBut = styled.div`
  width: 400px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 70px;

  input {
    height: 90%;
    border: none;
    outline: none;
    font-family: montserrat;
    margin-left: 10px;
    flex: 1;
    border-radius: 70px;
  }
  button {
    height: 80%;
    width: 90px;
    font-family: montserrat;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 70px;
    margin: 0 5px;

    @media (max-width: 400px) {
      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    height: 40px;
    width: 90%;
  }
`;
