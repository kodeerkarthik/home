import React, { Component } from 'react';
import logo from '../Images/logo.png'


import '../Css/Signup.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false,login_modal: false};

    }
    toggle=()=> {
        debugger;
        this.setState({
          modal: !this.state.modal
        });
    }
    login_toggle=()=> {
        this.setState({
          login_modal: !this.state.login_modal
        });
    }

    render() {
        return ( 
            <div className="body">
                <div className='head '>
                    <div className='row'>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <img src={logo} alt={"logo"} className='logo'></img>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h3 className='logo_name'>HEALTH+</h3><p className='logo_subname'>MULTISPECIALITY <br/>HOSPITAL</p>
                            </div>
                        </div>
                        
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9"></div>
                    </div>
                </div>

                {/* <div className='animate_div'>
                    <h1 className='animate_head'>
                        <span>H</span>
                        <span>E</span>
                        <span>A</span>
                        <span>L</span>
                        <span>T</span>
                        <span>H</span>
                        <span> </span>
                        <span>P</span>
                        <span>L</span>
                        <span>U</span>
                        <span>S</span>
                    </h1>
                </div> */}

                
                <div className='row body1'>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Button color="success" className='register' onClick={this.toggle}>Sign up</Button>
                    </div>
                    
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Button color="success" className='register' onClick={this.login_toggle}>sign in</Button>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>
                
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit} className='signup_form'> 
                        <ModalBody className=" row signup_box">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 signup_image"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h1 className='signup_heading'>Sign up here</h1>
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
                                    <button type="button" class="btn btn-success signup_btn">SIGN UP</button>
                                    {/* <label className="signup_lbl">Already registered..?</label><button type="button" class="btn link_btn">Login</button>        */}
                                </div>    
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>



                <Modal isOpen={this.state.login_modal}>
                    <form onSubmit={this.handleSubmit} className='login_form'> 
                        <ModalBody className=" row signup_box">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 login_image"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h1 className='login_heading'>SIGN IN</h1>
                                    <input type='text' className='input_box' placeholder='Email..'></input>
                                    <input type='password' className='input_box' placeholder='Password..'></input>                                                 
                                    <button type="button" class="btn btn-success login_btn">SIGN IN</button>
                                </div>    
                        </ModalBody>
                        <ModalFooter>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
                            <Button color="danger" onClick={this.login_toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div> 
        );
    }
}
export default Signup;
