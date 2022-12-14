import ProductCard from '../../components/product-card/product-card.component';
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
      {
        product.filter((_,indx) => indx < 4)
        .map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))
      }
      </div>
    </div>
  );
};

export default CategoryPreview;
