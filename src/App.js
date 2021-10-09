import React, { useEffect, useState } from "react";
import { Provider } from "./store";
import "./App.css";
import logo from './logo.svg';
import Search from './components/Search';
import YoutubeData from './components/YoutubeData';

const App = () => {
    const [isSticky, setSticky] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setSticky(window.pageYOffset)
        }
    }, []);
    return (
        <div className="App">
            <Provider>
                <header className={`App-header ${ isSticky > 90 ? ' sticky' : ''}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='logo'>
                                <img src={logo} width={90} />
                            </div>
                            <Search />
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <YoutubeData />
                </div>
            </Provider>
        </div>
    );
};

export default App;
