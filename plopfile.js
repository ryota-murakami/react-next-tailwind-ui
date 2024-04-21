const componentGenerator = require('./generators/index')

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator)
}
