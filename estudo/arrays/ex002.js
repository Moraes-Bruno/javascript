let oss = ["Ubuntu", "Arch", "Mint", "Endeavor", "Pop"];

let index = oss.indexOf("Arch");

console.log(index);

console.log("-------------------------");

for(let os of oss){
    console.log(os)
}

console.log("-------------------------");

//sort: Organiza os elementos em ordem alfabetica
console.log(oss.sort());

console.log(oss.sort().reverse());