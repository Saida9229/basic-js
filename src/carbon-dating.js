const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(final_activity) {
  var check = /^[0-9]+$/;

  if(final_activity.value(check)  && parseInt(final_activity) < 20){
    var fa= parseInt(final_activity);
    return Math.round(Math.LN(MODERN_ACTIVITY/fa)*HALF_LIFE_PERIOD/0.693);
  }
  else{
    return false;
  }
  
};
