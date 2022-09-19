import React from 'react'
import Menu from '../../components/Menu'
import RollDice from '../../pages/rollDice/index'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

function index() {
  return (
    <div className=''>
        <Menu />
        <div className='text-center'>
          <div className='container d-flex'>
            <div className='col-8'>
             <RollDice />
            </div>
            <div className='col-4'>
              <RightSidebar />
            </div>
          </div>
        </div>
    </div>
  )
}

export default index