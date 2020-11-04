const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link : "",
  getLength() {
    return this.link.length;
  },
  addLink(value) {
    let add = "( " + String(value) + " )";
    if (this.link.length === 0) {
    this.link += add;
    }
    else if (this.link.length !== 0) {
      this.link += "~~";
      this.link += add;
    }   
    return chainMaker;
  },
  removeLink(position) {
  let numOfWaves = this.link.split("~~").length - 1;
  if (position < 1 || typeof position !== 'number' || position > numOfWaves + 1) {
  this.link = "";
  throw Error("incorrect position!")
  }
  let arr = this.link.split("~~");
  arr.splice(position-1, 1);
  this.link = arr.join("~~");
  return chainMaker;
  },
  reverseChain() {
    this.link = this.link.split("~~").reverse().join("~~");
    return chainMaker;
  },
  finishChain() {
    let result = this.link;
    this.link = "";
    return result;
  }
};

module.exports = chainMaker;
