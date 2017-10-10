export function getTimeStamp() {
  return (new Date()).getTime();
}

export function getLocalTime (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
}
