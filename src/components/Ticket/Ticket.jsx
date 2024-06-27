import React from 'react'

import styles from './Ticket.module.scss'

function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header-text']}>13 400 P</div>
        <div className={styles.carrier}>
          <img src="//pics.avs.io/99/36/S7.png" alt="S7 Airlines" />
        </div>
      </div>
      <div className={styles['ticket-route-details']}>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>MOW – HKT</div>
          <div className={styles['ticket-route-details__time']}>10:45 – 08:00</div>
        </div>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>В ПУТИ</div>
          <div className={styles['ticket-route-details__time']}>21ч 15м</div>
        </div>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>2 ПЕРЕСАДКИ</div>
          <div className={styles['ticket-route-details__time']}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles['ticket-route-details']}>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>MOW – HKT</div>
          <div className={styles['ticket-route-details__time']}>11:20 – 00:50</div>
        </div>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>В ПУТИ</div>
          <div className={styles['ticket-route-details__time']}>13ч 30м</div>
        </div>
        <div className={styles['ticket-route-details__item']}>
          <div className={styles['ticket-route-details__title']}>1 ПЕРЕСАДКА</div>
          <div className={styles['ticket-route-details__time']}>HKG</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
