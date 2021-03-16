import Display from './Display'
import Button from './Button'
import { useState } from 'react';

function Counter(){
    // Like a constructor.
    // UseState- is a hook.
    // a hooks is just a function which returns 2 things:
    // - a state,
    // - a function to update that state.
    // consider it like a setter method with a backing field.
    // getter in this case is just directly using the private state.
    const [counter, setCounter] = useState(0);
    const incrementCounter = (increment) => setCounter(counter+increment);
    // Props are key-value pairs.
    // Sends counter state to a text prop.
    // Passing a prop value doesn't always need a {}
    // For example, it can be ignored if the passed value is string.
    return(
        <div>
            <Button onClick={incrementCounter} increment={1}/>
            <Display text={counter}/>
            <Button onClick={incrementCounter} increment={-1}/>
        </div>
    )
}

export default Counter;