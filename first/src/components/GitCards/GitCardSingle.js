import React from "react";

class GitCardSingle extends React.Component{
    render(){
        // style={{}}- object within dynamic jsx.
        // useful for dynamic styling.
        const profile = this.props;
        return(
            <div className="github-profile" style={{ margin: '2rem'}}>
                <img src={profile.avatar_url}/>
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default GitCardSingle;