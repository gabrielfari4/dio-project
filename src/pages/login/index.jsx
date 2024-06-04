import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Input from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object(
    {
        email: yup.string().email().required('Campo obrigatório.'),
        password: yup.string().min(3, 'No mínimo 3 caracteres.').required('Campo obrigatório.'),
  })
  .required()

const Login = () => {

    const navigate = useNavigate();
    /* const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState('') */

    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
      });

    console.log(isValid, errors)

    const onSubmit = data => console.log(data)

    const handleClickFeed = () => {
        navigate('/feed')
    }

    // implementação que feita por mim para validar o login
    /* const handleEmail = (e) => {
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

    } */

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email'  control={control} errorMessage={errors?.email?.message} placeholder='E-mail' leftIcon={<MdEmail />}/>
                            <Input name='password'  control={control} errorMessage={errors?.password?.message} placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                            <Button title='Entrar' variant="secondary" type='submit' />
                        </form>
                        {/* {validate && <ValidationText>{validate}</ValidationText>} */}
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