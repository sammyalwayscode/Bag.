import React from "react";
import styled from "styled-components";

const MixMatch = () => {
  const mixData = [
    {
      id: 1,
      title: "Zara Floral Embroidered Bomber Jacket",
      content: "Simple floral will gice the beautiful effect on your look",
      image: "/image/mix1.png",
    },
    {
      id: 2,
      title: "Orange Knit Top Zara",
      content:
        "It will be super match color touch with summer envelope handbag and bring a color for firal bomber jacket",
      image: "/image/mix2.png",
    },
    {
      id: 3,
      title: "Zara Midi Plisket Skirt",
      content:
        "Beautiful skirt made for you, the same color with bomber jacket will bring you to high fasion, Perfect!",
      image: "/image/mix3.png",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <ImageDiv>
          <img src="/image/mixx.png" alt="" />
        </ImageDiv>
        <ContentDiv>
          <small>Mix n Match</small>
          <Title>Do Your Style With Summer Envelope Handbag</Title>
          <MixDiv>
            {mixData?.map((props) => (
              <MixBoxes key={props.id}>
                <BoxImage>
                  <img src={props.image} alt="" />
                </BoxImage>
                <TitleCont>
                  <MixTitle> {props.title} </MixTitle>
                  <MixContent>{props.content}</MixContent>
                </TitleCont>
              </MixBoxes>
            ))}
          </MixDiv>
        </ContentDiv>
      </Wrapper>
    </Container>
  );
};

export default MixMatch;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: montserrat;
  margin-bottom: 200px;
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
const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
`;
const ContentDiv = styled.div`
  width: 500px;
  small {
    font-size: 12px;
    font-weight: 600;
    color: #fe8216;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 60px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
const MixDiv = styled.div``;
const MixBoxes = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const BoxImage = styled.div`
  height: 100px;
  width: 100px;
  background-color: #fbf9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 500px) {
    height: 60px;
    width: 60px;
  }
`;
const TitleCont = styled.div`
  width: 250px;
  @media (max-width: 500px) {
    width: 180px;
  }
`;
const MixTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
const MixContent = styled.div`
  font-size: 13px;
  color: gray;
  line-height: 1.8;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
