import React, { useContext } from 'react'
import CollectionsSection from '../Components/common/CollectionsSection'
import { ApiDataContext } from '../Context/ContextApi'
import DiscoveryComponent from './DiscoveryComponent'

const Discovery = () => {
   const data= useContext(ApiDataContext)
//    console.log(data);
    
  return (
    <div className='my-20 w-full   h-fit md:pb-20 flex flex-wrap gap-2 sm:gap-10 md:gap-20  justify-center'>
      {data.map((elem,idx)=>{
        
        return <DiscoveryComponent key={idx} elem={elem}  />
      })}
      
       {/* <DiscoveryComponent  elem={data[3]}  /> */}
        
    
    </div>
  )
}

export default Discovery
