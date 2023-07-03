let num = 69.420;

//num = num.toLocaleString("pt-br",{style: "currency",currency: "BRL"});
//num = num.toLocaleString(undefined,{style: "percent"})
num = num.toLocaleString(undefined,{style: "unit",unit: "celsius"});

console.log(num);

