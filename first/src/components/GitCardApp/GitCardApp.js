import React from "react";
import GitCardList from "../GitCards/GitCardList"
import "./GitCardApp.css";
import SearchForm from "../SearchForm/SearchForm.js"; 
import testData from "./DummyData.js";

class GitCardApp extends React.Component{
    // either this
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         profiles: testData
    //     }
    // }
    // or this
    state = {
        profiles: testData
    }

    addNewProfile = (profile) => {
        this.setState(previous => ({
            profiles: [...previous.profiles, profile]
        }))
    };

    // must have
    render(){
        return (
            <div>
                <div className="header">GitHub Cards App</div>
                <SearchForm onSubmit={this.addNewProfile} />
                <GitCardList profiles={this.state.profiles}/>
            </div>
        )
    }
}
// const App = ({title}) => (
//     <div className="header">{title}</div>
// );

export default GitCardApp;