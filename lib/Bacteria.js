const LivingThing = require('LivingThing');

class Bacteria extends LivingThing{
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    super(name, uniCellular, trueNucleus, anaerobic, asexual, mobile);
    this.name = name;
    this._uniCellular = true;
    this._trueNucleus = false;
    this._anaerobic = false;
    this._asexual = true;
    this._mobile = false;
  }
}

module.exports = Bacteria;