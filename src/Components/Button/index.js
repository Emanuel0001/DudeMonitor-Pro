import './Button.css'

const Button = ({value, disabled}) => {
    return (
            <button disabled={disabled}>{value}</button>
    )
}

export default Button;