import React, { useEffect, useState } from 'react';
import getAllCategories from '../../api/categoryData';
import CategoryCard from '../../components/CategoryCard';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mt-3">
      {categories.map((category) => (
        <div key={category.id}>
          <h5>
            {category.label} - {category.product_count} products
          </h5>
          {category.products.slice(0, 3).map((product) => (
            <CategoryCard key={product.id} productObj={product} />
          ))}
        </div>
      ))}
    </div>
  );
}
