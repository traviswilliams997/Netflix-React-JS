import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
     className='w-full h-[400px] object-cover'
     src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/a144dbbf-a5a1-49bc-a20e-3f8e7258f988/JM-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"  
     alt='/'
     />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account