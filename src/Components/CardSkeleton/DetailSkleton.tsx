import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const DetailSkleton = () => {
  return (
    <Wrapper>
      <ImageDiv>
        <Skeleton height="80vh" width="500px" />
      </ImageDiv>
      <ImageDivS>
        <Skeleton height="80vh" width="300px" />
      </ImageDivS>
      <TextDiv>
        <BagName>
          {" "}
          <Skeleton />{" "}
        </BagName>
        <Description1>
          <Skeleton count={4} />{" "}
        </Description1>
        <Description2>
          <Skeleton count={4} />{" "}
        </Description2>
        <AddCart>
          <button>
            <Skeleton />
          </button>
        </AddCart>
      </TextDiv>
    </Wrapper>
  );
};

export default DetailSkleton;

const BagPropHold = styled.div`
  display: flex;
  font-family: poppins;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  min-height: 88vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;
const ImageDiv = styled.div`
  width: 500px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  @media (max-width: 500px) {
    display: none;
  }
`;
const ImageDivS = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
  }
`;
const TextDiv = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const BagName = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Price = styled.div`
  font-size: 15px;
  margin: 5px 5px;
  text-align: center;
  strong {
    font-weight: 800;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
`;
const Description1 = styled.p`
  font-size: 15px;
`;
const Description2 = styled.p`
  font-size: 15px;
`;
const AddCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 90%;
    height: 35px;
    border: none;
    outline: none;
    font-family: montserrat;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }
`;
