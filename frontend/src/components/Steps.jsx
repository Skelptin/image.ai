import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
    return (
        <div className='flex flex-col items-center justify-center my-32'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
            <p className='text-lg text-gray-600 mb-8'>
                Transform Words Into Stunning Images
            </p>

            <div className='space-y-4 w-full max-w-3xl text-sm  '>
                {
                    stepsData && stepsData.map((item, index) => (
                        <div key={index}
                            className='flex items-center gap-4 p-5 px-8 bg-white/20
                        shadow-md border rounded-lg cursor-pointer hover:scale-[1.02] transition-all duraiton-300'>
                            <img w={40} src={item.icon} alt="" />
                            <div>
                                <h2 className='etxt-xl font-medium'>
                                    {item.title}
                                </h2>
                                <p className='text-gray-500'>"{item.description}"</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Steps