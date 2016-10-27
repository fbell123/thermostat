function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
}

Thermostat.prototype.raiseTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.lowerTemperature = function () {
  this.temperature -= 1;
};


var thermostat = new Thermostat();
