import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/login";
import React from "react";

function App() {
    return (
        <div className="App" >
            <h1 className="title">
                SISTEMA DE INVENTARIO
            </h1>
            <Login />
        </div>
    );
}

export default App;