function Button(props) {
    const handleClick = () => props.onClick(props.increment)

    const getSign = () => props.increment > 0 ? "+" : "";

    return (
        <button onClick={handleClick}>
            {getSign()+props.increment}
        </button>
    );
}

export default Button;