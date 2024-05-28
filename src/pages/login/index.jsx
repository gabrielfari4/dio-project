import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, ValidationText, Wrapper } from "./styles";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState('')

    const handleClickFeed = () => {
        navigate('/feed')
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleValidation = (e) => {
        e.preventDefault()
        const validado = email !== 'usuario@email.com' && password !== 'senha'

        if (validado) {
            handleClickFeed()
        } else {
            setValidate('E-mail ou senha inválido.')
        }

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
                        <form onSubmit={handleValidation}>
                            <Input placeholder='E-mail' leftIcon={<MdEmail />} onChange={handleEmail} required/>
                            <Input placeholder='Senha' type='password' leftIcon={<MdLock />} onChange={handlePassword} required/>
                            <Button title='Entrar' variant="secondary" type='submit'/>
                        </form>
                        {validate && <ValidationText>{validate}</ValidationText>}
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