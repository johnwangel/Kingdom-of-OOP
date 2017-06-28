const Bilateral = require('Bilateral');

class Mollusk extends Bilateral {
  constructor(name){
    super();
    this._name = name;
    this._body = 'soft-bodied';
  }

}

module.exports = Mollusk;