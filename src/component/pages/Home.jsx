import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import Product from '../Product';

const Home = () => {
  const API_URL = `https://fakestoreapi.com/products`;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts(){
    try {
      setLoading(true);
      const result = await fetch(API_URL);
      // console.log(result);
      const products = await result.json();
      setProducts(products);
      setLoading(false);
    } catch(err) {
      console.log(`Error while Fetching Products ${err}`);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <div className='m-10'>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((prod) => (
            <Product key={prod.id} items={prod} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Product Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;