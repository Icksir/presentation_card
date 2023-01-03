import React from "react"
import foto from "./assets/yo.jpeg";
import email from "./assets/email-logo.svg"
import linkedin from "./assets/linkedin.svg"

export default function Info() {
  return (
    <div className="info">
      <img src={foto} className="foto"></img>
      <h1>Ricardo Olalquiaga</h1>
      <h3>Computer Science Student</h3>
      <a className="info-link" href="https://github.com/Icksir">Página de GitHub</a>
      <div className="info-buttons">
        <form action="#">
          <button type="submit" className="info-email"><img src={email} className="info-email-logo"></img>Email</button>
        </form>
        <form action="#">
          <button type="submit" className="info-linkedin"><img src={linkedin} className="info-linkedin-logo"></img>LinkedIn</button>
        </form>
      </div>
    </div>
  )
}