import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import getAllProducts from '../api/productData';
import ProductCard from '../components/ProductCards';

function Home() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getProducts();
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {products.map((product) => (
        <ProductCard productObj={product} key={product.id} />
      ))}
    </div>
  );
}

export default Home;
