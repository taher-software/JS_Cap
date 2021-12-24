/**
 * @jest-environment jsdom
 */

import counterItem from './counter_items.js';

test('test Number of comments returned by counterItem', () => {
  document.body.innerHTML = '<ul>'
  + '<li>'
  + '<li>'
  + '<li>'
  + '</ul>';
  const container = document.querySelector('ul');
  expect(counterItem(container)).toBe(3);
});