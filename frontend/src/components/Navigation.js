import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../static/pinterest_logo.svg'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link className="navbar-brand font-weight-bolder mr-3" to="/"><img src="https://business.pinterest.com/profiles/contrib/pin/logo.svg?dpid=5922e8c52f4f83763ec5e0d19f9d994d" alt="Logo"/></Link>
                <Link className="nav-link" to="/"> Inicio </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto align-items-center">
                        <form className="bd-search hidden-sm-down" action="">
                            <input type="text" className="form-control bg-graylight border-0 font-weight-bold round-input" placeholder="Buscar"/>
                        </form>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to="/test">Test</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/signin">Sign in</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/exit">Exit</Link></li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}
