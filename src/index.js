import React from "react"
import ReactDOM from "react-dom";
import "./index.css"
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";


function App(){
    return(
        <div className="container">
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))