import React from "react";
import styled from "styled-components";

const Brand = () => {
  return (
    <Container>
      <Wrapper>
        <span>
          {" "}
          <img src="/image/stradivarius.png" alt="" />{" "}
        </span>
        <span>
          {" "}
          <img src="/image/zara.png" alt="" />{" "}
        </span>
        <span>
          {" "}
          <img src="/image/charles.png" alt="" />{" "}
        </span>
        <span>
          {" "}
          <img src="/image/dior.png" alt="" />{" "}
        </span>
        <span>
          {" "}
          <img src="/image/pedro.svg" alt="" />{" "}
        </span>
      </Wrapper>
    </Container>
  );
};

export default Brand;

const Container = styled.div`
  height: 150px;
  width: 100%;
  background-color: #fbf9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100px;
  }

  @media (max-width: 500px) {
    width: 90%;
    img {
      width: 80px;
    }
  }
`;
