import "./navbar.css"
const CartWidget = () =>{

    return(
        <div className="d-flex">

            <img id="cartIcon" src="./icons/cart.png" alt="" />
            <p className="d-flex" id="number">1</p>

        </div>
    )
}

export default CartWidget