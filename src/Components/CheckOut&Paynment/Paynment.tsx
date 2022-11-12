import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Paynment = () => {
  return (
    <Container>
      <Wrapper>
        <h3>Items Bought</h3>
        <CartCard>
          <CardHold>
            <ImageBox>
              <img src="/image/pop2.png" alt="" />
            </ImageBox>
            <TopButtom>
              <ProductTitle>Top Handle Leather</ProductTitle>
              <Buttom>
                <Price>$250.00</Price>
              </Buttom>
            </TopButtom>
          </CardHold>
        </CartCard>
        <InputPart>
          <SignInputHold>
            <SignTitle>CheckOut</SignTitle>
            <SignSubTitle>Please Fill in the details below</SignSubTitle>
            <InputForm>
              <InputDiv placeholder="Your Name " />
              <InputDiv placeholder="Email Address " />
              <InputDiv placeholder="Home Address" />
            </InputForm>
          </SignInputHold>
        </InputPart>
        <PayMeto>
          <PayTxt>Payment Method</PayTxt>
          <small
            style={{
              color: "red",
            }}
          >
            This is a Test Payment, Just Click On Success
          </small>
          <br />
          <small>Click the box below to complect your Order</small>

          <PayBoxHold>
            <PayTextBox>
              <h6>Paystark</h6>
              <PayBox
                //   onClick={() => {
                //     initializePayment(onSuccess, onClose);
                //   }}
                style={{
                  border: "none",
                }}
              >
                <img
                  src="/image/paystark.png"
                  alt="Paystark Logo"
                  width="160px"
                />
              </PayBox>
            </PayTextBox>
          </PayBoxHold>
        </PayMeto>
      </Wrapper>
    </Container>
  );
};

export default Paynment;

const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: Montserrat;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartCard = styled.div`
  width: 50%;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  margin: 10px 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
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

const PayTxt = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const PayMeto = styled.div`
  margin: 30px 0;
  center {
    margin-bottom: 20px;
  }
`;
const PayTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PayBoxHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const PayBox = styled.div`
  height: 150px;
  width: 250px;
  margin: 0 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #4ad295;
  border-radius: 7px;
`;

const InputPart = styled.div``;
// const IconTop = styled(NavLink)`
const IconTop = styled.div`
  font-size: 30px;
  text-decoration: none;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 13px;
  padding-left: 20px;

  background-color: #ff970535;
  ::placeholder {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    /* color: #377dff; */
    color: #000;
    /* padding-left: 10px; */
  }
`;
const InputButton = styled.button`
  height: 40px;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  /* background-color: #377dff; */
  background-color: #000;
  border-radius: 3px;
  margin-top: 10px;
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #ff9705;
    cursor: pointer;
  }
`;
