import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>
      <div className='text-white text-5xl p-5 mt-20 ml-28'>
        3800+
        <span className='text-2xl text-teal-500  p-5'>User Active</span> |
        230+
        <span className='text-2xl text-teal-500 p-5' >TRUSTED BY COMPANY</span> |
        $230M+
        <span className='text-2xl text-teal-500 p-5'>TRANSACTION</span>
      </div>

      <div className="aboutt text-white text-7xl mt-28 ml-28">

        <p className='p-2'>You do the business,</p>
        <p className='p-2'>we’ll handle the money.</p>
        <p className='text-xl p-1 ml-4  text-gray-500'>With the right credit card, you can improve your financial life by </p> <p className='text-xl  p-1 ml-4  text-gray-500 '> building credit, earning rewards and saving money. But with  </p>     <p className='text-xl  p-1 ml-4 text-gray-500' >hundreds of credit cards on the market.</p>
      </div>
      <div className="section  flex justify-end mb-64 mr-28">
        <div className="frist  ">
          <p className='text-white text-2xl'>Rewards</p>
          <p className=' text-gray-500 mt-2'>The best credit cards offer some  tantalizing </p>  <p className=' text-gray-500'> combinations of promotions and prizes</p>
        </div>

      </div>

      <div className=" section2 ">
        <p className='frist text-white text-2xl'>100% Secured</p>
        <p className=' text-gray-500 mt-2'>We take proactive steps make sure your . </p>  <p className=' text-gray-500'> cinformation and transactions are secure</p>
      </div>
      <div className="section3 ">
        <p className='frist text-white text-2xl'>Balance Transfer</p>
        <p className=' text-gray-500 mt-2'>A balance transfer credit card can save  </p>  <p className=' text-gray-500'> you a lot of money in interest charges.</p>
      </div>
      <div className="button bg-teal-300 inline ml-36 p-5  ">
        <button>Get Started</button>
      </div>


    </div>
  )
}
