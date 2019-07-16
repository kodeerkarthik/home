import React, { Component } from 'react';
import homebackground from '../Images/homebackground.jpg'
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <img src={homebackground} alt={"logo"} ></img>
                <Slideshow/>
            </div>
        );
    }
}

export default Home;