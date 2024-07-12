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

  const filteredTickets = useMemo(() => filterTickets(tickets, filters), [tickets, filters])

  const sortedTickets = useMemo(() => sortTickets(filteredTickets, sort).slice(0, ticketCount), [filteredTickets, sort, ticketCount])

  const handleShowMore = useCallback(() => {
    setTicketCount((prevCount) => prevCount + 5)
  }, [])

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
      {sortedTickets.length > 0 ? (
        sortedTickets.map((ticket) => (
          <Ticket key={`${ticket.price}-${ticket.carrier}-${ticket.segments[0].date}`} ticket={ticket} />
        ))
      ) : (
        !loading && !error && (
          <div className={styles.noTicketsMessage}>
            Рейсов, подходящих под заданные фильтры, не найдено
          </div>
        )
      )}
      {stop && sortedTickets.length > 0 && (
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
