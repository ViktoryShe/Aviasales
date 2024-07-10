import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { Alert } from 'antd'

import { fetchSearchId } from '../../actions/ticketThunks'
import Ticket from '../Ticket/Ticket'
import Spinner from '../Spinner/Spinner'
import { filterTickets, sortTickets } from '../../utils/ticketUtils'

import styles from './TicketList.module.scss'

function TicketList() {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const stop = useSelector((state) => state.tickets.stop)
  const error = useSelector((state) => state.tickets.error)
  const loading = useSelector((state) => state.tickets.loading)
  const filters = useSelector((state) => state.filters)
  const sort = useSelector((state) => state.sort)
  const [ticketCount, setTicketCount] = useState(5)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  const memoizedTickets = useMemo(() => {
    const filtered = filterTickets(tickets, filters)
    const sorted = sortTickets(filtered, sort)
    return sorted.slice(0, ticketCount)
  }, [tickets, ticketCount, filters, sort])

  const handleShowMore = useCallback(() => {
    setTicketCount((prevCount) => prevCount + 5)
  }, [])

  const renderTickets = () => (
    memoizedTickets.map((ticket) => (
      <Ticket key={`${ticket.price}-${ticket.carrier}-${ticket.segments[0].date}`} ticket={ticket} />
    ))
  )

  return (
    <div className={styles.ticketList}>
      {loading && <Spinner />}
      {error && (
        <Alert 
          message="Ошибка загрузки билетов" 
          description={error}
          type="error" 
          showIcon 
        />
      )}
      {memoizedTickets.length > 0 ? (
        renderTickets()
      ) : (
        !loading && !error && (
          <div className={styles.noTicketsMessage}>
            Рейсов, подходящих под заданные фильтры, не найдено
          </div>
        )
      )}
      {stop && memoizedTickets.length > 0 && (
        <button
          type="button"
          onClick={handleShowMore}
          className={classNames(styles.showMoreButton)}
        >
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList