import {default as counterItem} from './counter.test.js';
test('test Number of elements returned by counterItem', ()=>{
  document.body.innerHTML = '<ul>'
  + '<li>'
  + '<li>'
  + '<li>'
  + '<li>'
  + '</ul>';
})