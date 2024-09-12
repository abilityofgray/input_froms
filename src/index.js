
import './stylesheet.scss'
import './index.twig'
import './svg/icon.svg'

//import './image/*.png';


//batch import resourse
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./image', false, /\.(png|jpe?g|svg)$/));
//const twigTepmlates = importAll(require.context('./templates', false, /\.twig$/));