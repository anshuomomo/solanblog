export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeYmd (timestamp) {
  const preg = /^[\d]+$/
  const isTimestamp = preg.test(timestamp)
  if (!isTimestamp) {
    let time = Date.parse(timestamp)
    time /= 1000
    timestamp = time
  }
  const tmp = new Date(timestamp * 1000)
  var year = tmp.getFullYear()
  var month = tmp.getMonth() + 1
  var date = tmp.getDate()
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}
