import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./components/login";
import ProductList from "./components/productList";

function App() {
    return (
            <div className="App" >
                <h1 className="title">
                    PRODUCTOS DISPONIBLES
                </h1>
                <Login />
            </div>
    );
}

export default App;