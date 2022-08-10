import { useContext } from "react";
import { CategoryContext } from "../../contexts/category.contexts";
import CategoryPreview from '../../components/category-preview/category-preview.component'
import "./shop.styles.scss";
const Shop = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} product={products}/>
        );
      })}
    </div>
  );
};

export default Shop;
