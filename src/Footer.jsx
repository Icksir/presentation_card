import React from "react";
import facebook from "./assets/square-facebook.svg"
import ig from "./assets/square-instagram.svg"
import twitter from "./assets/square-twitter.svg"

export default function Footer(){
    return(
        <div className="footer">
            <a href="#" className="footer-tw"><img src={twitter}></img></a>
            <a href="#" className="footer-fb"><img src={facebook}></img></a>
            <a href="#" className="footer-ig"><img src={ig}></img></a>
        </div>
    )
}