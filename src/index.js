import './hello.js'
import './stylesheet.scss'

  
function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack 5';
  element.classList.add('hello');

  return element;
  
}

document.body.appendChild(component());