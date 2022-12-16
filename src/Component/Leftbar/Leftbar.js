import React from 'react'
import "./leftbar.css"
import browse from "../../Icons/explore.png"
import watchlist from "../../Icons/heart.png"
import commingsoon from "../../Icons/calendar.png"

export default function Leftbar() {
  return (
    <div className='leftbarMainContainer'>
      <h2 className='logoname'>
        AnimePedia
      </h2>
      <div>
        <p className='menu'>Menu</p>
        <ul>
          <li>
            <img src={`${browse}`} className='listicons' alt=''/>
            <p className='liListName'>Browse</p>
          </li>
          <li>
            <img src={`${watchlist}`} className='listicons' alt=''/>
            <p className='liListName'>Watchlist</p>
          </li>
          <li>
            <img src={`${commingsoon}`} className='listicons' alt=''/>
            <p className='liListName'>Coming soon</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
