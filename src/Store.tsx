import "./Store.css"
import Product from "./interfaces"

// эта функция отрисовывает из переданного ей объекта товары ввиде карточек
function Store(props : any) : JSX.Element {
   // if (typeof props.products === "Product"){return <h1>TYPE ERROR</h1>}

    let toRender : Array<JSX.Element> = [];  
    props.products.forEach((product : Product) => {

        if (product.name.length > 12 ) return // чтобы имя всегда влезало на строку
        
        toRender.push(<div key={product.id} className="productBody">
            <h2 className="name">{product.name} </h2>
            <h2 className="price">{product.price + " $"}</h2>
            <button className="buyButton">Купить</button>
            <img className="productImg" src={product.img}/>
        
        </div>)
    })
   
    return(<div className={props.className}>{toRender}</div>);
}
export default Store;