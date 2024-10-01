import ProductCard from '../productCard/productCard.component'

import './menu.styles.scss'

const Menu = ({ categories }) => {
  //console.log(categories)
  return (
    <div className='menu-container'>
      {categories.map((category) => (
        <ProductCard key={category.id} category={category} />
      ))};
    </div>
  );
};
export default Menu;