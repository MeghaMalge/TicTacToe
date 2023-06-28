import React from 'react'

export const Player = ({playerId, activePlayer, score}) => {
  return (
    <div className={`flex flex-col items-center xl:justify-center gap-11 bg-${playerId === "x" ? "blue" : "red"}-300 w-1/2 h-screen`}>
        <span className='text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6'>Player {playerId === "x" ? 1: 2}</span>
        <span className='md:-ml-10 lg:-ml-20 text-lg font-bold'>Score: <span className='text-3xl md:text-7xl font-extrabold'> {score} </span> </span>
    </div>
  )
}
