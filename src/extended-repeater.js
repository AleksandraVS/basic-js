const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.addition === undefined) {
    if (options.separator === undefined)
    options.separator = "+";

    let temp = options.repeatTimes - 1;
    let tempStr = String(str);
    while (temp !== 0)
   {
    str += options.separator;
    str += tempStr;
    temp--;
   }      
  }
  else {
    if (options.additionSeparator === undefined)
    options.additionSeparator = "";
    if (options.repeatTimes === undefined)
    options.repeatTimes = 0;
    if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 0;
      
    let temp = options.additionRepeatTimes - 1;
    str += String(options.addition);
    while (temp > 0)
    {
      str += options.additionSeparator;
      str += options.addition;
      temp--;
    }

    temp = options.repeatTimes - 1;
    let tempStr = String(str);
    while (temp > 0)
    {
      str += options.separator;
      str += tempStr;
      temp--;
    }
  }
 return str;
};
  