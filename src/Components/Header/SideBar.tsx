import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<Props> = ({ setToggle }) => {
  const getQty = useSelector((state: any) => state.QTY);
  return (
    <Container>
      <Wrapper>
        <NavLink
          to="/"
          onClick={() => {
            setToggle(false);
          }}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <span>Home</span>
        </NavLink>
        <hr />
        <NavLink
          onClick={() => {
            setToggle(false);
          }}
          to="/catalogue"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <span>Catalogue</span>
        </NavLink>

        <hr />
        <NavLink
          to="/shop"
          onClick={() => {
            setToggle(false);
          }}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <span>Shop</span>
        </NavLink>

        <hr />
        <NavLink
          to="/cart"
          onClick={() => {
            setToggle(false);
          }}
          style={{
            textDecoration: "none",
            color: "#000",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>Cart</span>
          <Num> {getQty} </Num>
        </NavLink>

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
  span {
  }
  hr {
    margin: 10px 0;
  }
`;

const Num = styled.div`
  height: 18px;
  width: 18px;
  background-color: darkorange;
  font-size: 10px;
  margin-left: 3px;
  border-radius: 50%;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
