import { Container, NameText, Progress, UserPicture } from "./styles"
import { IUserInfo } from "./types";


const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
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