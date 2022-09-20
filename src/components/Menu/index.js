import Marque from '../../components/marque/index'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useState} from 'react'

const Menu = () => {
  const [navState, setNavState] = useState(false)
  return (
    <div>
      <Sidebar setNav={(val) => setNavState(val)} />
      <div
        style={{
          marginLeft: navState ? '180px' : '40px',
          transition: '.5s',
        }}
      >
        <Marque />
      </div>
    </div>
  )
}

export default Menu
