import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BsCart2, BsBagCheckFill } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoNav>
          <Logo>Bag.</Logo>
          <Navs>
            <span>Home</span>
            <span>Shop</span>
            <span>Catalogue</span>
          </Navs>
        </LogoNav>
        <IconsHold>
          <span>
            <FiSearch />
          </span>
          <span>
            <BsCart2 />
          </span>
          <span>
            <MdOutlineAccountCircle />
          </span>
        </IconsHold>
        <MobNav>
          <BsBagCheckFill size="20px" />
        </MobNav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const LogoNav = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: 900;
  font-size: 30px;
`;
const Navs = styled.div`
  margin-left: 50px;
  span {
    margin: 0 10px;
    font-size: 13px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const IconsHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    margin: 0 7px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobNav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
