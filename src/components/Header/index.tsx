import  logo  from '../../assets/simbol.png'
import {  HeaderContainer, HeaderImg, HeaderStrong } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={logo} alt="Logo" />
      <HeaderStrong>Filme Finder</HeaderStrong>
    </HeaderContainer>
  );
};

export default Header;