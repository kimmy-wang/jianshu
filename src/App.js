import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import Detail from './pages/detail';
import Photo from './pages/photo';
import Song from './pages/song';
import Video from './pages/video';
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
                        <Route path='/photo' exact component={Photo}/>
                        <Route path='/song' exact component={Song}/>
                        <Route path='/video' exact component={Video}/>
                        <Footer/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
