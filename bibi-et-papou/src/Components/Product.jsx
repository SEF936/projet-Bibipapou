
import "../styles/product.css"



const Product = ({name,imageUrl, sold_price, regular_price, created_at}) => {
  

    return (
    <div className="card-container">
            <img src={imageUrl} />
            <div className="infos-product-container" >
                <h2>{name}</h2>
            </div>
            <div className="price-container">
                <h4>{sold_price}</h4>
            <del>
                <h4>{regular_price}</h4>
            </del>
                <h4>Remise</h4>
            </div>

        <div className="button-cart-container">
            <button >Pay now</button>
            <button >Add to cart</button>
            {/* <p>Secured Payment Gateways</p> */}
        </div>
        <div >
               {created_at}
        </div>
     

    </div>
    )
   
}


export default Product;