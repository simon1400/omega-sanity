import React, {Fragment} from 'react'
import styles from '../Basket.css'
import Spinner from 'part:@sanity/components/loading/spinner'


const Tables = ({currentOrder}) => {

    return (
      <div className={styles.blockCol + ' ' + styles.bigCol}>
        <div className={styles.contentWrap}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Položky</th>
                <th>Množství</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.basket.length ? currentOrder.basket.map((item, index) =>
                <tr key={index}>
                  <td><div className={styles.img_wrap}><img src={item.imageUrl} /></div></td>
                  <td>{item.title}</td>
                  <td>{item.count} x</td>
                  <td>{item.price} Kč</td>
                </tr>
              ) : ''}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Cena za položky</td>
                {/*<td>{this.getPriceItems()}</td>*/}
              </tr>
              <tr>
                <td colSpan="3">Cena za dopavu</td>
                <td>{currentOrder.deliveryPrice === "ZDARMA" ? '0 Kč' : currentOrder.deliveryPrice}</td>
              </tr>
              <tr>
                <td colSpan="3">Cena za platbu</td>
                <td>{currentOrder.paymentPrice === "ZDARMA" ? '0 Kč' : currentOrder.paymentPrice+' Kč'}</td>
              </tr>
              <tr>
                <th colSpan="3">Celková cena vč. DPH</th>
                <th>{currentOrder.sum} Kč</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
}

export default Tables
