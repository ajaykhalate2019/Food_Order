import React from 'react';
import Delivery from '../assets/Delivery-removebg.png';
import img1 from '../assets/img1.jpg';
import img from '../assets/img.jpg';
import pizza1 from '../assets/Pizaa-A.png'
import background from '../assets/background-zo.png';
import Footer from './Footer';
import CartCollection from './CartCollection';


const Home = () => {

  return (
    <div className="relative bg-gray-900 text-white h-screen">
      <div className="container mx-auto px-8 py-16 flex flex-col-reverse md:flex-row item-center h-full">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Express <span className="text-yellow-500">Home Delivery</span>
          </h1>
          <p className="text-gray-400 text-lg font-bold">
            Indulge in fresh, delicious meals made with care. Explore our menu
            and experience food that delights your taste buds and warms your
            heart!
          </p>
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-extrabold text-lg hover:bg-yellow-700">
            Read More
          </button>
        </div>
        <div className="flex-1">
          <img
            src={Delivery}
            className="w-full h-[30rem] object-cover md:w-[50rem] md:h-[40rem]"
            alt="Delivery"
          />
        </div>
      </div>

      <CartCollection />
      

      <div className='flex flex-col item-center justify-center min-h-screen bg-gray-50 p-4 '>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>Our Recommendation</h2>
        <h1 className='text-5xl font-extrabold text-yellow-600 mb-10'>Cafes & Restaurant</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl'>
          <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
            <img src= {img1} className='w-full h-full object-cover ' alt="" />
            <div className='absolute bottom-0 left-0 p-6 bd-white opacity-100 w-full '>
              <h3 className='text-3xl font-bold text-gray-800'>Burger House</h3>
              <p className='text-gray-600'>Monday - Friday</p>
              <p className='text-gray-600'>09:00 - 220:00</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
              <img src={img} alt="" className='w-full h-56 object-cover'/>
              <div className='p-4'>
                <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                <p className='text-gray-600'>Monday - Friday</p>
              <p className='text-gray-600'>09:00 - 220:00</p>
              </div>
            </div>

            <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
              <img src={img} alt="" className='w-full h-56 object-cover'/>
              <div className='p-4'>
                <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                <p className='text-gray-600'>Monday - Friday</p>
              <p className='text-gray-600'>09:00 - 220:00</p>
              </div>
            </div>

            <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
              <img src={img} alt="" className='w-full h-56 object-cover'/>
              <div className='p-4'>
                <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                <p className='text-gray-600'>Monday - Friday</p>
              <p className='text-gray-600'>09:00 - 220:00</p>
              </div>
            </div>

            <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
              <img src={img} alt="" className='w-full h-56 object-cover'/>
              <div className='p-4'>
                <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                <p className='text-gray-600'>Monday - Friday</p>
              <p className='text-gray-600'>09:00 - 220:00</p>
              </div>
            </div>
          </div>
        </div>

        <button className='mt-10  px-8 py-3 bg-yellow-600 text-white text-lg font-bold w-100 hover:bg-yellow-700' > View More</button>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between bg-yellow-500 text-white overflow-hidden'>
        <div className='relative'>
          <img src={pizza1} className='max-w-xl' alt="" />
        </div>
        <div className='max-w-full md:w-1/2 lg:max-w-1/2'>
              <h1 className='text-7xl font-extrabold leading-tighgt'>Always <br/> 
              <span className='text-black font-extrabold'>the Hottest <br/>Pizza  </span></h1>
              <p className='text-lg text-black mt-4'>
              Indulge in fresh, delicious meals made with care. Explore our menu
            and experience food that delights your taste buds and warms your
            heart!
              </p>
              <button className='bg-black text-white w-1/2 py-4 px-8 text-lg rounded-full shadow-lg'>Get Pizza</button>
        </div>
      </div>

      <section className='relative w-full h-[500px] bg-cover bg-center' 
      style={{ backgroundImage: `url(${background})`, 
      backgroundAttachment: "fixed" }}>
          <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 flex items-center justify-center h-full text-center text-white px-4'>
              <div>
                <h2 className='text-4xl font-bold mb-4'>Subscribe for Update</h2>
                <p className='text-xl mb-6'>Get the latest news, offers, and more directly to your inbox.</p>

                <div className='flex justify-center'> 
                  <input className='px-4 py-2 rounded-l-full text-white border-2 border-white' type="text" />
                  <button className='bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-full font-bold'>Subscribe</button>
                </div>
              </div>
            </div>

               
      </section>
     
     <Footer />

    </div>
  );
};

export default Home;
