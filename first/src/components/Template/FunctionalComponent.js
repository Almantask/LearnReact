import { useState } from 'react';

function FunctionalComponent(props){

    const initialValue = 0;
    const [state, setState] = useState(initialValue);
    
    return(
        <>
            <div>{props.parentName}</div>
            <div>{props.propertyName}</div>
        </>
    )
}

export default FunctionalComponent;