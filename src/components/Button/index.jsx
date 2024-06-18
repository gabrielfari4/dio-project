import { ButtonContainer } from "./styles";


const Button = ({ title, variant = 'primary', onClick, marginTop }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} marginTop={marginTop}>
        {title}
    </ButtonContainer>
  )
}

export default Button;