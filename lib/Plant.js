const Eukaryota = require('./Eukaryota');

class Plant extends Eukaryota {
  constructor(name, symmetry){
    super(name, false, true, false, false);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(symmetry){
    this._symmetry = !symmetry;
  }

}

module.exports = Plant;