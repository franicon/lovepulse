type ButtonProps = {
    type: 'button',
    title: string,
    variant: 'btn-primary'
}
export const Button = ({type, title, variant}: ButtonProps) => {
    return (
        <button className={variant} type={type}>{title}</button>

    );
};