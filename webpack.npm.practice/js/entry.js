import _ from 'lodash'
import '../style/main.css'

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','Webpack'], ' ');
  return element;
}

document.body.appendChild(component());