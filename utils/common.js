export function randomDate(start, end) {
  return new Date(start.getTime()
    + Math.random() * (end.getTime() - start.getTime()));
}

export function formatDate(date) {
  return date.getFullYear() + '-'
    + ('0' + (date.getMonth() + 1)).slice(-2)
    + '-' + ('0' + date.getDate()).slice(-2)
    + ' '
    + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
}