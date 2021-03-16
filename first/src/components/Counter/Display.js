// Adding the argument props, allows us to interact with a state.
// A value is accessed as if it was a property on an object.
// The argument can be named whatever, but prefer to name it props as per convention.
function Display(props){
    return(
        <div>{props.text}</div>
    )
}

export default Display;