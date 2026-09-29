import React from 'react'
import { TimelinePro } from '@/components/timeline';



const Process = () => { 
  return (
    <main>
        <div className='flex flex-col items-center'>
            <h1 className="text-[24px] text-[#258DED] font-bold">SEE MY PROCESS & WORK BELOW</h1>

            <h1 className="text-[36px] text-black font-bold bg-gradient-to-r from-black/70 to-[#868686] bg-clip-text text-transparent mt-15">UX Process</h1>
            <p className="text-[20px] mt-1 max-w-4xl text-center text-[#656565] leading-[1.2]">
                Focusing on figuring out the right problem to solve is the core of my UX process. I always aim to focus on a user-centric approach through iterative sprints to deliver solutions that address both user needs and business goals. With a knack for innovating within constraints, I seamlessly adapt the UX process when the user needs calls for it.
            </p>

            <TimelinePro />
            <div className='flex flex-col items-center mt-100'>

            </div>

        </div>
    
    </main>
  )
}

export default Process


