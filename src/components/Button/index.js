import './Button.css'

const Button = ({value, isDisabled}) => {
    return (
            <button class="custom-button" disabled={isDisabled}>{value}</button>
    )
}

export default Button;