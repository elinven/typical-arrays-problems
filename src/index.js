
exports.min = function min (array) {
  return typeof(array) == typeof([]) ? array.length > 0 ? Math.min.apply(null, array) : 0 : 0;
}

exports.max = function max (array) {
  return typeof(array) == typeof([]) ? array.length > 0 ? Math.max.apply(null, array) : 0 : 0;
}

exports.avg = function avg (array) {
  return typeof(array) == typeof([]) ? array.length > 0 ? array.reduce((sum, current) => sum + current, 0)/array.length : 0 : 0;
}
