const Eukaryota = require('Eukaryota');

class Fungi extends Eukaryota {
  constructor(name){
    super(name);
    this._uniCellular = false;
    this._asexual = true;
    this._mobile = false;
    this._heterotroph = true;
  }
}

module.exports = Fungi;