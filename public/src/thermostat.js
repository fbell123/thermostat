function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.minimumTemperature = 10;
  this.maxTempWithPowerSave = 25;
  this.maxTempWithoutPowerSave = 32;
  this.maximumTemperature = this.maxTempWithPowerSave;
}

Thermostat.prototype.raiseTemperature = function () {
  if (this.temperature >= this.maximumTemperature) {
    this.temperature = this.maximumTemperature;
    'Max temperature reached';
  } else {
    this.temperature += 1;
  };
};

Thermostat.prototype.lowerTemperature = function () {
  if (this.temperature <= this.minimumTemperature) {
    this.temperature = this.minimumTemperature;
    'Minimum temperature reached';
  } else {
    this.temperature -= 1;
  };
};

Thermostat.prototype.togglePowerSave = function () {
  if (this.maximumTemperature === this.maxTempWithPowerSave) {
      this.maximumTemperature = this.maxTempWithoutPowerSave;
  }
  else {
    this.maximumTemperature = this.maxTempWithPowerSave;
  };
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.defaultTemperature;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < 18) {
    return 'low-usage';
  }
  else if(this.temperature > 17 && this.temperature < 25) {
    return 'medium-usage';
  }
  else if(this.temperature > 24) {
    return 'high-usage';
  }
};


var thermostat = new Thermostat();
