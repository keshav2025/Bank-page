import React from 'react';
import img from '../assets/atmscard.png'; 
import  './body.css'
import img2 from '../assets/group.png'
export default function Body() {
  return (
    <div className=''>
    <div className="flex justify-end shadow-md  mt-22">
  
      <img src={img} alt="hmm" className=" atmhand w-1/2 h-1/3 " />
    </div>
<div className='bodyy'>


<img className='group' src={img2} alt="" />

<div className='text'>
<a href=""><p className='mb-6 text-lg md:text-xl text1 rounded-lg text-white bg-black p-2 inline-block transform -skew-x-9'>20% DISCOUNT FOR 1 MONTH ACCOUNT</p></a>

<p className='text-white py-3 text-7xl The-Next'> The Next </p>
<p className='text-teal-400 py-2 text-7xl The-Next'>Generation</p> 
<p className='text-white py-3 text-7xl The-Next'> Payment Method</p>

<div className='mt-10'>
<p className='text-white text-xl '>Our team of experts uses a methodology to </p> 
<p className='text-white text-xl' >
identify the credit cards most likely to fit your needs. </p>
<p className='text-white text-xl' > We examine annual percentage rates, annual fees.</p>
</div>
</div>

</div>


    </div>
  );
}
