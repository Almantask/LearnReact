import React from "react";
import GitCardList from "../GitCards/GitCardList"
import "./GitCardApp.css";
import SearchForm from "../SearchForm/SearchForm.js"; 
import testData from "./DummyData.js";

class GitCardApp extends React.Component{
    state = {
        profiles: testData
    }

    addNewProfile = (profile) => {
        this.setState(previous => ({
            profiles: [...previous.profiles, profile]
        }))
    };

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

export default GitCardApp;