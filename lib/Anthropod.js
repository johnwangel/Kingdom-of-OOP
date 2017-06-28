const Bilateral = require('Bilateral');

class Anthropod extends Bilateral {
  constructor(name) {
    super();
    this._name = name;
    this._body = 'exoskeleton';
  }
}

module.exports = Anthropod;
