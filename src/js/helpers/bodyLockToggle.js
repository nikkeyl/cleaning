import { html } from '@js/helpers/nodeList'

/*! BODY LOCK TOGGLE */
let lockPadding = document.querySelectorAll('[data-lp]')
export let bodyLockStatus = true
export let bodyLockToggle = (delay = 500) => {
    if (html.classList.contains('lock')) {
        bodyUnlock(delay)
    } else {
        bodyLock(delay)
    }
}
export let bodyUnlock = (delay = 500) => {
    let body = document.querySelector('body')
    if (bodyLockStatus) {
        setTimeout(() => {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i]
                el.style.paddingRight = '0px'
            }
            body.style.paddingRight = '0px'
            html.classList.remove('lock')
        }, delay)
        bodyLockStatus = false
        setTimeout(() => {
            bodyLockStatus = true
        }, delay)
    }
}
export let bodyLock = (delay = 500) => {
    let body = document.querySelector('body')
    if (bodyLockStatus) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i]
            el.style.paddingRight =
                window.innerWidth -
                document.querySelector('.wrapper').offsetWidth +
                'px'
        }
        body.style.paddingRight =
            window.innerWidth -
            document.querySelector('.wrapper').offsetWidth +
            'px'
        html.classList.add('lock')
        bodyLockStatus = false
        setTimeout(() => {
            bodyLockStatus = true
        }, delay)
    }
}
