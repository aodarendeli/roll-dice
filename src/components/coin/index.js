import React, {useState, useEffect} from 'react'
import './coin.css'
import CoinIcon from '../../svg/CoinIcon'
import Col from 'react-bootstrap/Col'
import useSound from 'use-sound'
import coinstart from '../../assets/sounds/coinStart.wav'
export default ({state, theChoice, ind, flipping}) => {
  const [result, setResult] = useState({res: 'heads', refresh: 'initial'})
  const [selected, setSelected] = useState('T')
  const [playCoin] = useSound(coinstart)
  useEffect(() => {
    setResult(state)
    // console.log('state')
    // console.log(state)
    // console.log('state')
    !flipping && setSelected('T')
  }, [state])

  useEffect(() => {
    theChoice({coinInd: ind, res: 'tails'})
  }, [])
  //{coinInd:ind,choice:'heads'}
  return (
    <div className='coinCon mx-auto'>
      {/* <p>{`Coin ${ind + 1}`}</p> */}
      <div id='coin' className={result.res}>
        <div className='side-a mx-auto'>
          <img
            className='mx-auto'
            alt='coin'
            src={require('../../assets/images/coin.png')}
          />
          <p className='coinT'>T</p>
        </div>
        <div className='side-b'>
          <img alt='coin' src={require('../../assets/images/coin.png')} />

          <p className='coinT'>H</p>
        </div>
      </div>
      <div className='htcon'>
        <div
          className={
            selected === 'H' ? 'selectedBg  gradientVertical' : 'unselectedBg'
          }
        >
          <p
            className={selected === 'H' ? 'choiceSelected' : 'choiceUnselected'}
            onClick={() => {
              setSelected('H')
              setResult({res: 'heads'})
              localStorage.getItem('sound') === 'on' && playCoin()
              theChoice({coinInd: ind, res: 'heads'})
            }}
          >
            HEADS
          </p>
        </div>
        <div
          className={
            selected === 'T' ? 'selectedBg  gradientVertical' : 'unselectedBg'
          }
        >
          <p
            className={selected === 'T' ? 'choiceSelected' : 'choiceUnselected'}
            onClick={() => {
              setSelected('T')
              setResult({res: 'tails'})
              localStorage.getItem('sound') === 'on' && playCoin()
              theChoice({coinInd: ind, res: 'tails'})
            }}
          >
            TAILS
          </p>
        </div>
      </div>
    </div>
  )
}
