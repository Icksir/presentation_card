import React from "react";
import About from "../src/About";
import Footer from "../src/Footer";
import Info from "../src/Info";
import Interest from "../src/Interest";

export default function App(){
    return(
        <div className="flex-container">
            <div className="card">
                <Info />
                <About />
                <Interest />
                <Footer />
            </div>
        </div>
    )
}