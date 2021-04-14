import react from 'react';

function ComponentModifyingContainer(props){
    
    // function as variable
    const setRandomName = () => {
        const name = randomizeName();
        props.setState(name);
    }

    // normal function
    function randomizeName(){
        const names = ['good', 'bad', 'ugly'];   
        const index = Math.floor(Math.random() * names.length);
        
        return names[index];
    }

    // stateless
    return(
        <button onClick={setRandomName}>Set Random Name</button>
    )
}

export default ComponentModifyingContainer;