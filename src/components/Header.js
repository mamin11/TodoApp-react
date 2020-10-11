import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
                <h4>
                    REACT APP
                </h4>
                <ul>
                    <li className="link-style">
                        <Link className="link-item"  to="/">Home</Link>                         
                    </li>
                    <li className="link-style">
                        <Link className="link-item"  to="/about">About</Link>
                    </li>
                
                
                </ul>
            </header>                
            </div>
        )
    }
}
