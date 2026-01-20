import React from 'react'
import { ArrowRight } from 'lucide-react'
import CollectionsSection from '../Components/common/CollectionsSection'
const Home = ({api}) => {
    return (
        <div>
            <div className='h-[92vh] w-full  bg-[url("/src/assets/images/heroImage.png")] bg-top bg-cover flex items-center '>
                <div className='h-1/3 w-2/3  text-white pl-4 flex flex-col gap-4'>
                    <div className='text-[12px] text-[#ffffff] w-fit  uppercase backdrop-blur-xs bg-black/10  border border-[#6e581b] rounded-2xl  px-2'>Auttom collection 2026</div>
                    <h2 className=' text-5xl font-serif font-semibold'>Refined <br /><span className='font-normal italic'>Elegance</span></h2>
                    <p className='text-[12px]'>Discover the new standard of luxury with our curated
                        autumn essentials. Timeless pieces designed for the
                        modern connoisseur.
                    </p>
                    <div className=' flex gap-2'>
                        <button className=' bg-white shrink-0 text-black text-sm h-10 w-fit px-4 font-semibold'>SHOP NOW</button>
                        <button className=' border-white border shrink-0 text-white text-sm h-10 w-fit px-4 font-semibold'>VIEW LOOKBOOK</button>
                    </div>
                </div>

            </div>
            <div className=' h-200 w-full px-4 pt-20'>
                <div className='flex justify-between '>
                    <h1 className='text-xl font-serif'>Curated Collections</h1>
                    <a className='text-[16px] w-fit text-[#d4af37] flex' href="">VIEW ALL <ArrowRight size={24} strokeWidth={1} /></a>
                </div>
                <p className='text-[12px]'>Explore our finest categories selected for you.</p>
                <div>
<CollectionsSection api={api} />
                </div>
            </div>
        </div>
    )
}

export default Home
