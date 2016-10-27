describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature).toBe(20);
  });

  describe("#raiseTemperature", function() {

    it('raises temp by 1', function () {
      thermostat.raiseTemperature();
      expect(thermostat.temperature).toBe(21);
    });
  });

  describe("#lowerTemperature", function() {
    it('decreases temp by 1', function () {
      thermostat.lowerTemperature();
      expect(thermostat.temperature).toBe(19);
    });
  });

  describe("minimumTemperature", function() {
    it('has a minimum temperature of 10', function () {
      expect(thermostat.minimumTemperature).toBe(10);
    });
  });

  describe("maximumTemperature", function() {
    it('has a max temp of 25 if in power save', function () {
      expect(thermostat.maximumTemperature).toBe(25);
    });
    it('has a max temp of 32 if not in power save', function () {
      thermostat.togglePowerSave();
      expect(thermostat.maximumTemperature).toBe(32);
    });
  });

  describe("#resetTemperature", function() {
    it('can be reset to default temperature', function () {
      thermostat.raiseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toBe(20);
    });
  });
});
