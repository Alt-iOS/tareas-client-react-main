import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/productList'

function App() {
    return (
        <div className="App" >
            <h1>
                Lista de Productos disponibles
            </h1>

            <ProductList />
        </div>
    );
}

export default App;