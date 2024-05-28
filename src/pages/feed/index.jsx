import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Column, Container, Title, TitleHighlight, } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";


const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual={99} nome='Gabriel Faria' image='https://avatars.githubusercontent.com/u/94396134?v=4'/>
                    <UserInfo percentual={86} nome='Gabriel Faria' image='https://avatars.githubusercontent.com/u/94396134?v=4'/>
                    <UserInfo percentual={50} nome='Gabriel Faria' image='https://avatars.githubusercontent.com/u/94396134?v=4'/>
                    <UserInfo percentual={35} nome='Gabriel Faria' image='https://avatars.githubusercontent.com/u/94396134?v=4'/>
                    <UserInfo percentual={12} nome='Gabriel Faria' image='https://avatars.githubusercontent.com/u/94396134?v=4'/>
                </Column>
            </Container>
        </>
    )
}

export default Feed;