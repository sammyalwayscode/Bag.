import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineDelete, AiTwotoneDelete } from "react-icons/ai";
import styled from "styled-components";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Global/ReduxState";
import { Link } from "react-router-dom";

const Cart = () => {
  const getCart = useSelector((state: any) => state.cart);
  const getQty = useSelector((state: any) => state.QTY);
  const getTotalPrice = useSelector((state: any) => state.TOTALPRICE);
  const dispatch = useDispatch();
  return (
    <>
      {getQty === 0 ? (
        <EmptyCart />
      ) : (
        <Container>
          <Wrapper>
            <Title>Hear's Your Cart</Title>
            {getCart?.map((props: any) => (
              <CartCard key={props._id}>
                <CardHold>
                  <ImageBox>
                    <img src={props.avatar} alt="" />
                  </ImageBox>
                  <TopButtom>
                    <ProductTitle> {props.productName} </ProductTitle>
                    <Buttom>
                      <Price>${props.price}</Price>
                      <AddRemDiv>
                        <button
                          onClick={() => {
                            dispatch(removeFromCart(props));
                          }}
                        >
                          {" "}
                          <FiChevronLeft />{" "}
                        </button>
                        <label> {props.QTY} </label>
                        <button
                          onClick={() => {
                            dispatch(addToCart(props));
                          }}
                        >
                          {" "}
                          <FiChevronRight />{" "}
                        </button>
                      </AddRemDiv>

                      <DeleteDiv
                        onClick={() => {
                          dispatch(removeFromCart(props));
                        }}
                      >
                        <AiOutlineDelete size="18px" color="red" />
                      </DeleteDiv>
                    </Buttom>
                  </TopButtom>
                </CardHold>
              </CartCard>
            ))}
            <PriceCheckOut>
              <h6>
                Total Item Purchased: <strong> {getQty} </strong>
              </h6>
              <h3>Total Price: ${getTotalPrice.toFixed(2)}</h3>
              <Link to="/checkout">
                <button>Proceed To CheckOut</button>
              </Link>
            </PriceCheckOut>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Cart;

const PriceCheckOut = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h3 {
    margin-top: -10px;
  }
  button {
    width: 200px;
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
  @media (max-width: 500px) {
    width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
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
