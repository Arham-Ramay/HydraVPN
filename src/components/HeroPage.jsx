import React from 'react'
import background from "../assets/Frame 37345.png"
const HeroPage = () => {
   
  return (
    <div style={{backgroundImage:`url(${background})`}} className='bg-[#101828] w-full h-min-screen pt-16 pb-16 font-Soliden Trial'>
        <div className="container mx-auto" >
           <div className='text-center'>
           <p className='text-white text-5xl font-bold '>Customized VPN<span className='text-[#2448D0]'> Solutions for You</span> </p>
           <p className='text-base text-white pt-2'>Discover Ideal Plans: Tailored VPN Pricing for Every Need.</p>
           </div>
           <div className='container mt-10 mx-auto'>
            <div className='flex justify-center gap-5 flex-wrap items-center'>
                {/* card no 1 */}
                <div className='border-2 border-[#1D2939] p-6 text-center rounded-lg bg-[#101828] text-white'>
                <div className='flex justify-around items-center pb-4'>
                    <p className='font-semibold'>12 months</p>
                    <input type='radio' />
                </div>
                <p className='text-1xl font-medium pb-4'>USD <span className='text-2xl font-bold'>6.49</span>/mo</p>
                <button className='bg-gray-500 rounded-2xl text-xs p-2 mb-3'>save 69%</button>
                <p className='text-xs'>Billed $59.76 for the first 24 months,<br/> then $59.76 every 12 months</p>
                </div>
                {/* card no 2 */}
                <div className='border-2 border-[#3858d4] p-6 text-center rounded-lg bg-[#101828] text-white'>
                <div className='flex justify-around items-center pb-4'>
                    <p className='font-semibold'>24 months</p>
                    <input type='radio' checked/>
                </div>
                <p className='text-1xl font-medium pb-4'>USD <span className='text-2xl font-bold'>2.49</span>/mo</p>
                <button className='bg-[#FE405C] rounded-2xl text-xs p-2 mb-3'>save 69%</button>
                <p className='text-xs'>Billed $59.76 for the first 24 months,<br/> then $59.76 every 12 months</p>
                </div>
                {/* card no 3 */}
                <div className='border-2 border-[#1D2939] p-6 text-center rounded-lg bg-[#101828] text-white'>
                <div className='flex justify-around items-center pb-4'>
                    <p className='font-semibold'>36 months</p>
                    <input type='radio'/>
                </div>
                <p className='text-1xl font-medium pb-4'>USD <span className='text-2xl font-bold'>6.49</span>/mo</p>
                <button className='bg-gray-500 rounded-2xl text-xs p-2 mb-3'>save 69%</button>
                <p className='text-xs'>Billed $59.76 for the first 24 months,<br/> then $59.76 every 12 months</p>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default HeroPage