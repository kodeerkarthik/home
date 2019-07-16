import React, { Component } from 'react';
import '../Css/Slideshow.css';
class Slideshow extends Component { 
    render() {

        return (
            <div className='slidebody'>
                <slider>
                    <slide><p>slide 1</p></slide>
                    <slide><p>slide 2</p></slide>
                    <slide><p>slide 3</p></slide>
                    <slide><p>slide 4</p></slide>
                    <slide><p>slide 5</p></slide>
                    <slide><p>slide 6</p></slide>
                    <slide><p>slide 7</p></slide>
                    <slide><p>slide 8</p></slide>
                    <slide><p>slide 9</p></slide>
                    <slide><p>slide 10</p></slide>
                </slider>
                
            </div>
        );
    }
}

export default Slideshow;