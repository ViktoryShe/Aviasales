import React from 'react'
import PropTypes from 'prop-types'
import { format, add } from 'date-fns'

import styles from './Ticket.module.scss'

const formatSegmentTime = (date, duration) => {
  const departure = new Date(date)
  const arrival = add(departure, { minutes: duration })
  return `${format(departure, 'HH:mm')} – ${format(arrival, 'HH:mm')}`
}

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours} ч ${minutes} м`
}

const formatStops = (stops) => {
  if (stops.length === 0) return 'Без пересадок'
  if (stops.length === 1) return '1 пересадка'
  return `${stops.length} пересадки`
}

function Ticket({ ticket }) {
  const renderSegments = (segment) => (
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
  )

  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header-text']}>{ticket.price} Р</div>
        <div className={styles.carrier}>
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier} />
        </div>
      </div>
      <div className={styles['ticket-route-details']}>
        {ticket.segments.map((segment) => renderSegments(segment))}
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