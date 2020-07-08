import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe("Testing Login Validation", () =>{
    let wrapper;
    let spyArray;
    // to suppress window.alert errors
    let jsdomAlert;

    beforeEach(() => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        wrapper = shallow(<LoginForm/>);
        spyArray = []
        wrapper.setProps({history: spyArray})
    })

    afterEach(() => {
        window.alert = jsdomAlert;
    })

    const simulateClick = () =>{
        wrapper.find('#loginBtn').simulate('click',{
            preventDefault: () => {}
        });
    }

    it("Test if login redirects if email and password valid", () => {
        wrapper.setState({
            emailInput: "adsadad@gmail.com",
            password: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual(["/notes"])
    });

    it("Test if login doesn't proceed if password length is less than 6", () =>{
        wrapper.setState({
            emailInput: "adsadad@gmail.com",
            password: "hello"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })

    it("Test if login doesn't proceed if email is invalid #1", () =>{
        wrapper.setState({
            emailInput: "adsadad@gmail",
            password: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })

    it("Test if login doesn't proceed if email is invalid #2", () =>{
        wrapper.setState({
            emailInput: "@gmail.com",
            password: "helloworld"
        })
        simulateClick();
        expect(spyArray).toEqual([])
    })
})