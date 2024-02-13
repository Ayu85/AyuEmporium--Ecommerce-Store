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
        <div className='flex flex-wrap  w-[60%] gap-3 bg-slate-400 px-3 py-3'>
            {/* all 4 images */}
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'> </div>
            <div className='w-[420px] animate-[pulse_0.5s_infinite] h-96 overflow-hidden cursor-pointer bg-slate-100'>  </div>
        </div>
        <div className='w-[40%] bg-slate-400 '>
            {/* product details */}
            <div className=' flex  flex-col gap-1  bg-slate-400 pb-5 pt-5 w-80'>
                <h1 className=' bg-slate-200 w-60 h-7 pl-10 animate-[pulse_0.5s_infinite]'></h1>
                <h1 className=' bg-slate-200 w-60 h-7 pl-10 animate-[pulse_0.5s_infinite]'></h1>
                <h1 className=' bg-slate-200 w-60 h-7 pl-10 animate-[pulse_0.5s_infinite]'></h1>
            </div>
            <div className='flex flex-col gap-2  pb-5 w-72 '>
                <div className=' flex items-center gap-4 mt-3'>
                    <h1 className='text-2xl font-bold text-[#282C3F] animate-[pulse_0.5s_infinite] uppercase w-52 h-5 bg-slate-200'></h1>
                    <h1 className='text-2xl font-bold text-[#282C3F]  animate-[pulse_0.5s_infinite] uppercase w-44 h-5 bg-slate-200'></h1>
                    <h1 className='text-2xl font-bold text-[#282C3F] animate-[pulse_0.5s_infinite] uppercase w-32 h-5 bg-slate-200'></h1>

                </div>
                <div className='flex items-center gap-4 mt-7 w-96'>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>
                    <h1 className=' w-32 aspect-square text-center bg-slate-600 border rounded-full'></h1>

                </div>
                <div className='flex gap-10 pt-5'>
                    <button className='flex items-center gap-4 text-md uppercase animate-[pulse_0.5s_infinite] bg-slate-500 w-64 h-9 text-slate-50 px-9 py-3'></button>
                    <button className='flex items-center gap-4 text-md uppercase animate-[pulse_0.5s_infinite] bg-slate-500 w-52 h-9 text-slate-50 px-9 py-3'></button>
                </div>

            </div>
        </div>
    </div>
}
export default Shimmer