import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, Text, Title, TitleHighlight } from "./styles";
import Banner from '../../assets/banner.png'

const Home = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <Text>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </Text>
                    {/* <Link to="/login">
                    <Button title='Começar agora' variant="secondary" onClick={() => null}></Button>
                    </Link> */}
                    <Button title='Começar agora' variant="secondary" onClick={handleClickSignIn}></Button>
                </div>
                <div>
                    <img src={Banner} alt="Banner" />
                </div>
            </Container>
        </>
    )
}

export default Home;