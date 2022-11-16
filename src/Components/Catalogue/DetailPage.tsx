import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../Global/ReduxState";
import Swal from "sweetalert2";
import DetailSkleton from "../CardSkeleton/DetailSkleton";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProductDetail = async () => {
    const URL = `https://bag-server.vercel.app/api/detail/${id}`;

    await axios.get(URL).then((res) => {
      setProductDetails(res.data.data.productDetail);
      console.log(res.data.data.productDetail);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      {isLoading && <DetailSkleton />}

      {productDetails?.map((props) => (
        <Wrapper key={props._id}>
          <ImageDiv>
            <img src={props.descAvatar} alt="" />
          </ImageDiv>
          <TextDiv>
            <small> {props.brandName} </small>
            <BagName> {props.productName} </BagName>
            <BagPropHold>
              <Price>
                {" "}
                Price: <strong>$ {props.price} </strong>{" "}
              </Price>
              <Price>
                {" "}
                Bag Type: <strong> {props.bagType} </strong>{" "}
              </Price>
              <Price>
                {" "}
                Color:{" "}
                <strong>
                  {props.bagColor}{" "}
                  <ColBox style={{ backgroundColor: `${props.bagColor}` }} />{" "}
                </strong>{" "}
              </Price>
            </BagPropHold>
            <Description1>{props.productDesription1}</Description1>
            <Description2>{props.productDesription2}</Description2>
            <AddCart>
              <button
                onClick={() => {
                  dispatch(addToCart(props));
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Great! 👏👏👏",
                    text: `${props.productName} Has Been Added to Your BAG.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              >
                Add to Cart
              </button>
            </AddCart>
          </TextDiv>
        </Wrapper>
      ))}
    </Container>
  );
};

export default DetailPage;

const ColBox = styled.div`
  height: 12px;
  width: 12px;
  margin-left: 3px;
`;

const BagPropHold = styled.div`
  display: flex;
  font-family: poppins;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: montserrat;
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
  background-color: #fbf9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  @media (max-width: 500px) {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TextDiv = styled.div`
  width: 500px;

  small {
    font-weight: 700;
    font-family: poppins;
    letter-spacing: 8px;
    color: darkorange;
  }
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
    background-color: darkorange;
    border: none;
    outline: none;
    font-family: montserrat;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
  }
`;
