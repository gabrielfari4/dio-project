import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {

    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                    
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form>
                            <Input placeholder='E-mail' leftIcon={<MdEmail />}/>
                            <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                            <Button title='Entrar' variant="secondary" onClick={handleClickFeed} type='button'/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha </EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login;