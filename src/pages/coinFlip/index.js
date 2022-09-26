import React, {useState, useEffect} from 'react'
// import './coinflip.css'
import c from './coinflip.module.css'
import {useDispatch} from 'react-redux'
import {
  setDefaultModal,
  setErrorModal,
  setWarningModal,
  setSuccessModal,
} from '../../Redux/Actions/element'
import Dollar from '../../svg/Dollar'
import Amount from '../../svg/Amount'
import UpChart from '../../svg/UpChart'
import Trophy from '../../svg/Trophy'
import Dropdown from 'react-bootstrap/Dropdown'
import Coin from '../../components/coin'
import useSound from 'use-sound'
import coinstop from '../../assets/sounds/coinStop.wav'
import pingpong from '../../assets/sounds/pingPong.wav'

export default () => {
  const [winAmountValue, setWinAmountValue] = useState(0)
  const [pendingValue, setPendingValue] = useState(0)
  const [multiplierValue, setMultiplierValue] = useState(0)
  const [betState, setBetState] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState(1)
  const [coinNum, setCoinNum] = useState([{res: '', refresh: 'initial'}])
  const [userChoices, setUserChoices] = useState([
    {coinInd: 0, res: 'tails'},
    {coinInd: 1, res: 'tails'},
    {coinInd: 2, res: 'tails'},
    {coinInd: 3, res: 'tails'},
  ])
  const [response, setResponse] = useState([
    {res: 'heads'},
    {res: 'tails'},
    {res: 'heads'},
    {res: 'tails'},
  ])
  const [flipping, setFlipping] = useState(false)
  const dispatch = useDispatch()
  const [playCoinStop] = useSound(coinstop)
  const [playPingPong] = useSound(pingpong)

  const handleNumberOfCoins = (mode) => {
    if (mode === 'decrease') {
    } else {
    }
    let num = mode == 'decrease' ? selectedNumber - 1 : selectedNumber + 1
    setSelectedNumber(num)
    localStorage.getItem('sound') === 'on' && playPingPong()
    let temp = []
    for (let i = 0; i < num; i++) {
      temp.push({res: 'tails', refresh: 'initial'})
    }
    console.log(temp)
    setCoinNum([...temp])
    handleChoices()
  }

  useEffect(() => {
    // console.log(coinNum)
  }, [coinNum])

  const handleFlip = async () => {
    await setFlipping(true)
    let temp = [...coinNum]
    let arr = []

    //coinleri resetliyor
    for (let i = 0; i < temp.length; i++) {
      arr.push({refresh: Math.random()})
    }
    setTimeout(() => {
      setCoinNum([...arr])
    }, 100)

    //coinlerin değerlerini belirliyor
    let result = []
    setTimeout(() => {
      for (let i = 0; i < temp.length; i++) {
        result.push(response[i])
      }
      setCoinNum([...result])
      // console.log(result)
      localStorage.getItem('sound') === 'on' && playCoinStop()
    }, 200)
    console.log(userChoices)

    //Karşılaştırma yapıyor
    setTimeout(() => {
      let numberOfCoins = coinNum.length
      let choices = []
      for (let i = 0; i < numberOfCoins; i++) {
        choices[i] = userChoices[i].res
      }
      console.log(choices)

      let check = [...result]
      // debugger
      let status
      for (let i = 0; i < check.length; i++) {
        if (check[i].res !== choices[i]) {
          status = 'lose'
        }
      }
      setTimeout(() => {
        if (status === 'lose') {
          let msg = ` re`
          dispatch(
            setErrorModal({
              title: 'YOU LOSE',
              type: 'coinFlip',
              // message: `You choose the wrong order! \n Order is ${result.map(
              //   (ans) => `${ans.res} `
              // )} But your choice was: ${choices.map((ans) => `${ans} `)}`,
              message: 'You picked the wrong order!',
              button: 'Close',
              pickedChoice: choices,
              answers: result,
            })
          )
        } else {
          dispatch(
            setSuccessModal({
              title: 'YOU WIN',
              message: 'You picked right order :)',
              button: 'Close',
            })
          )
        }
      }, 2200)
    }, 500)

    setTimeout(() => {
      setFlipping(false)
    }, 2000)
  }
  // useEffect(() => {
  //   handleChoices
  // }, [coinNum])

  const handleChoices = (val) => {
    // {coinInd:ind,choice:'heads'} gelen val değeri örneği
    if (val) {
      let choices = [...userChoices]
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].coinInd === val.coinInd) {
          choices[i].res = val.res
        }
      }
      setUserChoices(choices)
    } else {
      setUserChoices([
        {coinInd: 0, res: 'tails'},
        {coinInd: 1, res: 'tails'},
        {coinInd: 2, res: 'tails'},
        {coinInd: 3, res: 'tails'},
      ])
    }
  }

  useEffect(() => {
    console.log(userChoices)
  }, [userChoices])
  const handleBet = () => {
    setBetState(true)
    handleFlip()
  }
  const handleBack = () => {
    setBetState(false)
  }
  return (
    <>
      <div className={c.con + ' mt-4'}>
        <div className={c.gameCon}>
          <div className={c.pendingCont}>
            <p className={c.pendingT}>Pending</p>
          </div>
          <div className={c.coinConDesktop}>
            {coinNum.map((item, index) => {
              if (index < 2) {
                return (
                  <Coin
                    key={index}
                    state={coinNum[index]}
                    ind={index}
                    flipping={flipping}
                    theChoice={(val) => {
                      handleChoices(val)
                    }}
                  />
                )
              }
            })}
          </div>
          <div className={c.conRow2}>
            {coinNum.map((item, index) => {
              if (index > 1) {
                return (
                  <Coin
                    key={index}
                    state={coinNum[index]}
                    ind={index}
                    flipping={flipping}
                    theChoice={(val) => {
                      handleChoices(val)
                    }}
                  />
                )
              }
            })}
          </div>

          <div className={c.betFieldDesktop}>
            <div>
              <p
                style={{
                  color: '#F0F0F0',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Bet
              </p>
              <div>
                <div className={c.amountValue}>
                  <div
                    className={c.amountButton + ' gradientVertical'}
                    style={{marginRight: '30px'}}
                  >
                    Min
                  </div>
                  <div className={c.amounTotal}>1000</div>
                  <div
                    className={c.amountButton + ' gradientVertical'}
                    style={{marginLeft: '30px'}}
                  >
                    Max
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  color: '#F0F0F0',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Coins
              </p>
              <div className={c.coinNumBox + ' gradientVertical'}>
                {selectedNumber < 2 ? (
                  <div className={c.circleDisabled + ' noselect'}>
                    <p className={c.circleP}>-</p>
                  </div>
                ) : (
                  <div
                    className={c.circle + ' noselect'}
                    onClick={() => handleNumberOfCoins('decrease')}
                  >
                    <p className={c.circleP}>-</p>
                  </div>
                )}
                <p style={{fontSize: '16px'}}>{selectedNumber}</p>
                {selectedNumber > 3 ? (
                  <div className={c.circleDisabled + ' noselect'}>
                    <p className={c.circleP}>+</p>
                  </div>
                ) : (
                  <div
                    className={c.circle + ' noselect'}
                    onClick={() => handleNumberOfCoins('increase')}
                  >
                    <p className={c.circleP}>+</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={c.betFieldMobile}>
            <div>
              <p
                className='mt-3'
                style={{
                  color: '#F0F0F0',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Bet
              </p>
              <div>
                <div className={c.amountValue}>
                  <div
                    className={c.amountButton + ' gradientVertical'}
                    style={{marginRight: '30px'}}
                  >
                    Min
                  </div>
                  <div className={c.amounTotal}>1000</div>
                  <div
                    className={c.amountButton + ' gradientVertical'}
                    style={{marginLeft: '30px'}}
                  >
                    Max
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                className='mt-3'
                style={{
                  color: '#F0F0F0',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Coins
              </p>
              <div className={c.coinNumBox + ' gradientVertical'}>
                {selectedNumber < 2 ? (
                  <div className={c.circleDisabled + ' noselect'}>
                    <p className={c.circleP}>-</p>
                  </div>
                ) : (
                  <div
                    className={c.circle + ' noselect'}
                    onClick={() => handleNumberOfCoins('decrease')}
                  >
                    <p className={c.circleP}>-</p>
                  </div>
                )}
                <p style={{fontSize: '16px'}}>{selectedNumber}</p>
                {selectedNumber > 3 ? (
                  <div className={c.circleDisabled + ' noselect'}>
                    <p className={c.circleP}>+</p>
                  </div>
                ) : (
                  <div
                    className={c.circle + ' noselect'}
                    onClick={() => handleNumberOfCoins('increase')}
                  >
                    <p className={c.circleP}>+</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {!betState ? (
            <div
              className={c.rollButton + ' gradientVertical'}
              onClick={handleBet}
            >
              <p className={c.rollText}>FLIP!</p>
            </div>
          ) : (
            <div
              className={c.rollButton + ' gradientVertical'}
              onClick={handleBack}
            >
              <p className={c.rollText}>BACK!</p>
            </div>
          )}
        </div>
      </div>
      {/* <div className={c.con + ' mt-5'}>
        <div className={c.gameCon}>
          <div className={c.mobileDice}>
            <div className={c.fix + ' ' + c.mobilecoin + ' d-flex'}>
              <div className={c.field + ' mt-3'}>
                <p className={c.title}>Coins</p>
              </div>
              <div
                className={
                  c.amountValue + ' text-center mt-2 justify-content-between'
                }
              >
                <div
                  onClick={() => handleNumberOfCoins(1)}
                  className={
                    selectedNumber == '1'
                      ? c.amountReduceSelected + ' mx-2'
                      : c.amountReduce + ' mx-2'
                  }
                >
                  1
                </div>
                <div
                  onClick={() => handleNumberOfCoins(2)}
                  className={
                    selectedNumber == '2'
                      ? c.amountReduceSelected + ' mx-2'
                      : c.amountReduce + ' mx-2'
                  }
                >
                  2
                </div>
                <div
                  onClick={() => handleNumberOfCoins(3)}
                  className={
                    selectedNumber == '3'
                      ? c.amountReduceSelected + ' mx-2'
                      : c.amountReduce + ' mx-2'
                  }
                >
                  3
                </div>
                <div
                  onClick={() => handleNumberOfCoins(4)}
                  className={
                    selectedNumber == '4'
                      ? c.amountReduceSelected + ' mx-2'
                      : c.amountReduce + ' mx-2'
                  }
                >
                  4
                </div>
              </div>
            </div>

            <div className={c.mobilecoin + ' d-flex row'}>
              <div className={c.field + ' mb-3 mt-3'}>
                <Amount />
                <p className={c.title}>Amount</p>
              </div>
              <div
                className={
                  c.amountValue + ' text-center mt-2 justify-content-between'
                }
              >
                <div className={c.amountReduce + ' mx-2'}>-</div>
                <div className={c.amounTotal}>1.0</div>
                <div className={c.amountReduce}>+</div>
              </div>
              <div
                className={
                  c.mobileWidth + ' d-flex justify-content-between pt-2'
                }
              >
                <div className={c.amountReduce}>1/2</div>
                <div className={c.amountReduce}>x2</div>
                <div className={c.amountReduce}>Max</div>
              </div>
            </div>
          </div>

          <div className={c.gameLeft}>
            <div className={c.field}>
              <Dollar />
              <p className={c.title}>Currency</p>
            </div>
            <Dropdown className='mt-3 d-flex align-items-center'>
              <Dropdown.Toggle
                id='dropdown-button-dark-example1'
                className='w-100'
                variant='secondary'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='24' height='24' rx='12' fill='#6100FF'></rect>
                  <path
                    d='M12.0009 5.33203C15.6216 5.33203 18.5564 8.26687 18.5564 11.8876C18.5564 15.5083 15.6216 18.4431 12.0009 18.4431C8.38015 18.4431 5.44531 15.5083 5.44531 11.8876C5.44531 8.26687 8.38015 5.33203 12.0009 5.33203ZM9.89899 8.47132L8.16054 9.44318C8.0824 9.4836 8.01702 9.54491 7.97166 9.62029C7.92631 9.69566 7.90276 9.78215 7.90365 9.87011V11.8286C7.90365 12.0056 7.99419 12.1674 8.16054 12.2559L9.8994 13.2278C10.0506 13.3159 10.2473 13.3159 10.4132 13.2278L11.5928 12.5649L12.3938 12.1084L13.5734 11.4459C13.7246 11.3574 13.9208 11.3574 14.0872 11.4459L15.0095 11.9613C15.1611 12.0494 15.2664 12.2113 15.2664 12.3883V13.4339C15.2664 13.6105 15.1762 13.7723 15.0095 13.8608L14.0876 14.391C13.936 14.4795 13.7393 14.4795 13.5734 14.391L12.6511 13.8756C12.4995 13.7871 12.3938 13.6252 12.3938 13.4486V12.7709L11.5928 13.2278V13.9051C11.5928 14.0816 11.6833 14.2439 11.8497 14.332L13.5885 15.3038C13.7397 15.3923 13.936 15.3923 14.1023 15.3038L15.8412 14.332C15.9924 14.2439 16.0981 14.0821 16.0981 13.9051V11.9466C16.099 11.8586 16.0754 11.7721 16.0301 11.6968C15.9847 11.6214 15.9193 11.5601 15.8412 11.5197L14.0876 10.5326C13.936 10.4445 13.7393 10.4445 13.5734 10.5326L12.3938 11.2103L11.5928 11.652L10.4132 12.3293C10.262 12.4178 10.0657 12.4178 9.8994 12.3293L8.96196 11.7991C8.81077 11.711 8.70506 11.5492 8.70506 11.3722V10.3265C8.70506 10.15 8.79561 9.98811 8.96196 9.89961L9.88383 9.38418C10.0354 9.29568 10.2321 9.29568 10.3984 9.38418L11.3203 9.89961C11.4719 9.98811 11.5776 10.15 11.5776 10.3265V11.0042L12.3786 10.5474V9.87011C12.3795 9.78215 12.356 9.69566 12.3106 9.62029C12.2653 9.54491 12.1999 9.4836 12.1217 9.44318L10.4132 8.47132C10.262 8.38282 10.0657 8.38282 9.8994 8.47132H9.89899Z'
                    fill='white'
                  ></path>
                </svg>
                <span className='mx-3'>MATIC</span>
              </Dropdown.Toggle>

              <Dropdown.Menu variant='dark'>
                <Dropdown.Item href='#/action-1' className='d-flex'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' rx='12' fill='#6100FF'></rect>
                    <path
                      d='M12.0009 5.33203C15.6216 5.33203 18.5564 8.26687 18.5564 11.8876C18.5564 15.5083 15.6216 18.4431 12.0009 18.4431C8.38015 18.4431 5.44531 15.5083 5.44531 11.8876C5.44531 8.26687 8.38015 5.33203 12.0009 5.33203ZM9.89899 8.47132L8.16054 9.44318C8.0824 9.4836 8.01702 9.54491 7.97166 9.62029C7.92631 9.69566 7.90276 9.78215 7.90365 9.87011V11.8286C7.90365 12.0056 7.99419 12.1674 8.16054 12.2559L9.8994 13.2278C10.0506 13.3159 10.2473 13.3159 10.4132 13.2278L11.5928 12.5649L12.3938 12.1084L13.5734 11.4459C13.7246 11.3574 13.9208 11.3574 14.0872 11.4459L15.0095 11.9613C15.1611 12.0494 15.2664 12.2113 15.2664 12.3883V13.4339C15.2664 13.6105 15.1762 13.7723 15.0095 13.8608L14.0876 14.391C13.936 14.4795 13.7393 14.4795 13.5734 14.391L12.6511 13.8756C12.4995 13.7871 12.3938 13.6252 12.3938 13.4486V12.7709L11.5928 13.2278V13.9051C11.5928 14.0816 11.6833 14.2439 11.8497 14.332L13.5885 15.3038C13.7397 15.3923 13.936 15.3923 14.1023 15.3038L15.8412 14.332C15.9924 14.2439 16.0981 14.0821 16.0981 13.9051V11.9466C16.099 11.8586 16.0754 11.7721 16.0301 11.6968C15.9847 11.6214 15.9193 11.5601 15.8412 11.5197L14.0876 10.5326C13.936 10.4445 13.7393 10.4445 13.5734 10.5326L12.3938 11.2103L11.5928 11.652L10.4132 12.3293C10.262 12.4178 10.0657 12.4178 9.8994 12.3293L8.96196 11.7991C8.81077 11.711 8.70506 11.5492 8.70506 11.3722V10.3265C8.70506 10.15 8.79561 9.98811 8.96196 9.89961L9.88383 9.38418C10.0354 9.29568 10.2321 9.29568 10.3984 9.38418L11.3203 9.89961C11.4719 9.98811 11.5776 10.15 11.5776 10.3265V11.0042L12.3786 10.5474V9.87011C12.3795 9.78215 12.356 9.69566 12.3106 9.62029C12.2653 9.54491 12.1999 9.4836 12.1217 9.44318L10.4132 8.47132C10.262 8.38282 10.0657 8.38282 9.8994 8.47132H9.89899Z'
                      fill='white'
                    ></path>
                  </svg>
                  <span className='mx-3'>MATIC</span>
                </Dropdown.Item>
                <Dropdown.Item href='#/action-1' className='d-flex'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' rx='12' fill='#6100FF'></rect>
                    <path
                      d='M12.0009 5.33203C15.6216 5.33203 18.5564 8.26687 18.5564 11.8876C18.5564 15.5083 15.6216 18.4431 12.0009 18.4431C8.38015 18.4431 5.44531 15.5083 5.44531 11.8876C5.44531 8.26687 8.38015 5.33203 12.0009 5.33203ZM9.89899 8.47132L8.16054 9.44318C8.0824 9.4836 8.01702 9.54491 7.97166 9.62029C7.92631 9.69566 7.90276 9.78215 7.90365 9.87011V11.8286C7.90365 12.0056 7.99419 12.1674 8.16054 12.2559L9.8994 13.2278C10.0506 13.3159 10.2473 13.3159 10.4132 13.2278L11.5928 12.5649L12.3938 12.1084L13.5734 11.4459C13.7246 11.3574 13.9208 11.3574 14.0872 11.4459L15.0095 11.9613C15.1611 12.0494 15.2664 12.2113 15.2664 12.3883V13.4339C15.2664 13.6105 15.1762 13.7723 15.0095 13.8608L14.0876 14.391C13.936 14.4795 13.7393 14.4795 13.5734 14.391L12.6511 13.8756C12.4995 13.7871 12.3938 13.6252 12.3938 13.4486V12.7709L11.5928 13.2278V13.9051C11.5928 14.0816 11.6833 14.2439 11.8497 14.332L13.5885 15.3038C13.7397 15.3923 13.936 15.3923 14.1023 15.3038L15.8412 14.332C15.9924 14.2439 16.0981 14.0821 16.0981 13.9051V11.9466C16.099 11.8586 16.0754 11.7721 16.0301 11.6968C15.9847 11.6214 15.9193 11.5601 15.8412 11.5197L14.0876 10.5326C13.936 10.4445 13.7393 10.4445 13.5734 10.5326L12.3938 11.2103L11.5928 11.652L10.4132 12.3293C10.262 12.4178 10.0657 12.4178 9.8994 12.3293L8.96196 11.7991C8.81077 11.711 8.70506 11.5492 8.70506 11.3722V10.3265C8.70506 10.15 8.79561 9.98811 8.96196 9.89961L9.88383 9.38418C10.0354 9.29568 10.2321 9.29568 10.3984 9.38418L11.3203 9.89961C11.4719 9.98811 11.5776 10.15 11.5776 10.3265V11.0042L12.3786 10.5474V9.87011C12.3795 9.78215 12.356 9.69566 12.3106 9.62029C12.2653 9.54491 12.1999 9.4836 12.1217 9.44318L10.4132 8.47132C10.262 8.38282 10.0657 8.38282 9.8994 8.47132H9.89899Z'
                      fill='white'
                    ></path>
                  </svg>
                  <span className='mx-3'>XRP</span>
                </Dropdown.Item>
                <Dropdown.Item href='#/action-1' className='d-flex'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='24' height='24' rx='12' fill='#6100FF'></rect>
                    <path
                      d='M12.0009 5.33203C15.6216 5.33203 18.5564 8.26687 18.5564 11.8876C18.5564 15.5083 15.6216 18.4431 12.0009 18.4431C8.38015 18.4431 5.44531 15.5083 5.44531 11.8876C5.44531 8.26687 8.38015 5.33203 12.0009 5.33203ZM9.89899 8.47132L8.16054 9.44318C8.0824 9.4836 8.01702 9.54491 7.97166 9.62029C7.92631 9.69566 7.90276 9.78215 7.90365 9.87011V11.8286C7.90365 12.0056 7.99419 12.1674 8.16054 12.2559L9.8994 13.2278C10.0506 13.3159 10.2473 13.3159 10.4132 13.2278L11.5928 12.5649L12.3938 12.1084L13.5734 11.4459C13.7246 11.3574 13.9208 11.3574 14.0872 11.4459L15.0095 11.9613C15.1611 12.0494 15.2664 12.2113 15.2664 12.3883V13.4339C15.2664 13.6105 15.1762 13.7723 15.0095 13.8608L14.0876 14.391C13.936 14.4795 13.7393 14.4795 13.5734 14.391L12.6511 13.8756C12.4995 13.7871 12.3938 13.6252 12.3938 13.4486V12.7709L11.5928 13.2278V13.9051C11.5928 14.0816 11.6833 14.2439 11.8497 14.332L13.5885 15.3038C13.7397 15.3923 13.936 15.3923 14.1023 15.3038L15.8412 14.332C15.9924 14.2439 16.0981 14.0821 16.0981 13.9051V11.9466C16.099 11.8586 16.0754 11.7721 16.0301 11.6968C15.9847 11.6214 15.9193 11.5601 15.8412 11.5197L14.0876 10.5326C13.936 10.4445 13.7393 10.4445 13.5734 10.5326L12.3938 11.2103L11.5928 11.652L10.4132 12.3293C10.262 12.4178 10.0657 12.4178 9.8994 12.3293L8.96196 11.7991C8.81077 11.711 8.70506 11.5492 8.70506 11.3722V10.3265C8.70506 10.15 8.79561 9.98811 8.96196 9.89961L9.88383 9.38418C10.0354 9.29568 10.2321 9.29568 10.3984 9.38418L11.3203 9.89961C11.4719 9.98811 11.5776 10.15 11.5776 10.3265V11.0042L12.3786 10.5474V9.87011C12.3795 9.78215 12.356 9.69566 12.3106 9.62029C12.2653 9.54491 12.1999 9.4836 12.1217 9.44318L10.4132 8.47132C10.262 8.38282 10.0657 8.38282 9.8994 8.47132H9.89899Z'
                      fill='white'
                    ></path>
                  </svg>
                  <span className='mx-3'>BTC</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className={c.field + ' mt-3'}>
              
              <p className={c.title}>Coins</p>
            </div>
            <div
              className={
                c.amountValue + ' text-center mt-2 justify-content-between'
              }
            >
              <div
                onClick={() => handleNumberOfCoins(1)}
                className={
                  selectedNumber == '1'
                    ? c.amountReduceSelected + ' mx-2'
                    : c.amountReduce + ' mx-2'
                }
              >
                1
              </div>
              <div
                onClick={() => handleNumberOfCoins(2)}
                className={
                  selectedNumber == '2'
                    ? c.amountReduceSelected + ' mx-2'
                    : c.amountReduce + ' mx-2'
                }
              >
                2
              </div>
              <div
                onClick={() => handleNumberOfCoins(3)}
                className={
                  selectedNumber == '3'
                    ? c.amountReduceSelected + ' mx-2'
                    : c.amountReduce + ' mx-2'
                }
              >
                3
              </div>
              <div
                onClick={() => handleNumberOfCoins(4)}
                className={
                  selectedNumber == '4'
                    ? c.amountReduceSelected + ' mx-2'
                    : c.amountReduce + ' mx-2'
                }
              >
                4
              </div>
            </div>
            <div className={c.field + ' mt-3'}>
              <Amount />
              <p className={c.title}>Amount</p>
            </div>
            <div
              className={
                c.amountValue + ' text-center mt-2 justify-content-between'
              }
            >
              <div className={c.amountReduce + ' mx-2'}>-</div>
              <div className={c.amounTotal}>1.0</div>
              <div className={c.amountReduce}>+</div>
            </div>
            <div className='d-flex justify-content-between pt-2'>
              <div className={c.amountReduce}>1/2</div>
              <div className={c.amountReduce}>x2</div>
              <div className={c.amountReduce}>Max</div>
            </div>
            {!betState ? (
              <div className={c.btnDice + ' mt-5'} onClick={handleBet}>
                Bet
              </div>
            ) : (
              <div
                className={c.btnDice + ' mt-5'}
                onClick={!flipping && handleBack}
              >
                Back
              </div>
            )}
          </div>

          <div className={c.gameRight}>
            <div className={c.gameRightTop}>
              <div className={c.pendingCon}>
                <p className={c.pendingText}>{`Pending ${pendingValue}`}</p>
              </div>
            </div>
            <div className={c.gameRightMid}>
              <div className={c.rowsConDesktop}>
                {coinNum.map((item, index) => {
                  return (
                    <Coin
                      key={index}
                      state={coinNum[index]}
                      ind={index}
                      flipping={flipping}
                      theChoice={(val) => {
                        handleChoices(val)
                      }}
                    />
                  )
                })}
              </div>
              <div className={c.rowsConMobile}>
                <div className={c.conRow1}>
                  {coinNum.map((item, index) => {
                    if (index < 2) {
                      return (
                        <Coin
                          key={index}
                          state={coinNum[index]}
                          ind={index}
                          flipping={flipping}
                          theChoice={(val) => {
                            handleChoices(val)
                          }}
                        />
                      )
                    }
                  })}
                </div>
                <div className={c.conRow2}>
                  {coinNum.map((item, index) => {
                    if (index > 1) {
                      return (
                        <Coin
                          key={index}
                          state={coinNum[index]}
                          ind={index}
                          flipping={flipping}
                          theChoice={(val) => {
                            handleChoices(val)
                          }}
                        />
                      )
                    }
                  })}
                </div>
              </div>
            </div>
            <div className={c.mobileBtnDice}>
              {!betState ? (
                <div className={c.mobileBtnDice + ' mt-5'} onClick={handleBet}>
                  Bet
                </div>
              ) : (
                <div
                  className={c.mobileBtnDice + ' mt-5'}
                  onClick={!flipping && handleBack}
                >
                  Back
                </div>
              )}
            </div>

            <div className='d-flex pt-3 w-100'>
              <UpChart />
              <p className={c.title}>Multiplier:</p>
              <p className={c.title + ' ' + c.colorGreen}>
                {multiplierValue === 0 ? 'x-' : 'x' + multiplierValue}
              </p>
            </div>
            <div className='d-flex pt-3 w-100'>
              <Trophy />
              <p className={c.title}>Win Amount:</p>
              <p className={c.title + ' ' + c.colorGreen}>
                {winAmountValue === 0 ? '-' : winAmountValue}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
