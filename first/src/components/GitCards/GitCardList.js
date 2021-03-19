import React from "react";
import GitCardSingle from "./GitCardSingle";
import testData from "./DummyData";

class GitCardList extends React.Component{
    render() {
        return(
            <div>
                {testData.map(profile => <GitCardSingle {...profile}/>)}
            </div>
        )
    }
}

export default GitCardList;