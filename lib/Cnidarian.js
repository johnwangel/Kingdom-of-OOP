const Animal = require('Animal');

class Cnidarian extends Animal {
  constructor(name, body){
    super();
    this._symmetry = 'bilateral';
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(body){
    this._body = body;
  }
}

module.exports = Cnidarian;