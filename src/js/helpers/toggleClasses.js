import { removeClasses } from '@js/helpers/removeClasses'

/*! TOGGLE CLASSES */
export function toggleClasses(elem, className, array) {
    if (!elem.classList.contains(className)) {
        removeClasses(array, className)
        elem.classList.add(className)
    }
}
