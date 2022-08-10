import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";

class Portafolio extends React.Component{
    render() {
        return (
            <>
            <Preloader/>
            <div id="portafolio" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Portafolio</h1>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus dolor eos dicta reprehenderit illo neque reiciendis. In molestias non vel iste fugiat assumenda possimus corrupti.</span>
                    </div>
                </div>
            </div>
            <Navbar/>
            <Footer/>
            </>
        )
    }
}

export default Portafolio;