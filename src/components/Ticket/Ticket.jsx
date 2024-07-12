import React from 'react'
import PropTypes from 'prop-types'

import { formatSegmentTime, formatDuration, formatStops } from '../../utils/ticketUtils'

import styles from './Ticket.module.scss'

function Ticket({ ticket }) {
  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header-text']}>{ticket.price} Р</div>
        <div className={styles.carrier}>
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier} />
        </div>
      </div>
      <div className={styles['ticket-route-details']}>
        {ticket.segments.map((segment) => (
          <div key={`${segment.origin}-${segment.destination}-${segment.date}`} className={styles['ticket-route-details__segment']}>
            <div className={styles['ticket-route-details__item']}>
              <div className={styles['ticket-route-details__item__title']}>{segment.origin} – {segment.destination}</div>
              <div className={styles['ticket-route-details__item__time']}>{formatSegmentTime(segment.date, segment.duration)}</div>
            </div>
            <div className={styles['ticket-route-details__item']}>
              <div className={styles['ticket-route-details__item__title']}>В пути</div>
              <div className={styles['ticket-route-details__item__time']}>{formatDuration(segment.duration)}</div>
            </div>
            <div className={styles['ticket-route-details__item']}>
              <div className={styles['ticket-route-details__item__title']}>{formatStops(segment.stops)}</div>
              <div className={styles['ticket-route-details__item__time']}>{segment.stops.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default Ticket