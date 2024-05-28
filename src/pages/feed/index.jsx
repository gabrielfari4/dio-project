import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, Text, Title, TitleHighlight } from "./styles";
import Banner from '../../assets/banner.png'

const Feed = () => {
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
                    <Link to="/login">
                    <Button title='Começar agora' variant="secondary" onClick={() => null}></Button>
                    </Link>
                </div>
                <div>
                    <img src={Banner} alt="Banner" />
                </div>
            </Container>
        </>
    )
}

export default Feed;