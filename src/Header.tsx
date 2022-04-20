import "./Header.css"
import urls from "./urls"
import Cart from "./Cart"
import products from "./products"
function Header() : JSX.Element {
    let pos : number = Math.floor( Math.random() * urls.length )

    return(
        <div id="header" className="header">
            <img src={urls[pos]} className="socksLogo"/>
            <h1 className="socksTitle">У нас носки как от бабушки!</h1>
            <Cart products={products}></Cart>

        </div>
    );
}
export default Header;