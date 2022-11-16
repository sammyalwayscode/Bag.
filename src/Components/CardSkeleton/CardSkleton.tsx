import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const CardSkleton = () => {
  return (
    <Container>
      <TonHold>
        <ImgPart>
          {" "}
          <Skeleton height="233px" width="220px" />{" "}
        </ImgPart>
        <ProdName>
          {" "}
          <Skeleton />
        </ProdName>
        <ProdPrice>
          <Skeleton />{" "}
        </ProdPrice>
      </TonHold>
      <TonHold>
        <ImgPart>
          {" "}
          <Skeleton height="233px" width="220px" />{" "}
        </ImgPart>
        <ProdName>
          {" "}
          <Skeleton />
        </ProdName>
        <ProdPrice>
          <Skeleton />{" "}
        </ProdPrice>
      </TonHold>
      <TonHold>
        <ImgPart>
          {" "}
          <Skeleton height="233px" width="220px" />{" "}
        </ImgPart>
        <ProdName>
          {" "}
          <Skeleton />
        </ProdName>
        <ProdPrice>
          <Skeleton />{" "}
        </ProdPrice>
      </TonHold>
      <TonHold>
        <ImgPart>
          {" "}
          <Skeleton height="233px" width="220px" />{" "}
        </ImgPart>
        <ProdName>
          {" "}
          <Skeleton />
        </ProdName>
        <ProdPrice>
          <Skeleton />{" "}
        </ProdPrice>
      </TonHold>
    </Container>
  );
};

export default CardSkleton;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const TonHold = styled.div`
  margin: 10px;
`;

const ImgPart = styled.div`
  width: 100%;
  height: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  margin-bottom: 15px;
`;

const ProdName = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ProdPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
