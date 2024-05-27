import Button from "../Button";
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, Wrapper } from "./styles";


const Header = () => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={} alt="Logo da DIO" />
                <BuscarInputContainer>
                    <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
             </Row>  
            <Row>
                <MenuRight href="#">Nome</MenuRight>
                <Button title='Entrar' />
                <Button title='Cadastrar' />
            </Row>  
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header;
