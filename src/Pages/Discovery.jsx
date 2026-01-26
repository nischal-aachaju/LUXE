import React, { useContext } from 'react'
import { ApiDataContext } from '../Context/ContextApi'
import DiscoveryComponent from './DiscoveryComponent'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const Discovery = () => {
  const data = useContext(ApiDataContext)

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-20 pb-16'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-2 mb-3'>
            <Sparkles size={20} className='text-amber-500' />
            <span className='text-sm font-semibold uppercase tracking-widest text-amber-600'>
              Explore Our Collection
            </span>
            <Sparkles size={20} className='text-amber-500' />
          </div>
          <h1 className='font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4'>
            Discover Premium Products
          </h1>
          <p className='text-gray-500 max-w-2xl mx-auto text-sm md:text-base'>
            Curated selection of the finest products crafted for those who appreciate quality and elegance
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
          {data.map((elem) => (
            <Link key={elem.id} to={`/products/${elem.id}`} className='flex justify-center'>
              <DiscoveryComponent elem={elem} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discovery
