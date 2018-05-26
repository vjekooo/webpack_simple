
import '../style/main.scss'

console.log('Hello bbbbbb')

if (module.hot) {
    module.hot.accept('./index.js', function() {
        console.log('HRM updated!!!')
    })
}