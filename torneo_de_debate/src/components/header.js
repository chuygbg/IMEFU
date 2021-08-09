import React from "react"
import logo from "../images/LogoBlanco.png"

function Header(){
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logo} style={{width:"10em", margin:"0.5em"}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" onClick={Login()}>Login</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
        <div id="here"></div>

        </React.Fragment>
    )



}

function Login(){
   document.createElement("div").innerHTML="<h1>Works</h1>"
}


export default Header