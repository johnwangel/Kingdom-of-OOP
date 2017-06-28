const LivingThing = require('LivingThing');

class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, asexual, mobile, heterotroph);
    this._trueNucleus = true;
    this._anaerobic = false;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(heterotroph){
    this._heterotroph = heterotroph;
  }

  get autotroph() {
    return this._heterotroph;
  }

  set autotroph(autotroph){
    this._heterotroph = autotroph;
  }

}

module.exports = Eukaryota;