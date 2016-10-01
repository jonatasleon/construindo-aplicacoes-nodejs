'use strict';

module.exports = function(arr) {
  arr.map(arg => {
    console.log((arg !== 42) ? arg : 'THE ANSWER!');
  });
};
