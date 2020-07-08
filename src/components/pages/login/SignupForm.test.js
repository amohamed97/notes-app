import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';

describe("Testing Signup Validation", () =>{
    let wrapper;
    let spyArray;
    // to suppress window.alert errors
    let jsdomAlert;

    beforeEach(() => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        wrapper = shallow(<SignupForm/>);
        spyArray = []
        wrapper.setProps({history: spyArray})
    })

    afterEach(() => {
        window.alert = jsdomAlert;
    })

    const simulateClick = () =>{
        wrapper.find('#signupBtn').simulate('click',{
            preventDefault: () => {}
        });
    }

    it("Test if signup proceeds if email and passwords are valid", () => {
        wrapper.setState({
            emailInput: "adsadad@gmail.com",
            password: "helloworld",
            passwordConfirm: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual(["/notes"])
    });

    it("Test if signup doesn't proceed if password length is less than 6", () =>{
        wrapper.setState({
            emailInput: "adsadad@gmail.com",
            password: "hello",
            passwordConfirm: "hello"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })

    it("Test if signup doesn't proceed if email is invalid #1", () =>{
        wrapper.setState({
            emailInput: "adsadad@gmail",
            password: "helloworld",
            passwordConfirm: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })

    it("Test if signup doesn't proceed if email is invalid #2", () =>{
        wrapper.setState({
            emailInput: "@gmail.com",
            password: "helloworld",
            passwordConfirm: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })

    it("Test if signup doesn't proceed if passwords don't match", () =>{
        wrapper.setState({
            emailInput: "user@gmail.com",
            password: "helloworld",
            passwordConfirm: "hakunamatata"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })
})