type ButtonProps = {
    type: 'button',
    title: string,
    variant: string
}
export const Button = ({type, title, variant}: ButtonProps) => {
    return (
        <button className={variant} type={type}>{title}</button>

    );
};