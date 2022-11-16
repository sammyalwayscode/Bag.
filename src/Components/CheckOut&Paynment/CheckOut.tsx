import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { preOrderDetails } from "../Global/ReduxState";
import Swal from "sweetalert2";
import LoadState from "../LoadState/LoadState";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCart = useSelector((state: any) => state.cart);
  const [cartItem] = useState<any[]>(getCart);
  const [loading, setLoading] = useState(false);

  const handleForm = yup.object().shape({
    name: yup.string().required("Your name is Required!"),
    email: yup.string().required("Your Email is Required!"),
    address: yup.string().required("Your Address is Required!"),
  });

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(handleForm) });

  const onSubmmit = handleSubmit(async (value) => {
    console.log("Success");
    const { name, email, address } = value;
    const URL = "https://sam-bag.herokuapp.com/api/order/preOrder";
    setLoading(true);
    await axios
      .post(URL, { email, name, address, orders: cartItem })
      .then((res) => {
        console.log(res.data.data);
        dispatch(preOrderDetails(res.data.data));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Shippment Sucessfull",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/payment");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
        setLoading(false);
      });
  });
  return (
    <Container>
      {loading ? <LoadState /> : null}
      <Wrapper>
        <InputPart>
          <IconTop
            onClick={() => {
              navigate(-1);
            }}
          >
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>CheckOut</SignTitle>
            <SignSubTitle>Please Fill in the details below</SignSubTitle>
            <InputForm onSubmit={onSubmmit}>
              <InputDiv placeholder="Your Name " {...register("name")} />
              <InputDiv placeholder="Email Address " {...register("email")} />
              <InputDiv placeholder="Home Address" {...register("address")} />
              <InputButton type="submit">Proceed To Payment</InputButton>
            </InputForm>
          </SignInputHold>
        </InputPart>
      </Wrapper>
    </Container>
  );
};

export default CheckOut;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
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
