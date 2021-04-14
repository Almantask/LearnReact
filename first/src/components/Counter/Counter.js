import Display from './Display'
import Button from './Button'
import { useState } from 'react';

function Counter(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = (increment) => setCounter(counter+increment);
    
    return(
        <div>
            <Button onClick={incrementCounter} increment={1}/>
            <Display text={counter}/>
            <Button onClick={incrementCounter} increment={-1}/>
        </div>
    )
}

export default Counter;