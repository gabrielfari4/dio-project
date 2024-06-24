export interface IButton {
    type?: string;
    title: string; 
    variant?: string; 
    onClick?: () => void; 
    marginTop?: string;
}

export interface IButtonStyled {
    variant: string; 
    marginTop?: string;
}