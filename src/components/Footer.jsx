import React from 'react'

const Footer = () =>  {
  return (
    <div>
        <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto text-center'>
          <div className='mb-4'>
            <h3 className='text-xl font-bold'>FoodDelivery</h3>
            <p className='text-sm'>The best food delivery to your door.</p>
          </div>
          <div className='mb-6'>
            <ul className='flex justify-center space-x-6'>
              <li><a href="" className='hover:text-yellow'></a>Home</li>
              <li> <a href="" className='hover:text-yellow'></a>Menu</li>
            </ul>
          </div>
          <div className='text-sm'>
            <p>&copy; 2025 FoodDelivery.All right reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
