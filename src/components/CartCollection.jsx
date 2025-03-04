import products from '../Models/db.json';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


const CartCollection = ({addToCart}) => {
    const[selectedCategory,setSelectedCategory] = useState("FastFood")

  const filterProduct = products.filter(
    (product) => product.category === selectedCategory);

  return (
    <div>
       <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-sm text-yellow-500 uppercase font-bold">
            Quick pick
          </h3>
          <h2 className="text-4xl font-extrabold mt-2 text-yellow-600">
            Popular Goods
          </h2>
          <div className="flex justify-center space-x-8 mt-6">
            <button className="text-yellow-500 font-bold border-b-2"
              onClick={() => setSelectedCategory('FastFood')}>
              Fast Food
            </button>
            <button className="text-yellow-500 font-bold border-b-2"
            onClick={() => setSelectedCategory('HotPizza')}>
              Hot Pizza
            </button>
            <button className="text-yellow-500 font-bold border-b-2"
            onClick={() => setSelectedCategory('AsianFood')}>
              Asian Food
            </button>
            <button className="text-yellow-500 font-bold border-b-2"
            onClick={() => setSelectedCategory('RawMeat')}>
              Raw Meat
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8">
          {filterProduct.map((product) => (
            <div key={product.id} className="bg-gray-300 p-6 rounded-lg shadow-lg">
              <img
                src={product.image}
                className="w-full h-40 object-cover mb-4 rounded-lg"
                alt={product.name}
              />
              <h4 className="text-lg font-bold text-black">{product.name}</h4>
              {product.rating && (
                <p className="text-yellow-500">
                  {'⭐'.repeat(product.rating) + '✰'.repeat(5 - product.rating)}
                </p>
              )}
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              <p className="text-lg font-extrabold text-gray-800 mt-2">
                {product.price}
              </p>
             
              <button className="bg-yellow-500 text-gray-900 px-4 py-2 mt-4 rounded-lg font-bold hover:bg-yellow-700"
              onClick={() => addToCart(product)}>
                 Add to cart </button>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CartCollection;