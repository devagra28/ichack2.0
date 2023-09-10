import React from 'react'
import Navbar from "../components/Navbar";
import TracksCard from "../components/TrackCard";

function Track() {
  return (
    <div className='bg-[#e3ebfa]'>
        <Navbar />
        <div className='px-[5%] '>
            <div className='justify-center pb-[5%]'>
                <h1 className='text-6xl text-center text-transparent bg-clip-text bg-gradient-to-tl from-blue-950 to-blue-500 font-extrabold'>TRACKS</h1>
            </div>
            <TracksCard />
        </div>
    </div>
  )
}

export default Track