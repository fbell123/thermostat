function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.minimumTemperature = 10;
  this.maxTempWithPowerSave = 25;
  this.maxTempWithoutPowerSave = 32;
  this.maximumTemperature = this.maxTempWithPowerSave;
}

Thermostat.prototype.raiseTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.lowerTemperature = function () {
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSave = function () {
  if (this.maximumTemperature === this.maxTempWithPowerSave) {
      this.maximumTemperature = this.maxTempWithoutPowerSave;
  }
  else {
    this.maximumTemperature = this.maxTempWithPowerSave;
  }
}

var thermostat = new Thermostat();
