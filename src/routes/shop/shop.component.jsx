import { useContext, Fragment } from "react";
import { CategoryContext } from "../../contexts/category.contexts";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categories[title].map((products) => (
                <ProductCard key={products.id} product={products} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
