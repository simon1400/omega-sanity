import React, {useState, useEffect} from 'react'
import Spinner from 'part:@sanity/components/loading/spinner'
import {StateLink, withRouterHOC} from 'part:@sanity/base/router'
import styles from '../Basket.css'
import axios from 'axios'

import done from '../assets/done.svg'
import newIcon from '../assets/new.svg'
import waiting from '../assets/waiting.svg'
import canceled from '../assets/canceled.svg'

const Menu = ({setOrders, orders}) => {

  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    axios.post('https://omega.hardart.cz/.netlify/functions/getOrder', {email: 'all'}).then(res => {
      if(!res.data.data.length){
        setOrders(false)
      }else{
        setOrderItems(res.data.data)
        setOrders(res.data.data)
      }
    })
  }, [])

  if(orderItems.length){
    return (
      <div className={styles.blockCol + ' ' + styles.baseColumn}>
        <div className={styles.contentWrap}>
          <h2 className={styles.head}>Objednávky</h2>
          <nav className={styles.menuWrap}>
            <ul>
              {orderItems.map(item =>
                <li key={item._id} className={styles.menuWrapUlLi}>
                  <StateLink className={styles.menuWrapUlLiA} state={{selectedBasket: item._id}}>
                    <img src={done} alt="success" className={styles.menuWrapUlLiAImg} />
                    <span>#{item.idOrder}</span>
                    {' '}{item.name} {item.surname}
                  </StateLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    )
  }else{
    return (
      <div className={styles.list}>
        <Spinner message="Nahrávám..." center={true} />
      </div>
    )
  }
}


export default withRouterHOC(Menu)
