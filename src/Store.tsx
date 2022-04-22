import "./Store.css"
import Product from "./interfaces"
import {Component} from "react"
// эта функция отрисовывает из переданного ей объекта товары ввиде карточек

class Store extends Component<{className : string, products : Array<Product>, addProduct : (arg0:Product) => void}, {products : Product[]}> {
    constructor(props : any) {
        super(props);
        this.state = {products: props.products};
        
    }
    addProduct(index : number) : () => void{
        let id : number= index
        return () => {

            this.props.addProduct(this.state.products[id])
        }
    }

    render(){
        let toRender : Array<JSX.Element> = [];  
        this.state.products.forEach((product : Product, index : number) => {
    
            if (product.name.length > 12 ) return // чтобы имя всегда влезало на строку
            
            toRender.push(
            <div key={index} className="productBody">
                <h2 className="name">{product.name} </h2>
                <h2 className="price">{product.price + " $"}</h2>
                <button className="buyButton" onClick={this.addProduct(index)}>Купить</button>
                <img  className="productImg" src={product.img}/>
            </div>)
        })
       
        return(<div className={this.props.className}>{toRender}</div>);
    }
}
export default Store;

