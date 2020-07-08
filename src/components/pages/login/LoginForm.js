import React, { Component } from 'react'
import {Switch, Router, Link} from 'react-router-dom'

export class LoginForm extends Component {
    state = {
        emailInput: "",
        password: ""
    }

    changeEmail = (e) =>{
        this.setState({emailInput: e.target.value})
    }

    changePassword = (e) =>{
        this.setState({password: e.target.value})
    }

    validateLogin = (e) => {
        e.preventDefault();
        const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailInput);
        const passIsValid = this.state.password.length >= 6;
        if(emailIsValid && passIsValid){
            this.props.history.push("/notes");
        }else{
            alert(
                (emailIsValid ? "":"Invalid Email\n")
                + 
                (passIsValid ? "":"Password must have at least 6 characters")
            )
        }
        
        
    }


    render() {
        return (
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card shadow">
                        <div className="card-header text-center"><h3>Login</h3></div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="emailInput">Email address</label>
                                    <input type="email" 
                                    value={this.state.emailInput}
                                    onChange={this.changeEmail} 
                                    className="form-control" id="emailInput"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input type="password" 
                                    value={this.state.password}
                                    onChange={this.changePassword} 
                                    className="form-control" id="passwordInput"/>
                                </div>
                                <div className="text-center">
                                    {/* <Link to={() => this.validateLogin()}> */}
                                        <button id="loginBtn" type="submit" onClick={this.validateLogin} className="btn btn-success mb-3" >Login</button>
                                    {/* </Link> */}
                                </div>     
                            </form>
                            <div className="text-center">
                                <Link to="/signup">
                                    <button className="btn btn-primary">Sign Up</button>
                                </Link>
                            </div>     
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm
