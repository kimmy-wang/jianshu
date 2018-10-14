import React from 'react';
import Header from './common/header';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header/>
                    <BrowserRouter>
                        <React.Fragment>
                            <Route path='/' exact component={Home}/>
                            <Route path='/detail' exact render={() => {return <div>detail</div>}}/>
                        </React.Fragment>
                    </BrowserRouter>
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
