import logo from './logo.svg';
import './App.css';
import Counter from './../Counter/Counter'

function App() {
    return ( 
        // In order to render multiple components, they must be placed in a div.
        // Alternatively, you can use an empty <>.
        <div>
            <Counter/>
        </div> 
    );
}

export default App;