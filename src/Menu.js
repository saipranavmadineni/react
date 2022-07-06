import { NavLink, Route, Routes } from 'react-router-dom';

import App from './App';
import App3 from './App3';
import React from 'react';
import Http1 from './Http1';
import Http2 from './Http2';
import Http3 from './Http3';
import Http4 from './Http4';
class Menu extends React.Component {

    contructor(props) {

    }
    render() {

        return (
            <div>
                <nav>

                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/comp2'>LifeCycle</NavLink></li>
                        <li><NavLink to='/http'>httpcall</NavLink></li>
                        <li><NavLink to='/http2'>createuser</NavLink></li>
                        <li><NavLink to='/http3'>createdept</NavLink></li>
                        <li><NavLink to='/http4'>createskill</NavLink></li>

                    </ul>
                </nav>

                <Routes>
                    <Route exact path='/' element={<App />}></Route>
                    <Route exact path='/comp2' element={<App3 />}></Route>
                    <Route exact path='/http' element={<Http1 />}></Route>
                    <Route exact path='/http2' element={<Http2 />}></Route>
                    <Route exact path='/http3' element={<Http3 />}></Route>
                    <Route exact path='/http4' element={<Http4 />}></Route>

                </Routes>      </div>

        )
    }
}
export default Menu;