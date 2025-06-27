export default (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime() // 毫秒

  // 处理未来时间，直接返回格式化日期
  if (diff < 0) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    if (year !== now.getFullYear()) {
      return `${year} 年 ${month}/${day}`
    }
    return `${month}/${day}`
  }

  const diffSeconds = Math.floor(diff / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffSeconds < 60) {
    return '刚刚'
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} 分钟前`
  }

  if (diffHours < 24) {
    return `${diffHours} 小时前`
  }

  const DAY_THRESHOLD = 7
  if (diffDays < DAY_THRESHOLD) {
    return `${diffDays} 天前`
  }

  if (date.getFullYear() === now.getFullYear()) {
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}/${day}`
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year} 年 ${month}/${day}`
}
