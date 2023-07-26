import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import getAllProducts from '../api/productData';
import ProductCard from '../components/ProductCards';

function Home() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    getAllProducts().then((productArray) => {
      const slicedProducts = productArray.slice(0, 20);
      setProducts(slicedProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, [user]);

  return (
    <div
      className="my-2 d-flex justify-content-center flex-wrap"
    >
      {products.map((product) => (
        <ProductCard productObj={product} key={product.id} />
      ))}
    </div>
  );
}

export default Home;
