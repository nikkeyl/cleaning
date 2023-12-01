import { html } from '@js/helpers/nodeList'

/*! LOADED */
export function addLoadedClass() {
    window.addEventListener('load', () => html.classList.add('loaded'))
}
