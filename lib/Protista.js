const Eukaryota = require('Eukaryota');

class Protista extends Eukaryota {
  constructor(name, unicellular, mobile, heterotroph) {
    super(name, mobile, heterotroph);
    this._name = name;
    this._unicellular = unicellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
    this._asexaul = true;
  }
}

module.exports = Protista;