import React from "react";
import Login from "../components/login";

var isLoggedIn = true;

function renderConditionally(){
   
    if (isLoggedIn === false){
        return <h1>Hello</h1>
    }else {
        return <form className="form">
                   <Login />
                </form>
    }
    
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
      </div>
    );
}

export default App;

