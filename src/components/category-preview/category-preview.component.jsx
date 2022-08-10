import "./category-preview.styles.scss";

const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
      
      </div>
    </div>
  );
};

export default CategoryPreview;
