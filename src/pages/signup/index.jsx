import { useForm } from "react-hook-form";
import Header from "../../components/Header"
import Input from "../../components/Input";
import { Column, Container, SubTitleLogin, TenhoContaText, Title, TitleLogin, Wrapper } from "./styles";
import { FaUser } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";

const schema = yup.object(
    {
        name: yup.string().min(3, 'No mínimo 3 caracteres.').required('Campo obrigatório.'),
        email: yup.string().email().required('Campo obrigatório.'),
        password: yup.string().min(3, 'No mínimo 3 caracteres.').required('Campo obrigatório.'),
  })
  .required()


const SignUp = () => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handleEmail = (e) => {
        setNewEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setNewPassword(e.target.value)
    }

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    });

    const onSubmit = async formData => {
            //const { data } = await api.get(`user?email=${formData.email}&senha=${formData.password}`)
            if (newName && newEmail && newPassword) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido.')
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
                        <TitleLogin>
                            Comece agora grátis
                        </TitleLogin>
                        <SubTitleLogin marginTop={'10px'} marginBottom={'30px'}>
                            Crie sua conta e make the change._
                        </SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                                <Input name='name' type='text' errorMessage={errors?.name?.message} control={control} placeholder='Nome completo' onChange={handleName} leftIcon={<FaUser />}/>
                                <Input name='email' type='email' errorMessage={errors?.email?.message} control={control} placeholder='seu@email.com' onChange={handleEmail} leftIcon={<MdEmail />}/>
                                <Input name='password' type='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' onChange={handlePassword} leftIcon={<MdLock />}/>
                                <Button title='Criar minha conta' variant="secondary" type='submit' marginTop={'30px'}/>
                            
                        </form>
                        <SubTitleLogin marginTop={'30px'} marginBottom={'15px'}>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubTitleLogin>
                        <TenhoContaText>
                            Já tenho conta. <a href="/login">Fazer login</a>
                        </TenhoContaText>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default SignUp;