export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    leftIcon?: React.ReactNode;
    name: string; 
    control: any;
    errorMessage?: string;
}