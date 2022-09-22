import React, {useState} from 'react'
import c from './smallDice.module.css'
// import useSound from 'use-sound'
// import coin1 from '../../assets/sounds/coin1.mp3'
// import empty from '../../assets/sounds/empty.wav'

export default ({num}) => {
  if (num === 1) {
    return (
      <div className={c.dice}>
        <div className={c.dot} />
      </div>
    )
  }
  if (num === 2) {
    return (
      <div className={c.dice}>
        <div className={c.dotsContainer}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
      </div>
    )
  }
  if (num === 3) {
    return (
      <div className={c.dice}>
        <div className={c.dotsContainer}>
          <div className={c.dot} />
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
      </div>
    )
  }
  if (num === 4) {
    return (
      <div className={c.dice4}>
        <div className={c.dotsDivider1}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
        <div className={c.dotsDivider2}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
      </div>
    )
  }
  if (num === 5) {
    return (
      <div className={c.dice5}>
        <div className={c.dotsDivider1}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
        <div className={c.dotsDivider3}>
          <div className={c.dot} />
        </div>
        <div className={c.dotsDivider2}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
      </div>
    )
  }
  if (num === 6) {
    return (
      <div className={c.dice6}>
        <div className={c.dotsDivider1}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
        <div className={c.dotsDivider4}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
        <div className={c.dotsDivider5}>
          <div className={c.dot} />
          <div className={c.dot} />
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
