import React from "react";
import GitCardSingle from "./GitCardSingle";


class GitCardList extends React.Component{
    // key is a property when many elements are dynamically rendered.
    // Without it, react assumes the position of an element (of an identity) 
    render() {
        return(
            <div>
                {this.props.profiles.map(profile => <GitCardSingle key={profile.id} {...profile}/>)}
            </div>
        )
    }
}

export default GitCardList;