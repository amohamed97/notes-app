import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div className="mb-4">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <span className="navbar-brand" href="#">Note.js</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
