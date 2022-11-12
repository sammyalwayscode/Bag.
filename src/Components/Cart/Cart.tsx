import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Hear's Your Cart</Title>
        <CartCard>
          <CardHold>
            <ImageBox>
              <img src="/image/pop2.png" alt="" />
            </ImageBox>
            <TopButtom>
              <ProductTitle>Top Handle Leather</ProductTitle>
              <Buttom>
                <Price>$250.00</Price>
                <AddRemDiv>
                  <button>
                    {" "}
                    <FiChevronLeft />{" "}
                  </button>
                  <label>0</label>
                  <button>
                    {" "}
                    <FiChevronRight />{" "}
                  </button>
                </AddRemDiv>
                <DeleteDiv>
                  <RiDeleteBin2Fill size="18px" color="red" />
                </DeleteDiv>
              </Buttom>
            </TopButtom>
          </CardHold>
        </CartCard>
        <PriceCheckOut>
          <h6>
            Total Item Purchased: <strong>20</strong>
          </h6>
          <h3>Total Price: $400.92</h3>
          <button>Proceed To CheckOut</button>
        </PriceCheckOut>
      </Wrapper>
    </Container>
  );
};

export default Cart;

const PriceCheckOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: -10px;
  }
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

const Container = styled.div`
  width: 100%;
  font-family: montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const CartCard = styled.div`
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  margin: 10px 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardHold = styled.div`
  display: flex;
  margin: 15px 0;
`;
const ImageBox = styled.div`
  height: 60px;
  width: 60px;
  background-color: #fbf9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  img {
    width: 40px;
    object-fit: contain;
  }
`;
const TopButtom = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
const ProductTitle = styled.div`
  font-size: 13px;
  font-weight: 800;
  margin-right: 20px;
`;
const Buttom = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-size: 13px;
  color: darkorange;
  font-weight: bold;
  margin-right: 20px;
`;
const AddRemDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  label {
    margin: 0 12px;
    font-size: 13px;
    font-weight: 600;
  }
  button {
    height: 30px;
    width: 30px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const DeleteDiv = styled.div`
  margin: 0 13px;
  cursor: pointer;

  @media (max-width: 500px) {
    margin: 0;
    padding-right: 5px;
  }
`;
