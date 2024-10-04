import React from 'react'
import './activity.css'

// Ícones Importados
import {BsArrowRightShort} from 'react-icons/bs'

// Mídias Importadas
import user from '../../../Assets/user2.jpg'
import user2 from '../../../Assets/user3.jpg'
import user3 from '../../../Assets/user4.jpg'
import user4 from '../../../Assets/user5.jpg'
import user5 from '../../../Assets/user.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className= 'icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Rilley Jhonsons</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Paula Sensorio</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Gabriella Fox</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            9 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Katy Miller</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            23 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Jennifer Swan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            35 min ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity