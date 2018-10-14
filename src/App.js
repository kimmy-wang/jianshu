import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import Detail from './pages/detail';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <React.Fragment>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail' exact component={Detail}/>
                        <Footer/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
