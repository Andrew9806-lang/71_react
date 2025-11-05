import { v4 } from "uuid";

import "./styles.css";
import { products } from "./data";
import Product from "../../components/Product/Product";

function Homework05() {
  const productsData = products.map((product, index, array) => {
    return (
      <div className="product-wrapper" key={v4()}>
        <div>{index + 1}</div>
        <Product
        productName = {product.name} 
        productPrice={product.price} />
      </div>
    );
  });
  return(
    <div className="homework05-wrapper">
        {productsData}
    </div>
  );
}
export default Homework05;
