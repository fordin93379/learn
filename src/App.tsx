import Header from './Header';
import './App.css';
import SideBar from './SideBar';
import Store from './Store';
import products from './products';
function App() : JSX.Element{
  return (
    <div className="App">
      <Header></Header>
      <Store className="Store" products={products}></Store>
    </div>
  );
}

export default App;
