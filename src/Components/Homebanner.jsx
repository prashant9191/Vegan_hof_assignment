import React from 'react'
import banner from '../Images/banner.png'
import styles from './Homebanner.module.css'
function Homebanner() {
  return (
    <div id={styles.home}>
        <img src={banner} alt="banner"/>
        <h1>Healthy Eating is <br /> Not a Diet,<br /> It's a Lifestyle.</h1>
    </div>
  )
}

export default Homebanner