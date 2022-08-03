import './directory-component.styles.scss';
import CategoryItem from '../category-item/category-item-component';

const Directory = ({category}) => {
return (
    <div className='directory-container'>
    {category.map((categories) => (
       <CategoryItem key ={categories.id} category ={categories} />
    ))}
      
    </div>
);


}
export default Directory;
