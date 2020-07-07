import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Note.js</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
