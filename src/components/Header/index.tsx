import  logo  from '../../assets/simbol.png'
import { Container, HeaderContainer, HeaderImg, HeaderStrong } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={logo} alt="Logo" />
      <HeaderStrong>Filme Finder</HeaderStrong>
    </HeaderContainer>
  );
};

export default Header;