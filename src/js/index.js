
import '../style/main.scss'
import fryImage from '../assets/images/fry.jpg'

console.log('Hello bbbbbb')

let imageEl = document.querySelector('.image')
imageEl.src = fryImage

if (module.hot) {
    module.hot.accept('./index.js')
}