import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../Button'
import {BsCurrencyBitcoin, BsSun, BsMoon} from 'react-icons/bs'
import c from './modal.module.css'
import {setDefaultModal} from '../../Redux/Actions/element'
import {setTheme} from '../../Redux/Actions/themeAction'
import pingpong from '../../assets/sounds/pingPong.wav'
import useSound from 'use-sound'

import classcat from 'classcat'
import {GoUnmute, GoMute} from 'react-icons/go'
import StaticCoin from '../staticCoin'

function DefaultModal() {
  const [playPingPong] = useSound(pingpong)

  const dispatch = useDispatch()
  const [sound, setSound] = useState(localStorage.getItem('sound') || 'off')
  const [theme, setThemee] = useState(localStorage.getItem('theme') || 'dark')
  const modalData = useSelector((selector) => selector?.elements?.defaultModal)
  console.log(modalData?.pickedChoice)

  const modalRef = useRef()
  useEffect(() => {
    if (modalRef.current) modalRef.current.style.opacity = 1
  }, [modalData])

  if (!modalData) return null

  const closeModal = () => {
    if (modalData.onClose) modalData.onClose()

    dispatch(setDefaultModal(false))
  }
  const toggleSound = () => {
    let sound = localStorage.getItem('sound')
    if (sound === 'off') {
      localStorage.setItem('sound', 'on')
      setSound('on')
    } else {
      localStorage.setItem('sound', 'off')
      setSound('off')
    }
  }
  const soundOn = () => {
    localStorage.setItem('sound', 'on')
    setSound('on')
    playPingPong()
  }
  const soundOff = () => {
    localStorage.setItem('sound', 'off')
    setSound('off')
  }
  const themeDark = () => {
    localStorage.setItem('theme', 'dark')
    setThemee('dark')
    dispatch(setTheme('dark'))
    closeModal()
  }
  const themeLight = () => {
    localStorage.setItem('theme', 'light')
    setThemee('light')
    dispatch(setTheme('light'))
    closeModal()
  }
  if (modalData.type === 'coinFlip') {
    return (
      <>
        <div
          ref={modalRef}
          className={c.container}
          data-modal_container={true}
          onClick={(e) => {
            if (e.target instanceof Element && e.target.dataset.modal_container)
              closeModal()

            if (modalData.closeOnClickOutSide) closeModal()
          }}
        >
          <div className={classcat([c.popup, modalData.image && c.imageMode])}>
            {!modalData.hideCloseButton && (
              <div
                onClick={closeModal}
                className={c.close}
                dangerouslySetInnerHTML={{__html: '&times'}}
              />
            )}
            {modalData.icon && (
              <img
                className={classcat([
                  c.icon,
                  modalData.iconSize === 'large' && c.largeIcon,
                ])}
                src={modalData.icon}
                alt=''
              />
            )}
            {modalData.image && (
              <div className={c.imageContainer}>
                <div className={c.imageBg} />
                <img src={modalData.image} className={c.image} alt='' />
              </div>
            )}
            {modalData.title && (
              <div className={c.title} id='default-modal-title'>
                {modalData.title}
              </div>
            )}

            {modalData.message && (
              <div
                className={c.message}
                dangerouslySetInnerHTML={{__html: modalData.message}}
                style={{fontWeight: modalData.fontWeight || 'normal'}}
              />
            )}
            <p className={c.title2}>Your Choice:</p>
            <div className={c.smallCoins}>
              {modalData.pickedChoice.map((item) => {
                return <StaticCoin type={item} />
              })}
            </div>
            <p className={c.title2}>Order:</p>
            <div className={c.smallCoins}>
              {modalData.answers.map((item) => {
                return <StaticCoin type={item.res} />
              })}
            </div>
            {modalData.button && (
              <Button
                text={modalData.button}
                className={c.button}
                onClick={() => {
                  if (modalData.onClick) modalData.onClick()

                  if (!modalData.preventCloseOnClick) closeModal()
                }}
              />
            )}
            {modalData.cancel && (
              <Button
                text={modalData.cancel || 'Vazgeç'}
                textButton
                className={c.cancel}
                onClick={() => {
                  if (modalData.onCancel) modalData.onCancel()

                  closeModal()
                }}
              />
            )}
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div
        ref={modalRef}
        className={c.container}
        data-modal_container={true}
        onClick={(e) => {
          if (e.target instanceof Element && e.target.dataset.modal_container)
            closeModal()

          if (modalData.closeOnClickOutSide) closeModal()
        }}
      >
        <div className={classcat([c.popup, modalData.image && c.imageMode])}>
          {!modalData.hideCloseButton && (
            <div
              onClick={closeModal}
              className={c.close}
              dangerouslySetInnerHTML={{__html: '&times'}}
            />
          )}
          {modalData.icon && (
            <img
              className={classcat([
                c.icon,
                modalData.iconSize === 'large' && c.largeIcon,
              ])}
              src={modalData.icon}
              alt=''
            />
          )}
          {modalData.image && (
            <div className={c.imageContainer}>
              <div className={c.imageBg} />
              <img src={modalData.image} className={c.image} alt='' />
            </div>
          )}
          {modalData.title && (
            <div className={c.title} id='default-modal-title'>
              {modalData.title}
            </div>
          )}

          {modalData.message && (
            <div
              className={c.message}
              dangerouslySetInnerHTML={{__html: modalData.message}}
              style={{fontWeight: modalData.fontWeight || 'normal'}}
            />
          )}

          {modalData.button && (
            <Button
              text={modalData.button}
              className={c.button}
              onClick={() => {
                if (modalData.onClick) modalData.onClick()

                if (!modalData.preventCloseOnClick) closeModal()
              }}
            />
          )}
          {modalData.cancel && (
            <Button
              text={modalData.cancel || 'Vazgeç'}
              textButton
              className={c.cancel}
              onClick={() => {
                if (modalData.onCancel) modalData.onCancel()

                closeModal()
              }}
            />
          )}

          {modalData.type === 'profile' && (
            <div className='container d-flex row'>
              <h2>Connect Your Wallet</h2>
              <hr className={c.hr} />

              <div
                className={
                  c.profileMeta +
                  ' mt-3 d-flex justify-content-between align-items-center'
                }
              >
                <span>Metamask</span>
                <BsCurrencyBitcoin />
              </div>
              <div
                className={
                  c.profileCoinbase +
                  ' mt-3 d-flex justify-content-between align-items-center'
                }
              >
                <span>Coinbase</span>
                <BsCurrencyBitcoin />
              </div>
              <div
                className={
                  c.profileWallet +
                  ' mt-3 d-flex justify-content-between align-items-center'
                }
              >
                <span>Wallet Connect</span>
                <BsCurrencyBitcoin />
              </div>
              <div
                className={
                  c.profileDomain +
                  ' mt-3 d-flex justify-content-between align-items-center'
                }
              >
                <span>Unstopable Domains</span>
                <BsCurrencyBitcoin />
              </div>
            </div>
          )}

          {modalData.type === 'settings' && (
            <div className='container d-flex row'>
              <h2>Settings</h2>
              <hr className={c.hr} />
              <div className='container mt-2'>
                <div className='row'>
                  <div className='col-6' onClick={toggleSound}>
                    <h3>{'Sound'}</h3>
                  </div>
                  <div className='col-6'>
                    <h3>{'Theme'}</h3>
                  </div>
                </div>
              </div>
              <div
                className={
                  c.gap +
                  ' mt-3 d-flex justify-content-between align-items-center'
                }
                style={{columnGap: '30px'}}
              >
                <div
                  className={c.amountReducer + ' w-100 d-flex bg-dark'}
                  style={{columnGap: '20px'}}
                >
                  <span
                    onClick={soundOn}
                    className={
                      sound === 'on'
                        ? c.optionSelected +
                          ' w-100 d-flex justify-content-center'
                        : c.optionUnselected +
                          ' w-100 d-flex justify-content-center'
                    }
                  >
                    <GoUnmute className={c.icons} />
                  </span>
                  <span
                    onClick={soundOff}
                    className={
                      sound === 'off'
                        ? c.optionSelected +
                          ' w-100 d-flex justify-content-center'
                        : c.optionUnselected +
                          ' w-100 d-flex justify-content-center'
                    }
                  >
                    <GoMute />
                  </span>
                </div>
                <div
                  className={c.amountReducer + ' w-100 d-flex bg-dark'}
                  style={{columnGap: '20px'}}
                >
                  <span
                    onClick={themeDark}
                    className={
                      theme === 'dark'
                        ? c.optionSelected +
                          ' w-100 d-flex justify-content-center'
                        : c.optionUnselected +
                          ' w-100 d-flex justify-content-center'
                    }
                  >
                    <BsMoon className={c.icons} />
                  </span>
                  <span
                    onClick={themeLight}
                    className={
                      theme === 'light'
                        ? c.optionSelected +
                          ' w-100 d-flex justify-content-center'
                        : c.optionUnselected +
                          ' w-100 d-flex justify-content-center'
                    }
                  >
                    <BsSun />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DefaultModal
