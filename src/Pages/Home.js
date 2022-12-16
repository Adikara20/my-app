import React from 'react'
import Leftbar from '../Component/Leftbar/Leftbar'
import Maincontainers from '../Component/Maincontainers/Maincontainers'
import Rightbar from '../Component/Rightbar/Rightbar'
import "./home.css"

export default function Home() {
  return (
    <div className='mainContainerForHome'>
      <Leftbar/>
      <Maincontainers/>
      <Rightbar/>
    </div>
  )
}
