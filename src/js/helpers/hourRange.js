/*! HOUR RANGE */
export function hourRange(start, end, script) {
    const time = new Date()
    const curHour = time.getHours()
    const curMin = time.getMinutes()
    const now = `${curHour}` + '.' + `${curMin}`
    return now >= start && now < end && script()
}
