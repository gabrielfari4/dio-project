import { Controller } from "react-hook-form";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";

const Input = ({ onChange, leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
      <InputContainer onChange={onChange}>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <InputText {...field} {...rest}/>}
          />
          
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null } 
    </>
  )
}

export default Input;