import { format, add } from 'date-fns'

export const filterTickets = (allTickets, activeFilters) => {
  const activeFilterKeys = Object.keys(activeFilters).filter(key => activeFilters[key] && key !== 'all')
  if (activeFilterKeys.length === 0) return []

  return allTickets.filter(ticket => ticket.segments.every(segment => {
    const stopsCount = segment.stops.length
    if (stopsCount === 0) return activeFilters.noStops
    if (stopsCount === 1) return activeFilters.oneStop
    if (stopsCount === 2) return activeFilters.twoStops
    if (stopsCount === 3) return activeFilters.threeStops
    return false
  }))
}

export const sortTickets = (tickets, sortType) => tickets.sort((a, b) => {
  if (sortType === 'cheap') {
    return a.price - b.price
  } if (sortType === 'fast') {
    const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
    const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)
    return durationA - durationB
  }
  return 0
})

export const formatSegmentTime = (date, duration) => {
  const departure = new Date(date)
  const arrival = add(departure, { minutes: duration })
  return `${format(departure, 'HH:mm')} – ${format(arrival, 'HH:mm')}`
}

export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours} ч ${minutes} м`
}

export const formatStops = (stops) => {
  if (stops.length === 0) return 'Без пересадок'
  if (stops.length === 1) return '1 пересадка'
  return `${stops.length} пересадки`
}