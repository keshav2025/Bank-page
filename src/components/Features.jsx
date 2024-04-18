import React from 'react'
import img5 from '../assets/paypal.png';
import img6 from '../assets/transaction.png'
import playstore from '../assets/playstore.svg'
import applestore from '../assets/applelogo.png'
import elips from '../assets/Ellipse.png'
import bigelips from '../assets/bigelips.png'
import smallelips from '../assets/verysmall.png'
import graph from '../assets/graph.png'
import graphh from '../assets/scan.png'
import graphhh from '../assets/paymethod.png'

import './Features.css'
export default function Features() {
  return (
    <div className=' '>
      <div>
        <img className='mt-64 imggggg ml-96' src={img5} alt="" />
        <img className='ml-24 imggg  ' src={img6} alt="" />
      </div>
      <div className=''>
        <p className='text-white flex justify-end mr-64 text-5xl  text11 '>Easily control your </p>
        <p className='text-white flex justify-end mr-64 text-5xl  text12'> billing & invoicing.</p>
        <p className='text-gray-400 mr-64 mt-5 flex justify-end  '>Elit enim sed massa etiam. Mauris eu adipiscing  </p> <p className='text-gray-400 mr-64  flex justify-end '> ultrices  ametodio aenean neque. Fusce ipsum orci </p> <p className='text-gray-400 mr-64  flex justify-end '> rhoncus aliporttitor integer platea placerat.</p>


        <div className=' mr-64  mt-5  flex justify-end' >
          <img className='w-28 mr-10' src={applestore} alt="" />
          <img className='w-28 mr-10' src={playstore} alt="" />
        </div>

        <div className="text3page text-5xl text-white mt-64 ml-28 ">
          <p className='p-2'>Find a better card deal </p>
          <p className='p-1'> in few easy steps.</p>


        </div>
        <div className='text-gray-400 ml-28 mt-5'>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet  </p>  <p> quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

        </div>
        <div className="button ml-28 bg-teal-300 p-4 ">
          <button>Get Started</button>
        </div>
        <div className="rightside flex  mb-64 justify-end">
          <img className='ringss' src={elips} alt="" />

        </div>
        <img className='bigring' src={bigelips} alt="" />
        <img className='smallring' src={smallelips} alt="" />
       
        <div className='flex justify-end mb-64'>

       
        <img src={graph} className='firstt' alt="" />
        <img src={graphh} className='firsttt' alt="" />
        <img src={graphhh} className='firstttt' alt="" />
        </div>
       

        
      </div>
    </div>
  )
}
