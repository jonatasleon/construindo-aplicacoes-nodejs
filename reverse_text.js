module.exports = function(text) {
  return text.split(' ').map(word => word.split('').reverse().join('')).reverse().join(' ');
};