import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class SignupForm extends Component {
    state = {
        emailInput: "",
        password: "",
        passwordConfirm: ""
    }

    changeEmail = (e) =>{
        this.setState({emailInput: e.target.value})
    }

    changePassword = (e) =>{
        this.setState({password: e.target.value})
    }

    changeConfirmPassword = (e) => {
        this.setState({passwordConfirm: e.target.value})
    }

    validateSignup = (e) => {
        e.preventDefault();
        const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailInput);
        const passIsValid = this.state.password.length >= 6;
        const passMatch = (this.state.password === this.state.passwordConfirm);
        if(emailIsValid && passIsValid && passMatch){
            this.props.history.push("/notes");
        }else{
            alert(
                (emailIsValid ? "":"Invalid Email\n")
                + (passIsValid ? "":"Password must have at least 6 characters\n")
                + (passMatch ? "": "Password don't match")

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
                                <div className="form-group">
                                    <label htmlFor="passwordConfirmInput">Confirm Password</label>
                                    <input type="password"
                                    value={this.state.passwordConfirm}
                                    onChange={this.changeConfirmPassword} 
                                    className="form-control" id="passwordConfirmInput"/>
                                </div>
                                <div className="text-center">
                                    {/* <Link to="/notes"> */}
                                        <button id="signupBtn" className="btn btn-primary" onClick={this.validateSignup}>Sign Up</button>
                                    {/* </Link> */}
                                </div>     
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignupForm
