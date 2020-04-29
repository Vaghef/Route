import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'

const PageOne = () => {
    return (
        <div>
            <a href="/pagetwo" >click on me to go page two</a>
        </div>
    )
}

const PageTwo = () => {
    return( <div>
        <button>Click Me</button>
    </div>)
}

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;