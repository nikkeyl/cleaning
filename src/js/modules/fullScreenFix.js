import { isMobile } from '@js/helpers/isMobile'
import { html } from '@js/helpers/nodeList'

/*! FULL SCREEN FIX */
export function fullVHfix() {
    const fullScreens = document.querySelectorAll('[data-fullscreen]')
    if (fullScreens.length && isMobile.any()) {
        window.addEventListener('resize', fixHeight)
        function fixHeight() {
            let vh = window.innerHeight * 0.01
            html.style.setProperty('--vh', `${vh}px`)
        }
        fixHeight()
    }
}
