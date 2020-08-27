const CustomError = require("../extensions/custom-error");
var name = "";
module.exports = function createDreamTeam(members) {
  for(var i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      name += members[i].charAt(0).toUpperCase();
    } 
  }
  return name.split('').sort().join();
  
};
