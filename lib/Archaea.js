const LivingThing = require('LivingThing');

class Archaea extends LivingThing {
  constructor(name) {
    super();
    this.name = name;
    this._uniCellular = true;
    this._trueNucleus = false;
    this._anaerobic = true;
    this._asexual = true;
    this._mobile = false;
  }
}

module.exports = Archaea;