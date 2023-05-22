import React from 'react'
import banner from '../Images/banner.png'
import styles from './Homebanner.modules.css'
function Homebanner() {
  return (
    <div id='home'>
        <img src={banner} alt="" srcset="" />
        <h1>Healthy Eating is Not a Diet,<br /> It's a Lifestyle.</h1>
    </div>
  )
}

export default Homebanner