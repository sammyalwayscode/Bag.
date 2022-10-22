import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

const Category = () => {
  const categotyData = [
    {
      id: 1,
      title: "Hand Bag",
      amount: 106,
      image: "/image/bag1.jpg",
    },
    {
      id: 2,
      title: "Sling Bag",
      amount: 456,
      image: "/image/bag2.jpg",
    },
    {
      id: 3,
      title: "Drawstring",
      amount: 195,
      image: "/image/bag3.jpg",
    },
    {
      id: 4,
      title: "Wristlet",
      amount: 56,
      image: "/image/bag4.jpg",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <CatText>
          <Title>Categories</Title>
          <Content>
            Calm down, do you find the best bag model for your look? let's mix n
            match the caregories which suit to your look
          </Content>
        </CatText>
        <CatImage>
          {categotyData.map((props) => (
            <ImgBox
              key={props.id}
              style={{ backgroundImage: `url(${props.image})` }}
            >
              <MinBox>
                <CatName>
                  {" "}
                  <span> {props.title} </span>{" "}
                </CatName>
                <ItemQty>
                  <span>{props.amount} Items</span>
                  <HiArrowNarrowRight />
                </ItemQty>
              </MinBox>
            </ImgBox>
          ))}
        </CatImage>
      </Wrapper>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 100px 0;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
  }
`;
const CatText = styled.div`
  width: 250px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 12px;
`;
const Content = styled.div`
  font-size: 13px;
  line-height: 2;
`;
const ImgBox = styled.div`
  height: 235px;
  width: 179px;
  /* background-image: url(); */
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  transition: 350ms;
  align-items: flex-end;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.07);
  }

  @media (max-width: 500px) {
    width: 90%;
    height: 200px;
    background-color: aliceblue;
  }
`;
const MinBox = styled.div`
  height: 60px;
  width: 90%;
  background-color: black;
  margin: 10px 0;
`;
const CatImage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  color: #fff;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const CatName = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fe963b;
  display: flex;
  align-items: center;
  font-weight: bold;
  span {
    margin-left: 10px;
  }
`;
const ItemQty = styled.div`
  height: 20px;
  width: 100%;
  background-color: #fe8216;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 00;
  span {
    margin-left: 10px;
    margin-right: 80px;
  }
`;
