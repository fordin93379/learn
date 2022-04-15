import products from "./products";
import "./Store.css"
// эта функция отрисовывает из переданного ей объекта товары ввиде карточек
function Store(props : any) : JSX.Element {
    let stylesOfBody = {
        width:"200px",
        height:"350px",
        border: "3px solid lightgrey",
        display: "inline-block",
        borderRadius: "10px",
        margin: "10px"
    }
    let stylesOfImg = {
        width:"200px",
        height:"243px",
    }
    let stylesOfTitle = {
        width:"200px",
        height:"50px",
        margin: "0px",
        textAlign: 'center' as 'center'
    }
    let stylesOfButton = {
        width:"200px",
        height:"50px",
        fontSize: "40px",
        backgroundColor: "lightgreen",
        border: "0px solid",
        borderRadius: "10px",
    }



    let toRender : Array<JSX.Element> = [];  
    products.forEach(product => {
        toRender.push(<div key={product.id} style={stylesOfBody}>
            <h2 style={stylesOfTitle}>{product.name + " " + product.price + "$"}</h2>
            <button style={stylesOfButton}>Купить</button>
            <img style={stylesOfImg} src={product.img}/>
        
        </div>)
    })
   
    return(<div className={props.className}>{toRender}</div>);
}
export default Store;