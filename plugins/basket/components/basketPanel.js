import React, {useState, useEffect} from 'react'
import Select from 'react-select';
import Spinner from 'part:@sanity/components/loading/spinner'
import axios from 'axios'
import Tables from './Tables.js'

import styles from '../Basket.css'

const options = [
  { value: 'new_wait', label: 'Nová - čeká na platbu' },
  { value: 'new_payet', label: 'Nová - zaplaceno' },
  { value: 'done', label: 'Dokončeno' },
  { value: 'canceled', label: 'Zrušeno' }
];

const dateFromObjectId = objectId => {
  var date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000),
      day = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear(),
      hour = date.getHours(),
      minutes = date.getMinutes();

  if(day < 10) day = '0' + day
  if(month < 10) month = '0' + month
  if(hour < 10) hour = '0' + hour
  if(minutes < 10) minutes = '0' + minutes

  return `${day}.${month}.${year} ${hour}:${minutes}`;
}


const OrderPanel = ({routeSelected}) => {

  const [order, setOrder] = useState(undefined)

  useEffect(() => {
    axios.post('https://omega.hardart.cz/.netlify/functions/getOrder', {id: routeSelected}).then(res => {
      setOrder(res.data.data[0]);
    })
  }, [routeSelected])

  if (order === undefined) {
    return (
      <div className={styles.document}>
        <Spinner message="Nahrávám..." center={true} />
      </div>
    )
  }

  return (
    <>
    <div className={styles.blockCol + ' ' + styles.baseColumn}>
      <div className={styles.contentWrap}>
        <h2 className={styles.head}>Objednávka č. {order.idOrder}</h2>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Datum</h3>
          <p>{dateFromObjectId(order._id)}</p>
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Stav</h3>
          {/*<Select
            value={state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />*/}
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Způsob platby</h3>
          <p>{order.paymentMethod} (zaplaceno)</p>
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Doprava</h3>
          {order.check.firmInfo ?
            <div>
              <p>{order.firmInfo.companyName}</p>
              <p>IČO: {order.firmInfo.ico}</p>
              <p>DIČ: {order.firmInfo.dic}</p>
            </div>
           : ''}
          {order.check.deliveryAnother ?
            <div>
              <p>{order.anotherAdrress.name} {order.anotherAddress.surname}</p>
              <p>{order.anotherAdrress.email}</p>
              <p>{order.anotherAdrress.phone}</p>
              <p>{order.anotherAdrress.address}</p>
              <p>{order.anotherAdrress.code} {order.anotherAddress.city}</p>
              <p>{order.anotherAdrress.country}</p>
            </div>
           :
            <div>
              <p>{order.contactInfo.name} {order.contactInfo.surname}</p>
              <p>{order.contactInfo.address}</p>
              <p>{order.contactInfo.code} {order.contactInfo.city}</p>
              <p>{order.contactInfo.country}</p>
            </div>
          }
        </div>
        {order.description.length ? <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Poznámka:</h3>
          <p>{order.description}</p>
        </div> : ''}
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Zpusob dopravy</h3>
          <p>{order.deliveryMethod}</p>
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Emailová adresa:</h3>
          <p><a href={`mailto:${order.contactInfo.email}`}>{order.contactInfo.email}</a></p>
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Telefon:</h3>
          <p><a href={`tel:${order.contactInfo.phone}`}>{order.contactInfo.phone}</a></p>
        </div>
        <div className={styles.basket_info_item}>
          <h3 className={styles.head_2}>Fakturace</h3>
          {order.check.firmInfo ?
            <div>
              <p>{order.firmInfo.companyName}</p>
              <p>IČO: {order.firmInfo.ico}</p>
              <p>DIČ: {order.firmInfo.dic}</p>
            </div>
           : ''}
          {order.check.anotherAddressCheck ?
            <div>
              <p>{order.anotherAdress.name} {order.anotherAdress.surname}</p>
              <p>{order.anotherAdress.email}</p>
              <p>{order.anotherAdress.phone}</p>
              <p>{order.anotherAdress.address}</p>
              <p>{order.anotherAdress.code} {order.anotherAdress.city}</p>
              <p>{order.anotherAdress.country}</p>
            </div>
           :
            <div>
              <p>{order.contactInfo.name} {order.contactInfo.surname}</p>
              <p>{order.contactInfo.address}</p>
              <p>{order.contactInfo.code} {order.contactInfo.city}</p>
              <p>{order.contactInfo.country}</p>
            </div>
          }
        </div>

      </div>
    </div>
    <Tables currentOrder={order} />
    </>
  )
}


export default OrderPanel
