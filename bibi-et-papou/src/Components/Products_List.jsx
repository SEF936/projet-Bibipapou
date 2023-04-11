import Product from "./Product";
import "../styles/product_list.css"
import vetements from "../Datas/productsData";




const Product_List = ({vetements}) => {


    return (
<div className="container-product-list">
{vetements.map((e) => (
    <Product  {...e} key={e._id}/>
))}

</div>
    )
}
console.log(vetements);

export default Product_List;