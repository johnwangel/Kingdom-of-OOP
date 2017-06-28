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
    return this._uniCellular;
  }

  set multiCellular(multiCellular){
    this._uniCellular = multiCellular;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(eukaryote) {
    this._trueNucleus = eukaryote;
  }

  get prokaryote() {
    return this._trueNucleus;
  }

  set prokaryote(prokaryote) {
    this._trueNucleus = prokaryote;
  }

  get anaerobic(){
    return this._anaerobic;
  }

  set anaerobic(anaerobic){
    this._anaerobic = anaerobic;
  }

  get aerobic(){
    return this._anaerobic;
  }

  set aerobic(aerobic){
    this._anaerobic = aerobic;
  }

  get asexaul(){
    return this.asexaul;
  }

  set asexaul(asexaul){
    this.asexaul = asexaul;
  }

  get sexual(){
    return this.asexaul;
  }

  set sexual(sexual){
    this.asexaul = sexual;
  }

  get mobile(){
    return this.mobile;
  }

  set mobile(mobile){
    this.mobile = mobile;
  }

  get immobile(){
    return this.mobile;
  }

  set immobile(immobile){
    this.mobile = immobile;
  }

}

module.exports = LivingThing;