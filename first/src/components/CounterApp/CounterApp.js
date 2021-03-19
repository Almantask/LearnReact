import Counter from '../Counter/Counter'

function CounterApp() {
    return ( 
        // In order to render multiple components, they must be placed in a div.
        // Alternatively, you can use an empty <>.
        <div>
            <Counter/>
        </div> 
    );
}

export default CounterApp;