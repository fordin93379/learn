import "./CartWindow.css"
import "./Cart.css"
import Product from "./interfaces"
import {Component} from "react"
let isOpen : boolean = false;


interface Props {
    products : Array<Product>;
}

class Cart extends Component<Props, {products: Array<Product>}> {
    constructor(props : any){
        super(props);
        this.state = {products : props.products}
    }
    addProduct(product : Product){
        let newArray : Array<Product> = this.state.products
        newArray.push(product)
        this.setState({products: newArray});
    }
    // УРА! Смог сделать через state, надеюсь хоть тут не костылей!))))
    funcGenerator(elementId: string) :  () => void {
        return () => {
            let id = elementId;
            let arrayToSplice : Array<Product> = this.state.products
            arrayToSplice.splice(parseInt(id), 1)
            this.setState({products: arrayToSplice});
        }
    }

    render() : JSX.Element{
    
    let toRender : Array<JSX.Element> = [];
    // className d для добавления всем элементам display: inline-block;
    
    this.state.products.forEach((product : Product, index : number) => {
        toRender.push(<div className='cartItem' id={index.toString()}>
            <img className='cartItemImage d' src={product.img}/>
            <h2 className='cartItemName d'>{product.name}</h2>
            <h2 className='cartItemPrice d'>{product.price} $</h2>
            <button className='cancelButton' onClick={this.funcGenerator(index.toString()).bind(this)}>x</button>
        </div>)
    })




    return <div className="cart">
                <div id='cartWindow' className='cartWindow'>
            <h1 className='cartHeader'>Ваши Товары</h1>
            <div className="windowOfProducts">
                <button className='payButton'>Оплатить</button>
                <div className='productList'>
                    {toRender}
                </div>
            </div>
        
        </div>
    </div>;
    }
}


export default Cart