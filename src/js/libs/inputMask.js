/*!
 * INPUTMASK PLUGIN
 * https://github.com/RobinHerbots/Inputmask
 */
import Inputmask from 'inputmask/dist/inputmask.es6.js'
import { routeObjects } from '@js/helpers/routeObjects'

const inputMasks = document.querySelectorAll('input')
if (inputMasks.length) {
    routeObjects.inputmask = Inputmask().mask(inputMasks)
}
