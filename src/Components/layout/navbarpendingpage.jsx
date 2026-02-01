import React from 'react'
import { useParams ,Link} from 'react-router-dom';


const Navbarpendingpage = () => {
    const { id } = useParams();
  return (
    <div className='h-screen w-full flex justify-center flex-col  gap-2 items-center'>
    <h1>Working in progress /......\ </h1> 
      <h1>{id}</h1>

      <Link className=' bg-red-500 px-2 py-1 rounded text-white' to="/"> BACK TO HOME</Link>


    </div>
  )
}

export default Navbarpendingpage
