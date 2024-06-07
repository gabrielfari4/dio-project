import Button from "../Button";
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import Logo from '../../assets/logo-dio.png';
import { Link, useNavigate } from "react-router-dom";

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    const handleClickSignUp = () => {
        navigate('/signup')
    }

  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <Link to={'/'}>
                    <img src={Logo} alt="Logo da DIO" />
                </Link>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
             </Row>  
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/94396134?v=4"/>
                ) : (
                    <>
                        <MenuRight href="#">Nome</MenuRight>
                        <Button title='Entrar' onClick={handleClickSignIn}/>
                        <Button title='Cadastrar' onClick={handleClickSignUp}/>
                    </>
                )}
            </Row>  
        </HeaderContainer>
    </Wrapper>
  )
}

export default Header;
