import React from "react"
import {Link} from "react-router-dom"

const header = {
    background : "#132126",
    padding: "10px",
    color: "white",
    textAlign: "center"
}

const links = {
    color: "#fff",
    textDecoration: "none"
}

function Header(){
    return(
        <header style={header}>
            <h1>TODO YA 3AM</h1>
            <Link style={links} to="/">Home</Link> | <Link style={links} to="/about">About</Link>
        </header>
    )
}

export default Header;