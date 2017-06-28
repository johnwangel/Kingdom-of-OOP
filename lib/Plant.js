const Eukaryota = require('Eukaryota');

class Plant extends Eukaryota {
  constructor(name, symmetry){
    super(name);
    this._name = name;
    this._symmetry = symmetry;
    this._unicellular = false;
    this._asexaul = false;
    this._mobile = true;
    this._heterotroph = true;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(symmetry){
    this._symmetry = symmetry;
  }

}

module.exports = Plant;