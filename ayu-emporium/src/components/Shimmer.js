import { Header2 } from "./Header"

const Shimmer = () => {
    return (
        <div>
            <Header2 />
            <ShimmerCard />
        </div>
    )
}
const ShimmerCard = () => {

    return <div className='flex flex-wrap px-5 pt-10'>
        <div className='flex flex-wrap w-[60%] gap-3 bg-slate-400 px-3 py-3'>
            {/* all 4 images */}
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'>  </div>
        </div>
        <div className='w-[40%]'>
            {/* product details */}
            <div className=' flex flex-col gap-1 border-b bg-slate-200 pb-5 w-80'>
                <h1 className=' bg-[#282C3F] w-60 h-7'></h1>
                <h1 className='bg-[#282C3F]  w-60 h-7'></h1>
                <h1 className=' bg-[#282C3F]  w-60 h-7'></h1>
            </div>

            <div className='flex flex-col gap-2 border-b bg-slate-200 pb-5 w-72 '>
                <div className=' flex items-center gap-4 mt-3'>
                    <h1 className='text-2xl font-bold text-[#282C3F] uppercase'></h1>
                    <h1 className='text-[#757884] text-xl font-sans line-clamp-2 line-through'></h1>
                    <h1 className=' text-xl text-[#FFB71B] font-semibold'></h1>
                </div>
                <h1 className='text-[#03A685] font-semibold'></h1>
                <h1 className='text-lg font-bold mt-3'></h1>
                <div className='flex items-center gap-4'>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>32</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>36</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>38</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>40</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>44</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>46</h1>
                </div>
                <div className='flex gap-10 pt-5'>
                    <button className='flex items-center gap-4 text-md uppercase bg-[#1C161A] text-slate-50 px-9 py-3'></button>
                    <button className='flex items-center gap-4 text-md uppercase border-slate-400 border  px-7 py-3'></button>
                </div>

            </div>
            <div className='flex flex-col gap-2 font-sans pt-4'>
                {

                }
            </div>


        </div>
    </div>
}
export default Shimmer