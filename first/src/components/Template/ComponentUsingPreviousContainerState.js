import react from 'react';

function ComponentUsingPreviousContainerState(props){
    
    const appendRandomIndex = () => {
        const index = Math.floor(Math.random() * 10);
        // Using previous state
        props.setState(previousState => previousState + index);
    }

    return(
        <button onClick={appendRandomIndex}>Append Random Index</button>
    )
}

export default ComponentUsingPreviousContainerState;