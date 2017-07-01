class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }
  set name(name){
    this._name = name;
  }
  get uniCellular() {
    return this._uniCellular;
  }
  set uniCellular(uniCellular) {
    this._uniCellular = uniCellular;
  }

  get multiCellular(){
    return !this._uniCellular;
  }

  set multiCellular(value) {
    this._uniCellular = !value;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(eukaryote) {
    this._trueNucleus = eukaryote;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(prokaryote) {
    this._trueNucleus = !prokaryote;
  }

  get anaerobic(){
    return this._anaerobic;
  }

  set anaerobic(anaerobic){
    this._anaerobic = anaerobic;
  }

  get aerobic(){
    return !this._anaerobic;
  }

  set aerobic(aerobic){
    this._anaerobic = !aerobic;
  }

  get asexual(){
    return this._asexual;
  }

  set asexual(asexual){
    this._asexual = asexual;
  }

  get sexual(){
    return !this._asexual;
  }

  set sexual(sexual){
    this._asexual = !sexual;
  }

  get mobile(){
    return this._mobile;
  }

  set mobile(mobile){
    this._mobile = mobile;
  }

  get immobile(){
    return !this._mobile;
  }

  set immobile(immobile){
    this._mobile = !immobile;
  }

}

module.exports = LivingThing;