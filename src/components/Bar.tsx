"use client";

import React from 'react'
import {  bars} from '../helpers/bars'

export const Bar = () => {
    return (
        <div className='w-full pt-10 pb-8 bg-gray-900'>
               <div className="relative max-w-[1280px] mx-auto w-full bg-gray-900 px-2 py-2 ">
                <div className="relative flex items-center justify-between">
                        {bars.map((bar) => {
                            return (
                                <div key={bar.id} className="flex items-center">
                                    <div className={bar.className} >
                                        <bar.icon size={20} />
                                    </div>
                                    <div className='ml-2 hidden lg:block'>
                                        <div className="text-sm text-white"> {bar.name}</div>
                                    </div>
                                    {bar.id <=3 ? ( <div className="ml-4 w-16 h-px bg-[#0037C1]"></div>) : ( <div className="w-16 h-px bg-[#2A2A2A]"></div>)}
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}