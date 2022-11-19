import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import CardSkleton from "../CardSkeleton/CardSkleton";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, resetFilter } from "../Global/ReduxState";

const Catalogue: React.FC = () => {
  const categoryFilter = useSelector((state: any) => state.FILTERCATEGORY);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [brand, setBrand] = useState<string>("");
  const [bagType, setBagType] = useState<string>("");
  const [bagColor, setBagColor] = useState<string>("");
  const dispatch = useDispatch();

  const getProducts = async () => {
    const URL: string = `https://bag-server.vercel.app/api/products`;
    await axios.get(URL).then((res) => {
      setProducts(res.data.data);
      setIsLoading(false);
    });
  };

  // const productData = [
  //   {
  //     id: "1",
  //     brand: "pedro",
  //     bagImg: "/image/pop1.png",
  //     productName: "Top Handle Leather",
  //     price: "250",
  //   },
  //   {
  //     id: "2",
  //     brand: "dior",
  //     bagImg: "/image/pop2.png",
  //     productName: "Medium Lady Bag",
  //     price: "4,500",
  //   },
  //   {
  //     id: "3",
  //     brand: "pedro",
  //     bagImg: "/image/pop3.png",
  //     productName: "Lizard-Effect Leather",
  //     price: "130",
  //   },
  //   {
  //     id: "4",
  //     brand: "charles & Keith",
  //     bagImg: "/image/pop4.png",
  //     productName: "Double Handle Front",
  //     price: "600",
  //   },
  //   {
  //     id: "5",
  //     brand: "stradivarus",
  //     bagImg: "/image/pop6.png",
  //     productName: "Structured Tote Bag",
  //     price: "220",
  //   },
  //   {
  //     id: "6",
  //     brand: "dior",
  //     bagImg: "/image/pop6.png",
  //     productName: "Small Book Tote",
  //     price: "3,200",
  //   },
  //   {
  //     id: "7",
  //     brand: "stradivarus",
  //     bagImg: "/image/pop7.png",
  //     productName: "Multikompartemen Sling Bag",
  //     price: "180",
  //   },
  //   {
  //     id: "8",
  //     brand: "zara",
  //     bagImg: "/image/pop8.png",
  //     productName: "Soft Sling Chain Bag",
  //     price: "175",
  //   },
  // ];

  const getBrand = async () => {
    const URL: string = `https://bag-server.vercel.app/api/products/search/pro?brandName=${brand}`;
    await axios.get(URL).then((res) => {
      // console.log(res.data);
      dispatch(filterCategory(res.data));
      setIsLoading(false);
    });
  };
  // console.log(brand);

  const getType = async () => {
    const URL: string = `https://bag-server.vercel.app/api/products/search/pro?bagType=${bagType}`;
    await axios.get(URL).then((res) => {
      // console.log(res.data);
      dispatch(filterCategory(res.data));
      setIsLoading(false);
    });
  };

  const getColor = async () => {
    const URL: string = `https://bag-server.vercel.app/api/products/search/pro?bagColor=${bagColor}`;
    await axios.get(URL).then((res) => {
      // console.log(res.data);
      dispatch(filterCategory(res.data));
      setIsLoading(false);
    });
  };

  // setTimeout(() => {
  //   // or wait for 100ms until orders state updated
  //   console.log("checking Brand: ", brand);
  //   console.log("checking Type: ", bagType);
  //   console.log("checking Type: ", bagColor);
  // }, 100);

  useEffect(() => {
    getProducts();
    getBrand();
    getType();
    getColor();
  }, [brand, bagType, bagColor]);
  return (
    <Container>
      <Wrapper>
        <Title>
          Go through our best <span>CATEGORY</span>{" "}
        </Title>
        <PopCategory>
          <AllBtn
            onClick={() => {
              dispatch(resetFilter());
              console.log("clicked");
            }}
          >
            All
          </AllBtn>
          <BrandSel>
            <label>Brand</label>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                setBrand(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                Bag Brand
              </option>
              <option value="dior">dior</option>
              <option value="pedro">pedro</option>
              <option value="stradivarius">stradivarus</option>
              <option value="zara">zara</option>
              <option value="charles %26 keith">charles & keith</option>
            </select>
          </BrandSel>
          <BrandSel>
            <label>Type</label>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                setBagType(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                Bag Type
              </option>
              <option value="hand bag">Hand Bag</option>
              <option value="tote">Tote</option>
              <option value="drawstring">Drawstring</option>
              <option value="clutch">Clutch</option>
              <option value="sling">Sling</option>
              <option value="briefcase">Brief Case</option>
            </select>
          </BrandSel>
          <BrandSel>
            <label>Color</label>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                setBagColor(e.target.value);
              }}
            >
              <option value="DEFAULT" disabled hidden>
                Bag Color
              </option>
              <option value="chalk">Chalk</option>
              <option value="black">Black</option>
              <option value="violet">Violet</option>
              <option value="brown">Brown</option>
              <option value="lilac">Lilac</option>
              <option value="chocolate">Chocolate</option>
              <option value="dark moss">Dark Moss</option>
              <option value="multi">Multi</option>
              <option value="orange">Orange</option>
              <option value="brick">Brick</option>
              <option value="skyblue">Skyblue</option>
              <option value="cyan">Cyan</option>
            </select>
          </BrandSel>
        </PopCategory>
        {categoryFilter === null || categoryFilter.length === 0 ? (
          <BagsDispHold>
            {isLoading && <CardSkleton />}
            {products?.map((props: any) => (
              <Link
                key={props._id}
                to={`/detail/${props._id}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <BagCard key={props._id}>
                  <ImgPart>
                    <LogoImg>
                      <small> {props.brandName} </small>
                    </LogoImg>
                    <BagImage>
                      <img src={props.avatar} alt="" />
                    </BagImage>
                  </ImgPart>
                  <ProdName> {props.productName} </ProdName>
                  <ProdPrice>${props.price}</ProdPrice>
                </BagCard>
              </Link>
            ))}
          </BagsDispHold>
        ) : (
          <BagsDispHold>
            {isLoading && <CardSkleton />}
            {categoryFilter?.map((props: any) => (
              <Link
                key={props._id}
                to={`/detail/${props._id}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <BagCard key={props._id}>
                  <ImgPart>
                    <LogoImg>
                      <small> {props.brandName} </small>
                    </LogoImg>
                    <BagImage>
                      <img src={props.avatar} alt="" />
                    </BagImage>
                  </ImgPart>
                  <ProdName> {props.productName} </ProdName>
                  <ProdPrice>${props.price}</ProdPrice>
                </BagCard>
              </Link>
            ))}
          </BagsDispHold>
        )}
      </Wrapper>
    </Container>
  );
};

export default Catalogue;

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
  span {
    color: darkorange;
    font-weight: 900;
  }

  @media (max-width: 500px) {
    font-size: 20px;
    text-align: center;
  }
`;
const PopCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  justify-content: center;
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
  /* justify-content: space-around; */
  margin-bottom: 15px;
`;
const LogoImg = styled.div`
  height: 35px;
  margin: 20px 0;
  small {
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 10px;
    font-family: poppins;
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
