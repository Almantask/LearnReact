// Custom component.
// Capitalization matters.
// Components should be capitalized.
function Button(props) {
    const handleClick = () => props.onClick(props.increment)
    return (
        <button onClick={handleClick}>
            {props.increment > 0 
                ? "+" + props.increment 
                : props.increment }
        </button>
    );
}



// To expose this component to the outside (make it public), we need to export it
// Prefer not to expose more than one component.
export default Button;