/*! GET DIG FROM STRING */
export function getDigFromString(item) {
    return parseInt(item.replace(/[^\d]/g, ''))
}
