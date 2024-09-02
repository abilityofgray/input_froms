import template from './footer.twig';
import './stylesheet.scss'


function component() {
  const element = document.createElement('footer');

  const html = template();
  console.log(html);
  //document.getElementById('app').innerHTML = html;
  element.innerHTML = html;
  //element.classList.add('hello');

  return element;

}


// => returns pre-compiled template as a function and automatically includes Twig.js to your project
 


document.body.appendChild(component());