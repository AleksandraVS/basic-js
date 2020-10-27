const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = "";
    let names = [];
    
    if (Array.isArray(members) === false) return false;

    for (let i of members) {
    if (typeof i === 'string') {
    i = i.replace(/\s/g, '');
    names.push(i);
     }
    } 
            
    for (let i = 0; i < names.length; i++) 
    names[i] = names[i].toUpperCase();

    names.sort();
    
    for (j of names) 
    result += j.charAt(0);
      
    return result;
};
