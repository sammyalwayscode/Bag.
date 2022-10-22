import React from "react";
import styled from "styled-components";

const Popular = () => {
  const productData = [
    {
      id: "1",
      brand: "/image/pedro.svg",
      bagImg: "/image/pop1.png",
      productName: "Top Handle Leather",
      price: "250",
    },
    {
      id: "2",
      brand: "/image/dior1.png",
      bagImg: "/image/pop2.png",
      productName: "Medium Lady Bag",
      price: "4,500",
    },
    {
      id: "3",
      brand: "/image/pedro.svg",
      bagImg: "/image/pop3.png",
      productName: "Lizard-Effect Leather",
      price: "130",
    },
    {
      id: "4",
      brand: "/image/charles1.png",
      bagImg: "/image/pop4.png",
      productName: "Double Handle Front",
      price: "600",
    },
    {
      id: "5",
      brand: "/image/stradivarius1.png",
      bagImg: "/image/pop6.png",
      productName: "Structured Tote Bag",
      price: "220",
    },
    {
      id: "6",
      brand: "/image/dior1.png",
      bagImg: "/image/pop6.png",
      productName: "Small Book Tote",
      price: "3,200",
    },
    {
      id: "7",
      brand: "/image/stradivarius1.png",
      bagImg: "/image/pop7.png",
      productName: "Multikompartemen Sling Bag",
      price: "180",
    },
    {
      id: "8",
      brand: "/image/zara1.png",
      bagImg: "/image/pop8.png",
      productName: "Soft Sling Chain Bag",
      price: "175",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Title>Popular This Season</Title>
        <PopCategory>
          <AllBtn>All</AllBtn>
          <BrandSel>
            <label>Brand</label>
            <select>
              <option>Dior</option>
              <option>Pedro</option>
              <option>stradivarus</option>
              <option>zara</option>
              <option>charles & Keith</option>
            </select>
          </BrandSel>
          <BrandSel>
            <label>Type</label>
            <select>
              <option>Hand Bag</option>
              <option>Sling Bag</option>
              <option>Drawstring</option>
              <option>Wrislet</option>
              <option>Clutch</option>
            </select>
          </BrandSel>
          <BrandSel>
            <label>Color</label>
            <select>
              <option>Dark Cyan</option>
              <option>Black</option>
              <option>Yellow</option>
              <option>Pink</option>
              <option>Carton Black</option>
              <option>Pink</option>
            </select>
          </BrandSel>
        </PopCategory>
        <BagsDispHold>
          {productData?.map((props) => (
            <BagCard>
              <ImgPart>
                <LogoImg>
                  <img src={props.brand} alt="" />
                </LogoImg>
                <BagImage>
                  <img src={props.bagImg} alt="" />
                </BagImage>
              </ImgPart>
              <ProdName> {props.productName} </ProdName>
              <ProdPrice>${props.price}.00</ProdPrice>
            </BagCard>
          ))}
        </BagsDispHold>
      </Wrapper>
    </Container>
  );
};

export default Popular;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: montserrat;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const PopCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;
const AllBtn = styled.button`
  height: 40px;
  width: 120px;
  margin-top: 15px;
  font-family: montserrat;
  border: 1px solid #dddddd;
  color: #6d6d6e;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const BrandSel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  select {
    height: 40px;
    width: 120px;
    font-family: montserrat;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    select {
      height: 40px;
      width: 100px;
      font-size: 12px;
    }
  }
`;
const BagsDispHold = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const BagCard = styled.div`
  width: 210px;
  margin: 10px;
`;
const ImgPart = styled.div`
  width: 100%;
  height: 233px;
  background-color: #fbf9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
const LogoImg = styled.div`
  height: 35px;
  margin-bottom: 20px;
  img {
    width: 50px;
  }
`;
const BagImage = styled.div``;
const ProdName = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #402f3b;
`;
const ProdPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #402f3b;
`;
