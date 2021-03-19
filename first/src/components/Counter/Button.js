// Custom component.
// Capitalization matters.
// Components should be capitalized.
function Button(props) {
    const handleClick = () => props.onClick(props.increment)

    const renderIncrement = () => props.increment > 0 
    ? "+" + props.increment 
    : props.increment;
    return (
        <button onClick={handleClick}>
            {renderIncrement()}
        </button>
    );
}

// To expose this component to the outside (make it public), we need to export it
// Prefer not to expose more than one component.
export default Button;