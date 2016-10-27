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

    // expect{ function() (thermostat.raiseTemperature())}.toChange(temperature()).by(1)

  describe("#lowerTemperature", function() {
    it('descreases temp by 1', function () {
      thermostat.lowerTemperature();
      expect(thermostat.temperature).toBe(19);
    });
  });
});
