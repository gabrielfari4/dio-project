import { ButtonContainer } from "./styles";
import { IButton } from "./types";


const Button = ({ title, variant = 'primary', onClick, marginTop }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} marginTop={marginTop}>
        {title}
    </ButtonContainer>
  )
}

export default Button;