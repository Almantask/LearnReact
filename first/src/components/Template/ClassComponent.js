import React from 'react';

class ClassComponent extends React.Component {
        // either this
    // constructor(props){
    //     super(props);
    //     this.state = 0
    // }
    // or this
    state = 0;
    // same as a functional component's 
    // const [state, setState] = useState(state)

    // a functional component is just this function.
    render(){
        return(
            <>
                <div>"All in class component accessed through this."</div>
                <div>{this.props.parentName}</div>
                <div>{this.props.propertyName}</div>
            </>
        )
    }
}

export default ClassComponent;