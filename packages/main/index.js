import Input from '../input';
import Card from '../card';
import Button from '../button';


const components = [Input, Card, Button];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    component.install(Vue, opts);
  });
};

export {
  install,
  Input, Card, Button
}