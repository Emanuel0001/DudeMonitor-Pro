import './Button.css'

const Button = ({value, isDisabled}) => {
    return (
            <button disabled={isDisabled}>{value}</button>
    )
}

export default Button;