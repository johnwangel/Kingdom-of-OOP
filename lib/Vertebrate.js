const Bilateral = require('Bilateral');

class Vertebrate extends Bilateral {
  constructor(name) {
    super();
    this._name = name;
    this._body = 'vertebral-column';
  }
}

module.exports = Vertebrate;