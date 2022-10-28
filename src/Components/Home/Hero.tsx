import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <small>Sammy Collection</small>
          <Title>Summer Envelope Handbag</Title>
          <SubTitle>
            Perfect triangle cover which unlike any regular handbag, it's
            secured with magnets and best option fro your high fasaioned look
          </SubTitle>
          <BtnText>
            <button>Add to Cart</button>
            <LineSpace />
            <Price>
              <small>$560.00</small>
              <MainPrice>$400.00</MainPrice>
            </Price>
          </BtnText>
        </TextDiv>
        <ImageDiv>
          <img src="/image/bagg.png" alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: montserrat;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`;
const TextDiv = styled.div`
  width: 500px;
  small {
    font-size: 10px;
    letter-spacing: 5px;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
const ImageDiv = styled.div`
  img {
    width: 500px;
    @media (max-width: 500px) {
      width: 300px;
    }
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const BtnText = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 40px;
    width: 130px;
    border: none;
    outline: none;
    font-family: montserrat;
    font-weight: 600;
    background-color: #000;
    color: #fff;
  }
`;
const LineSpace = styled.div`
  height: 1px;
  width: 60px;
  background-color: #000;
  margin: 0 20px;
`;
const Price = styled.div`
  small {
    text-decoration: line-through;
    font-size: 11px;
  }
`;
const MainPrice = styled.div`
  font-weight: 700;
`;
