import React from "react";
import GitCardList from "../GitCards/GitCardList"
import "./GitCardApp.css";

class GitCardApp extends React.Component{
    // must have
    render(){
        return (
            <div>
                <div className="header">GitHub Cards App</div>
                <GitCardList/>
            </div>
        )
    }
}
// const App = ({title}) => (
//     <div className="header">{title}</div>
// );

export default GitCardApp;