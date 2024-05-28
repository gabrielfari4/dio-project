import { FiThumbsUp } from "react-icons/fi"
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles"


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://media.licdn.com/dms/image/D4D16AQHFEbxHekTMhg/profile-displaybackgroundimage-shrink_350_1400/0/1697556057800?e=1722470400&v=beta&t=CWTvjhRpylmRsg3CJHTQE-PAuzcqt27IHKv7OapkUeM"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/94396134?v=4"/>
                <div>
                    <h4>Gabriel Faria</h4>
                    <p>Há 8 minutos.</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card;