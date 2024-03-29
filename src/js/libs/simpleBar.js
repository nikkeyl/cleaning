/*!
 * SIMPLEBAR PLUGIN
 * https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
 */
import SimpleBar from 'simplebar'

import '@scss/libs/simpleBar'

if (document.querySelectorAll('[data-simplebar]').length) {
    document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
        new SimpleBar(scrollBlock, {
            autoHide: false,
            scrollBarMinSize: 100
        })
    })
}
