/* global moment dayjs */
const nerdamer = require("nerdamer/all.min");
var moment = require('moment'); // require
moment().format(); 

console.log('Hello from js');
// setTimeout(function() {
//   console.log('First task done!');
//   setTimeout(function() {
//     console.log('Second task done!');
//     setTimeout(function() {
//       console.log('Third task done!');
//       setTimeout(function() {
//         console.log('Fourth task done!');
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

console.log(moment().format("MMM Do YY"));

var e = nerdamer('x^2+2*(cos(x)+x*x)');
console.log(e.text());
