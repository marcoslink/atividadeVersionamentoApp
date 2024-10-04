import React from 'react'
import './listing.css'

// Ícones Importados
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

// Mídias Importadas
import img from '../../../Assets/img1.png'
import img1 from '../../../Assets/img3.png'
import img2 from '../../../Assets/img4.png'
import img3 from '../../../Assets/img5.png'

import user from '../../../Assets/user2.jpg'
import user1 from '../../../Assets/user3.jpg'
import user2 from '../../../Assets/user4.jpg'
import user3 from '../../../Assets/user5.jpg'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Orquídea"/>
          <h3>Orquídea</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img1} alt="Suculenta"/>
          <h3>Suculenta</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="Café de Salão"/>
          <h3>Café de Salão</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img3} alt="Abeto"/>
          <h3>Abeto</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="Imagem Do Usuário" />
              <img src={user1} alt="Imagem Do Usuário" />
              <img src={user2} alt="Imagem Do Usuário" />
              <img src={user3} alt="Imagem Do Usuário" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plants Sold <br />
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user2} alt="Imagem Do Usuário" />
              <img src={user1} alt="Imagem Do Usuário" />
              <img src={user3} alt="Imagem Do Usuário" />
              <img src={user} alt="Imagem Do Usuário" />
            </div>
            <div className="cardText">
              <span>
                28.896 Plants Sold <br />
                <small>
                  26 Sellers <span className='date'>31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing