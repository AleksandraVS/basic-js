const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  /*let expr = ""; 
  let newArr = arr;
  if (Array.isArray(arr) === false) 
  throw Error("Argument is not an array!");

  for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
  expr = arr[i];
  switch (expr) 
      {
        case "--discard-next":
          newArr = arr;
          if (arr[i+1] !== undefined) {      
          newArr.splice(i,2);
          }
          else newArr.splice(i,1);
          break;

        case "--discard-prev":
          newArr = arr;
          if (arr[i-1] !== undefined) {      
          newArr.splice(i-1,2);
          }
          else newArr.splice(i,1);
          break;
        
        case "--double-next": 
            newArr = arr;
            if (arr[i+1] !== undefined) {
            newArr.push(arr[i+1]);
            newArr.splice(i,1);
            newArr.sort(function(a, b) {return a - b;});
            }
            else newArr.splice(i,1);
          break;
        
        case "--double-prev": 
            newArr = arr;
            if (arr[i-1] !== undefined) {
            newArr.push(arr[i-1]);
            newArr.splice(i,1);
            newArr.sort(function(a, b) {return a - b;});
            }
            else newArr.splice(i,1);
          break;        
        default:
      } 
} 
} 
return newArr;*/
};
