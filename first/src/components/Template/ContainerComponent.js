// imports a method which allows setting the initial state of a component.
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ComponentModifyingContainer from './ComponentModifyingContainer';
import ComponentUsingPreviousContainerState from './ComponentUsingPreviousContainerState';

// props allows passing arguments via component "attributes".
function ContainerComponent(props){
    const initialState = "Parent State";
    // state is a readonly field.
    // set state is a setter method to set that useState.
    // exact names can be differet.
    const [state, setState] = useState(initialState);

    // a container component:
    // - has a state
    // - holds other components
    // - usually doesn't have any custom visuals
    return(
        <>
            <ComponentModifyingContainer setState = {setState}/>
            <ComponentUsingPreviousContainerState setState = {setState}/>
            <ClassComponent propertyName="Passing data to components" parentName={state}/>
            <FunctionalComponent propertyName="{} is not needed for text" parentName={state}/>
            <FunctionalComponent propertyName={1} parentName={state}/>
        </>
    );
}

// makes this component publicly accessible.
export default ContainerComponent;