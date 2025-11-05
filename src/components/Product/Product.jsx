

import "./style.css";


function Product({productName,productPrice}){
return(
    <div className="product-container">
<h3>{productName}</h3>
<p>{productPrice}</p>
    </div>
)
}
export default Product;