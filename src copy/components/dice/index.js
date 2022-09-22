import React, {useState} from 'react'
import c from './dice.module.css'
import useSound from 'use-sound'
import coin1 from '../../assets/sounds/coin1.mp3'
import empty from '../../assets/sounds/empty.wav'

export default ({num, selector}) => {
  const [playCoin] = useSound(coin1)
  const [playEmpty] = useSound(empty)
  const [selected, setSelected] = useState(false)
  const handleDiceSelect = () => {
    setSelected(!selected)
    localStorage.getItem('sound') === 'on' && !selected && playCoin()
    localStorage.getItem('sound') === 'on' && selected && playEmpty()
    selector(num)
  }
  if (num === 1) {
    return (
      <div
        className={selected ? c.dice + ' ' + c.diceSelected : c.dice}
        onClick={handleDiceSelect}
      >
        <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
      </div>
    )
  }
  if (num === 2) {
    return (
      <div
        className={selected ? c.dice + ' ' + c.diceSelected : c.dice}
        onClick={handleDiceSelect}
      >
        <div className={c.dotsContainer}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
      </div>
    )
  }
  if (num === 3) {
    return (
      <div
        className={selected ? c.dice + ' ' + c.diceSelected : c.dice}
        onClick={handleDiceSelect}
      >
        <div className={c.dotsContainer}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
      </div>
    )
  }
  if (num === 4) {
    return (
      <div
        className={selected ? c.dice4 + ' ' + c.dice4Selected : c.dice4}
        onClick={handleDiceSelect}
      >
        <div className={c.dotsDivider1}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
        <div className={c.dotsDivider2}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
      </div>
    )
  }
  if (num === 5) {
    return (
      <div
        className={selected ? c.dice5 + ' ' + c.dice5Selected : c.dice5}
        onClick={handleDiceSelect}
      >
        <div className={c.dotsDivider1}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
        <div className={c.dotsDivider3}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
        <div className={c.dotsDivider2}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
      </div>
    )
  }
  if (num === 6) {
    return (
      <div
        className={selected ? c.dice6 + ' ' + c.dice6Selected : c.dice6}
        onClick={handleDiceSelect}
      >
        <div className={c.dotsDivider1}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
        <div className={c.dotsDivider4}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
        <div className={c.dotsDivider5}>
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
          <div className={selected ? c.dot + ' ' + c.dotSelected : c.dot} />
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
