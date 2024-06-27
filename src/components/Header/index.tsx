import Button from "../Button";
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, SairText, UserPicture, Wrapper } from "./styles";
import Logo from '../../assets/logo-dio.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


const Header = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    const handleClickSignUp = () => {
        navigate('/signup')
    }

    const { user, handleSignOut } = useAuth()

  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <Link to={'/'}>
                    <img src={Logo} alt="Logo da DIO" />
                </Link>
                {user.id ? (
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
                {user.id ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/94396134?v=4"/>
                        <Link to={'/'} style={{textDecoration:'none'}} onClick={handleSignOut}><SairText>Sair</SairText></Link>
                    </>
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
