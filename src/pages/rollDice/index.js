import React, {useRef, useState, useEffect} from 'react'
import c from './rolldice.module.css'
import Dice from '../../components/dice'
import SmallDice from '../../components/smallDice'
import Dollar from '../../svg/Dollar'
import Amount from '../../svg/Amount'
import UpChart from '../../svg/UpChart'
import Dropdown from 'react-bootstrap/Dropdown'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import {useDispatch} from 'react-redux'
import {setDefaultModal, setWarningModal} from '../../Redux/Actions/element'
import DiceImg from '../../assets/images/diceimg.png'
export default () => {
  const [pendingValue, setPendingValue] = useState(0)
  const [multiplierValue, setMultiplierValue] = useState(0)
  const [durationRoll, setDurationRoll] = useState(5)
  const [rolling, setRolling] = useState(false)
  const [winAmountValue, setWinAmountValue] = useState(0)
  const [betState, setBetState] = useState(false)
  const [diceSelections, setDiceSelections] = useState([0, 0, 0, 0, 0, 0])
  const [presetValue, setSetPresetValue] = useState(5)
  const [showResult, setShowResult] = useState({state: false, winStatus: false})
  const dispatch = useDispatch()
  const diceRef = useRef(null)

  const handleRoll = (val) => {
    let arr = [...diceSelections]
    let res = arr.filter((dice) => dice === 0)
    if (res.length === 6) {
      dispatch(
        setWarningModal({
          title: 'Warning',
          message: 'Please choice atleast 1 dice.',
          button: 'OK',
        })
      )
      return
    }
    setShowResult({state: false, winStatus: false})
    setRolling(true)
    setBetState(true)
    setTimeout(() => {
      diceRef.current.rollAll([presetValue])
    }, 1000)
  }
  const handleRollDone = () => {
    let arr = [...diceSelections]
    let res = arr.find((dice) => dice === presetValue)
    let status = false
    res ? (status = true) : (status = false)
    setRolling(false)
    setShowResult({state: true, winStatus: status})
  }
  const handleDiceSelect = (val) => {
    let temp = [...diceSelections]
    temp[val - 1] === val ? (temp[val - 1] = 0) : (temp[val - 1] = val)
    setDiceSelections(temp)
  }
  const handleGoBack = () => {
    !rolling && setDiceSelections([0, 0, 0, 0, 0, 0])
    !rolling && setBetState(false)
  }
  useEffect(() => {
    console.log(diceSelections)
  }, [diceSelections])
  return (
    <>
      <div className={c.con + ' mt-5'}>
        <div className={c.gameCon}>
          <div className={c.pendingCont}>
            <p className={c.pendingT}>Pending</p>
          </div>
          <div className={c.newDiceConDesktop} style={{height: '200px'}}>
            <div className={c.diceDivider}>
              <div className={c.newDiceSelection}>
                <div className={c.diceDivider}>
                  <Dice num={1} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={2} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={3} selector={(val) => handleDiceSelect(val)} />
                </div>
                <div className={c.diceDivider}>
                  <Dice num={4} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={5} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={6} selector={(val) => handleDiceSelect(val)} />
                </div>
              </div>
            </div>
            {betState ? (
              <ReactDice
                numDice={1}
                dieSize={80}
                // rollTime={durationRoll}
                faceColor={'#fff'}
                dotColor={'#fff'}
                defaultRoll={1}
                disableIndividual
                rollDone={handleRollDone}
                ref={diceRef}
                className='ozgur2'
              />
            ) : (
              <img src={DiceImg} className={c.containImg} alt='contain' />
            )}
          </div>
          <div className={c.newDiceConMobile}>
            <div className={c.diceDivider}>
              <div className={c.newDiceSelection}>
                <div className={c.diceDivider}>
                  <Dice num={1} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={2} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={3} selector={(val) => handleDiceSelect(val)} />
                </div>
                <div className={c.diceDivider}>
                  <Dice num={4} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={5} selector={(val) => handleDiceSelect(val)} />
                  <Dice num={6} selector={(val) => handleDiceSelect(val)} />
                </div>
              </div>
            </div>
            {betState ? (
              <ReactDice
                numDice={1}
                dieSize={80}
                // rollTime={durationRoll}
                faceColor={'#fff'}
                dotColor={'#fff'}
                defaultRoll={1}
                disableIndividual
                rollDone={handleRollDone}
                ref={diceRef}
                className='ozgur'
              />
            ) : (
              <img src={DiceImg} className={c.containImg} alt='contain' />
            )}
          </div>
          <div className={c.betFieldDesktop} style={{marginTop: '18px'}}>
            <div>
              <p
                className='tbet'
              >
                Bet
              </p>
              <div>
                <div className={c.amountValue + ' amountValue'}>
                  <div
                    className={c.amountButton + ' gradientVertical'}
                    style={{marginRight: '30px'}}
                  >
                    Min
                  </div>
                  <div className={c.amounTotal + ' amountTotal'}>1000</div>
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
              <div className='d-flex align-items-center'>
                <Dollar />
                <p className={c.title + ' title'}>Multiplier:</p>
                <p className={c.title + ' title' + c.colorGreen}></p>
              </div>
              <div className='d-flex align-items-center'>
                <Dollar />
                <p className={c.title + ' title'}>Win Amount:</p>
                <p className={c.title + ' title' + c.colorGreen}></p>
              </div>
            </div>
          </div>
          <div className={c.betFieldMobile}>
            <div>
              <p
                style={{color: '#F0F0F0', fontSize: '20px', fontWeight: '600'}}
              >
                Bet
              </p>
              <div>
                <div className={c.amountValue + ' amountValue'}>
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
              <div className='d-flex align-items-center'>
                <Dollar />
                <p className={c.title}>Multiplier:</p>
                <p className={c.title + ' ' + c.colorGreen}></p>
              </div>
              <div className='d-flex align-items-center'>
                <Dollar />
                <p className={c.title}>Win Amount:</p>
                <p className={c.title + ' ' + c.colorGreen}></p>
              </div>
            </div>
          </div>
          {!betState ? (
            <div
              className={c.rollButton + ' gradientHorizontal'}
              onClick={handleRoll}
            >
              <p className={c.a+' rollText'}>ROLL!</p>
            </div>
          ) : (
            <div
              className={c.rollButton + ' gradientHorizontal'}
              onClick={handleGoBack}
            >
              <p className={c.rollText}>BACK!</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
/*
 <div>
      <div className={c.con + ' mt-5'}>
        <div className={c.gameCon}>
          <div className={c.mobileDice}>
            <div className='d-flex row mx-auto'>
              <div className={c.field + ' mb-3 '}>
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
              <div className={c.btnDice + ' mt-5'} onClick={handleRoll}>
                Bet
              </div>
            ) : (
              <div className={c.btnDice + ' mt-5'} onClick={handleGoBack}>
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
              {!betState ? (
                <>
                  <div className={c.diceDivider}>
                    <Dice num={1} selector={(val) => handleDiceSelect(val)} />
                    <Dice num={2} selector={(val) => handleDiceSelect(val)} />
                    <Dice num={3} selector={(val) => handleDiceSelect(val)} />
                  </div>
                  <div className={c.diceDivider}>
                    <Dice num={4} selector={(val) => handleDiceSelect(val)} />
                    <Dice num={5} selector={(val) => handleDiceSelect(val)} />
                    <Dice num={6} selector={(val) => handleDiceSelect(val)} />
                  </div>
                </>
              ) : (
                <div className={c.diceResCon}>
                  <div style={{display: 'flex'}}>
                    {diceSelections.map((dice) => {
                      if (dice !== 0) return <SmallDice num={dice} />
                    })}
                  </div>
                  <ReactDice
                    numDice={1}
                    // rollTime={durationRoll}
                    faceColor={'#fff'}
                    dotColor={'#000'}
                    borderRadius={'50px'}
                    defaultRoll={1}
                    disableIndividual
                    rollDone={handleRollDone}
                    ref={diceRef}
                  />
                  {showResult.state ? (
                    <div style={{color: '#fff', height: '30px'}}>
                      {showResult.winStatus ? 'YOU WIN' : 'YOU LOSE'}
                    </div>
                  ) : (
                    <div style={{height: '30px'}} />
                  )}
                </div>
              )}
            </div>
            <div className={c.mobileBtnDice}>
              {!betState ? (
                <div className={c.mobileBtnDice + ' mt-5'} onClick={handleRoll}>
                  Bet
                </div>
              ) : (
                <div
                  className={c.mobileBtnDice + ' mt-5'}
                  onClick={handleGoBack}
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
      </div>
    </div>
*/
