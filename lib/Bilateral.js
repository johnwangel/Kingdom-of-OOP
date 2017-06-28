const Animal = require('Animal');

class Bilateral extends Animal {
  constructor(name, body){
    super(name, body);
    this._symmetry = 'bilateral';
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(body) {
    this._body = body;
  }

}

module.exports = Bilateral;