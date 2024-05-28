import { Container, NameText, Progress, UserPicture } from "./styles"


const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
        <div>
            <UserPicture src={image}/>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export default UserInfo;