describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature).toBe(20);
  });

  describe("#raiseTemperature", function() {

  });

  describe("#lowerTemperature", function() {

  });
});
