$( document ).ready(function() {

  var thermostat = new Thermostat ()

  $(".deneme").text(thermostat.temperature + '°c');

  $("#raise").click(function () {
    thermostat.raiseTemperature();
    $(".deneme").text(thermostat.temperature + '°c');
    if (thermostat.temperature > 24) {
      $("#bar").css({'background': "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #e62e00)"});
    };
    if (thermostat.temperature > 17 && thermostat.temperature < 25) {
      $("#bar").css({'background': "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #000000)"});
    };
  });

  $("#lower").click(function () {
    thermostat.lowerTemperature();
    $(".deneme").text(thermostat.temperature + '°c');
    if (thermostat.temperature < 18) {
      $("#bar").css({'background': "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #33cc33)"});
    };
    if (thermostat.temperature > 17 && thermostat.temperature < 25) {
      $("#bar").css({'background': "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #000000)"});
    };
  });

  $("#reset").click(function () {
    thermostat.resetTemperature();
    $(".deneme").text(thermostat.temperature + '°c');
    if (thermostat.temperature > 17 && thermostat.temperature < 25) {
      $("#bar").css({'background': "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #000000)"});
    };
  });

  $("#toggleEnergySaver").click(function () {
    thermostat.togglePowerSave();
  });

});
