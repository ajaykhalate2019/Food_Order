import React, { useState } from 'react';

const Menu = (addToCart) => {
  const categories=['All','FastFood','Drinks','Desserts']
  const allItem = [
    {
      id: 1,
      name: 'Cheeseburger with Salad',
      price: '$19.00',
      description: 'This is product description',
      image: "Cheeseburger.jpg",
      rating: 5,
      category: 'All',
    },
    {
      id: 2,
      name: 'Cheeseburger with Salad',
      price: '$19.00',
      description: 'This is product description',
      image: "Cheeseburger.jpg",
      rating: 5,
      category: 'All',
    }
  ]
  const[activeCategory,setActiveCategory]=useState("All")
  const[currentPage,setCurrentPage] = useState(1)
  const itemsPerPage=3;

  const filterItems =
    activeCategory === 'All' 
    ? allItem : allItem.filter((item) => item.category === activeCategory)
     
   const totalPages=Math.ceil(filterItems.length / itemsPerPage)
   const paginatedItems=filterItems.slice((currentPage - 10) * itemsPerPage,currentPage * itemsPerPage)

  const handleCat= (category) => {
        setActiveCategory(category)
        setCurrentPage(1)
  }

  return (
    <>
      <div className='flex h-screen bg-gray-100'>
        <div className='w-1/4 bg-white shadow-lg h-full fixed'>
          <h2 className='text-xl font-bold p-4 border-b'>Categories</h2>
          <ul>
            {categories.map((category) =>{
              <li key={category} className={`cursor-pointer p-2 rounded-md ${activeCategory === category ? "bg-yellow-500 text-white" : "hover:bg-gray-200"}`}
              onClick={() => handleCat(category)}
              >{category}</li>
            })}
          </ul>
        </div>

        <div className='ml-[25%] w-[75%] p-8 overflow-auto'>
          <h2 className='text-2xl font-bold mb-4'>{activeCategory}  Menu Items</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                {paginatedItems.map((item) =>{
                  <div className='bg-gray-200 p-4' key={item.id }>
                    <img src={item.image} className="w-full h-40 object-cover mb-4" alt={item.name}/>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                    <p className="text-md font-bold mt-2">{item.price}</p>
                    <p className="text-yellow-500">
                       {'⭐'.repeat(item.rating)}{" "}
                      <span>{'✰'.repeat(5 - item.rating)}</span>
                       </p>
                    <button className="bg-yellow-500 text-gray-900 px-4 py-2 mt-4 font-bold"
                    
                    onClick={() => addToCart(item)}>Add to cart </button> 
                  </div>
                })}
          </div>

          <div className='flex justify-center mt-6'>
            {Array.from({length:totalPages},(_,index) => (
              <button key={index} className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? "bg-yellow-500 text-white" : "bg-white hover:bg-gray-200"}`}
              onClick={() => setCurrentPage(index + 1)}
              >{index+1}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
