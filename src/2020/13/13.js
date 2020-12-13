export const part1 = ([departure, times]) => {
  const { id, timestamp } = times.split(',').filter(time => time !== 'x').reduce(({ timestamp, id }, time) => {
    const res = time - (departure % time)
    const isEarlier = res < timestamp
    return {
      timestamp: isEarlier ? res : timestamp,
      id: isEarlier ? time : id
    }
  }, { id: '', timestamp: departure })
  return id * timestamp
}
export const part2 = (values) => {}
