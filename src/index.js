import Twig from 'twig'
import './stylesheet.scss'


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Webpack 5';
  element.classList.add('hello');

  return element;

}
Twig.renderFile('.index.twig', {foo:'bar'}, (err, html) => {
  html; // compiled string
});
var template = require("./footer.twig");
// => returns pre-compiled template as a function and automatically includes Twig.js to your project
 
var html = template({title: 'dialog title'});

document.body.appendChild(component());