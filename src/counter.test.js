/**
 * @jest-environment jsdom
 */
import {default as counterItem} from './counter_items.js';
test('test Number of elements returned by counterItem', ()=>{
  document.body.innerHTML = '<ul>'
  + '<li>'
  + '<li>'
  + '<li>'
  + '<li>'
  + '</ul>';
  const container = document.querySelector('ul');
  expect(counterItem(container)).toBe(4);
})