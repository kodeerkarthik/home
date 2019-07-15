import React, { Component } from 'react';
import logo from '../Images/logo.png'
// import ModalWrapper from '../Modal/ModalWrapper';
import '../Css/Signup.css';

import Modal from 'react-bootstrap/Modal'

  


class Signup extends Component {
    render() {
        return ( 
            <div className="body">
                <div className='head '>
                    <div className='row'>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <img src={logo} alt={"logo"} className='logo'></img>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10"></div>
                    </div>
                </div>
                <div className='row box'>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 row signup_box">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 signup_image"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h1 className='signup_heading'>Sign up here</h1>
                            <form>
                                <input type='text' className='input_box' placeholder='First Name..'></input>
                                <input type='text' className='input_box' placeholder='Last Name..'></input>
                                <input type='text' className='input_box' placeholder='Email..'></input>
                                <input type='password' className='input_box' placeholder='Password..'></input>
                                <input type='text' className='input_box' placeholder='Mobile Number..'></input>                                                            
                                <div className="radio">
                                    <label className="select_one"><input type="radio" value="option1" /> Male</label>
                                    <label className="select_one"><input type="radio" value="option1" /> Female</label>
                                    <label className="select_one"><input type="radio" value="option1" /> Others</label>
                                </div>
                                <button type="button" class="btn btn-success signup_btn">Signup</button>
                                <label className="signup_lbl">Already registered..?</label><button type="button" class="btn link_btn">Login</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>   
                </div>
            </div> 
        );
    }
}
export default Signup;


