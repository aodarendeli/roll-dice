import React from 'react'
import Menu from '../../components/Menu'
import RollDice from '../../pages/rollDice/index'

function index() {
  return (
    <div className=''>
        <Menu />
        <div className='text-center'>
          <div className='container d-flex'>
            <div className='col-lg-8 col-md-12 col-sm-12'>
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
