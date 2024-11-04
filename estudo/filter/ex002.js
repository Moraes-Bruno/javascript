const ages = [16, 17, 18, 18, 19, 20, 30];
const adults = ages.filter(isAdult);
const childrens = ages.filter(isChild);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
    return element < 18;
  }

console.log(childrens);
console.log("=============================");
console.log(adults);
