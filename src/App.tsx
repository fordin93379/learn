import Header from './Header';
import './App.css';
import Store from './Store';
import products from './products';
import { Component} from 'react';
import Product from './interfaces';
import Cart from "./Cart"
class App extends Component<{}, {products:Array<Product>}> {

  constructor(props : any){
    super(props);
    this.state = {products: []}

  }

  addProduct = (product : Product) => {
    
    let newArray : Array<Product> = this.state.products
    newArray.push(product)
    this.setState({products: newArray})
 
  }
  render() {return (
      <div className="App">
        <Header products={this.state.products}></Header>
        <Cart products={this.state.products}></Cart>
        <Store addProduct={this.addProduct} className="Store" products={products}></Store>
      </div>
    )
  }
}

export default App;
