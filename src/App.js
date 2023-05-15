import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from "./components/productList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login";

function App() {
    return (
            <div className="App" >
                <h1 className="title">
                    PRODUCTOS DISPONIBLES
                </h1>
            </div>
    );
}

export default App;