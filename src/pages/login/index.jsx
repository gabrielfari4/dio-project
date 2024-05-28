import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
    }

    const [email, setEmail] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let validado = email === 'gabriel@gmail.com' && password === '123456'

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
                            <Input placeholder='E-mail' leftIcon={<MdEmail />} onChange={handleEmail}/>
                            <Input placeholder='Senha' type='password' leftIcon={<MdLock />} onChange={handlePassword}/>
                            <Button title='Entrar' variant="secondary" onClick={validado ? handleClickFeed : null} type='button'/>
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