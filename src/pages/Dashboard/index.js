import React from 'react'
import RollDice from '../../pages/rollDice'
import CoinFlip from '../../pages/coinFlip'

function index() {
  return (
    <div className=''>
      <div className='text-center'>
        <div className='container d-flex'>
          <div className='col-lg-8 col-md-12 col-sm-12 w-100'>
            <RollDice />
          </div>
          {/* <div className='col-4'>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default index
